import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import type {Element} from 'domhandler';

const TEACHER_FILE: string = path.resolve(
  process.cwd(),
  'files',
  'example-gv.html',
);
const STUDENT_FILE: string = path.resolve(
  process.cwd(),
  'files',
  'example-hs.html',
);
const TEACHER_RESULT_FILE: string = path.resolve(
  process.cwd(),
  'files',
  'result-gv.html',
);
const STUDENT_RESULT_FILE: string = path.resolve(
  process.cwd(),
  'files',
  'result-hs.html',
);

function parseFile(filePath: string): Element[][] {
  const fContent: string = fs.readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(fContent);
  const wordSection1 = $($('div.WordSection1').first());
  const children = wordSection1.children();
  const questions: Element[][] = [];
  let index: number = -1;
  for (let i = 1; i < children.length; i++) {
    const element: Element = children.get(i);
    if (
      $(element)
        .text()
        .trim()
        .match(/^([0-9]+)\.\s+/gm)
    ) {
      index++;
      if (!questions.hasOwnProperty(index)) {
        questions[index] = [];
      }
    }
    questions[index].push(element);
  }
  return questions;
}

const teacherQuestions: Element[][] = parseFile(TEACHER_FILE);
const studentQuestions: Element[][] = parseFile(STUDENT_FILE);

function createNewRandomArray(source: Element[][]): number[] {
  const src: number[] = source.map((...[, index]) => index);
  let dest: number[] = [];
  while (src.length > 0) {
    const index: number = Math.floor(Math.random() * src.length);
    dest = [...dest, src[index]];
    src.splice(index, 1);
  }
  return dest;
}

const randomIndexes: number[] = createNewRandomArray(teacherQuestions);

const newTeacherQuestions: Element[][] = randomIndexes.map((index: number) => {
  return teacherQuestions[index];
});
const newStudentQuestions: Element[][] = randomIndexes.map((index: number) => {
  return studentQuestions[index];
});

const $teacherDOM = cheerio.load(fs.readFileSync(TEACHER_FILE, 'utf-8'));
const $studentDOM = cheerio.load(fs.readFileSync(STUDENT_FILE, 'utf-8'));

function createFinalElementList($dom: any, input: Element[][]): Element[] {
  let result: Element[] = [];
  input.forEach((el: Element[], index: number) => {
    const e: Element = el[0];
    $dom(e).html(
      $dom(e)
        .html()
        .replace(/>\s*([0-9]+)\.\s*</, `>${index + 1}.<`),
    );
    el.forEach((e: Element) => {
      result = [...result, e];
    });
  });
  return result;
}

const teacherFinal: Element[] = createFinalElementList(
  $teacherDOM,
  newTeacherQuestions,
);
const studentFinal: Element[] = createFinalElementList(
  $studentDOM,
  newStudentQuestions,
);

$teacherDOM('div.WordSection1').html(
  teacherFinal.map((e: Element) => $teacherDOM.html(e)).join('\n'),
);
$studentDOM('div.WordSection1').html(
  studentFinal.map((e: Element) => $studentDOM.html(e)).join('\n'),
);

fs.writeFileSync(TEACHER_RESULT_FILE, $teacherDOM.html());
fs.writeFileSync(STUDENT_RESULT_FILE, $studentDOM.html());
