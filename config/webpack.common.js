const path = require('path')
const ProgressPlugin = require('progress-webpack-plugin')
const HappyPack = require('happypack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const {
//     VueLoaderPlugin
// } = require('vue-loader')

module.exports = {

    entry: {
        // 文件抽离
        'react-vendors': ['react', 'react-dom'],
        app: {
          // import: './src/index.js',
          import: path.resolve(__dirname,'../src/main.js'),
          dependOn: 'react-vendors'
        },
      },
      output: {
        // 要使用相对路径
        filename: './static/js/[name].[chunkhash].js',
        // filename: './static/js/[name].js',
    
        path: path.resolve(__dirname, '../dist'),
        // 外部服务器serve
        // publicPath: '/',
        clean: true,
        // charset:true
        chunkFilename: '[id].js'
      },
      plugins: [
        // new BundleAnalyzerPlugin()
        new HappyPack({
          loaders: ['babel-loader']
        }),
        new ProgressPlugin(true)
      ],
      module: {
        rules: [ // 开启多线程来加载并编译.js代码
          {
            test: /\.(js|jsx)$/i,
            use: [{
              loader: 'happypack/loader',
              options: {
                threads: 3
              }
            }],
            exclude: /node_modules/
          },
        ],
      },

    resolve:{
        extensions: ['.js','.jsx','.ts','.tsx'],
        alias:{
          "@":path.resolve(__dirname,"../src"),
        }
      },
};