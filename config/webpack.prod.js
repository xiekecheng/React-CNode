const {
  merge
} = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      // css文件处理
      {
        test: /\.(c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          // "sass-loader",
        ],
      },
      // 图片压缩
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {},
          },
        ],
      },
    ],
  },
  plugins: [
    // css文件抽离 - 生产环境
    new MiniCssExtractPlugin({
      filename: './static/css/[name].[chunkhash].css',
      chunkFilename: '[id].[chunkhash].css',
    }),
    new HtmlWebpackPlugin({
      title: "development",
      template: './public/index.html',
      favicon: "./public/favicon.ico",
      scriptLoading: "blocking",
      inject: "body",
    }),
  ],
  //   treeShaking
});