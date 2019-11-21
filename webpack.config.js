var path = require("path");

module.exports = {
  entry: "./dist/src/index.js",
  output: {
    path: __dirname,
    filename: "./dist/main.js"
  },
  module: {
    rules: [{ test: /\.css$/, loader: "style!css" }]
  },
  devtool: "source-map"
};