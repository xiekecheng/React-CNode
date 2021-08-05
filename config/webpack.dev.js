const {
    merge
} = require('webpack-merge');
const common = require('./webpack.common.js');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './public',
        port: 9002,
        // hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "development",
            template: './public/index.html',
            favicon: "./public/favicon.ico",
            // scriptLoading: "blocking",
            // inject: "body",
          }),
        new ESLintPlugin({
            extensions: ['js', 'jsx'],
            exclude: 'node_modules',
            threads: false
          }),
    ],
    module: {
        rules: [
            // css文件解析
            {
              test: /\.css$/,
              // use: ['style-loader', 'css-loader',"sass-loader"]
              use: ['style-loader', 'css-loader']
            },
            // 图片解析
            {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource'
            },
          ],
    }
});