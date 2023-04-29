const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //dependencia instalada via npm

module.exports = {
  mode: 'production',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],

};
