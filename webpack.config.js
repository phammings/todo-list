const path = require('path');

module.exports = {
  devtool: "eval-cheap-source-map",
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};