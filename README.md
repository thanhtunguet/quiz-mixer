Công cụ Trộn Câu hỏi Trắc nghiệm từ Excel
Một ứng dụng web frontend đơn giản, không cần server, giúp người dùng trộn các câu hỏi và đáp án từ một file Excel. Công cụ này được xây dựng hoàn toàn bằng HTML, CSS (Tailwind CSS), và JavaScript, sử dụng thư viện SheetJS để xử lý file Excel ngay trên trình duyệt.

✨ Tính năng
Tải file Excel lên: Hỗ trợ các định dạng .xlsx và .xls.

Chọn Sheet linh hoạt: Tự động đọc và liệt kê tất cả các sheet có trong file để người dùng lựa chọn.

Trộn câu hỏi: Xáo trộn thứ tự của tất cả các câu hỏi một cách ngẫu nhiên.

Trộn đáp án (Tùy chọn): Cho phép người dùng chọn có muốn xáo trộn thứ tự các đáp án (từ cột C đến H) trong mỗi câu hỏi hay không.

Tùy chỉnh số lần trộn: Người dùng có thể nhập số lần trộn để tăng tính ngẫu nhiên.

Xử lý dữ liệu thông minh: Tự động bỏ qua các hàng trống và chỉ xử lý các hàng có chứa nội dung câu hỏi.

Xem trước kết quả: Hiển thị 10 câu hỏi đầu tiên của bộ đề đã trộn để người dùng kiểm tra trước khi tải về.

Tải về file đã trộn: Xuất kết quả ra một file Excel mới với tên BoCauHoi_DaTron.xlsx.

Bảo mật: Toàn bộ quá trình xử lý diễn ra trên trình duyệt của người dùng, không có dữ liệu nào được tải lên máy chủ.

🚀 Cách sử dụng
Mở ứng dụng: Truy cập vào trang GitHub Pages của kho lưu trữ này (sau khi đã thiết lập Action).

Bước 1: Chọn File: Nhấn nút "Chọn File Excel" và tải lên file câu hỏi của bạn.

Bước 2: Tùy chỉnh:

Chọn Sheet chứa bộ câu hỏi từ danh sách thả xuống.

Nhập Số lần trộn mong muốn (mặc định là 1).

Tích vào ô "Trộn thứ tự các đáp án" nếu cần.

Bước 3: Xử lý: Nhấn nút "Bắt đầu trộn".

Bước 4: Tải về: Xem trước kết quả và nhấn "Tải File Excel Đã Trộn" để lưu file về máy.

📂 Cấu trúc File Excel đầu vào
Ứng dụng yêu cầu file Excel có cấu trúc như sau:

Hàng 1: Dòng tiêu đề (Header).

Cột A: Số thứ tự (STT).

Cột B: Nội dung câu hỏi.

Cột C - H: Các đáp án (A, B, C, D, E, F). Các cột đáp án sau có thể để trống.

Cột I: Đáp án đúng.

Cột J: Giải thích đáp án.

🛠️ Công nghệ sử dụng
HTML5

Tailwind CSS: Framework CSS để xây dựng giao diện nhanh chóng.

JavaScript (ES6+): Logic xử lý chính của ứng dụng.

SheetJS (xlsx.js): Thư viện để đọc và ghi file Excel.

📄 Giấy phép
Dự án này được cấp phép theo Giấy phép MIT.