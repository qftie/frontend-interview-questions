const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production", // 开发模式
  entry: "./src/index.js", // 入口文件
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.[contenthash].js", // 文件名变，hash就会变，文件名就会变（缓存在这里呀）
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.join(__dirname, "src"),
        loader: "babel-loader",
      },
    ],
  },
};
