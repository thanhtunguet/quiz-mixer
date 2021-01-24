const {resolve} = require('path');
const nameof = require('ts-nameof');
const WebpackNodeExternals = require('webpack-node-externals');

const mode = process.env.NODE_ENV || 'development';

let plugins = [];

module.exports = {
  mode,
  plugins,
  target: 'node',
  externals: [new WebpackNodeExternals()],
  devtool: mode === 'development' ? 'source-map' : undefined,
  entry: {
    index: './src/index.ts',
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => {
            return {
              before: [nameof],
            };
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.node'],
    alias: {
      src: resolve(__dirname, 'src'),
    },
  },
};
