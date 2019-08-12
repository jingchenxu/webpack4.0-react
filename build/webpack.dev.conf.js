const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const portfinder = require('portfinder')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  // 支持调试工具的开启
  devtool: 'cheap-module-eval-source-map',            // string | false
  // 配置开发调试服务
  devServer: {
    clientLogLevel: 'warning',                        // 客户端输出的日志等级
    hot: true,                                        // 支持热更新
    port: 2048,                                       // 服务启动后占据的端口号
    open: true,                                       // 服务开启后是否自动打开浏览器
    disableHostCheck: true,
    overlay: false,                                   // 错误是否在浏览器中显示出来
  },
  // 配置插件
  plugins: [
    // 配置代码热更新插件
    new webpack.HotModuleReplacementPlugin(),
    // 将生成的静态资源注入到html当中
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './assert/index.html',
      inject: true
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  // 判断预先设置的端口是否可用，如果不可用则找一个可以用的
  portfinder.basePort = 2048
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // 将端口配置到devserver当中
      devWebpackConfig.devServer.port = port
      // 添加对webpack报错的校验
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`开发环境运行在：http:///${devWebpackConfig.devServer.host}:${port}`]
        },
        onErrors: () => {
          console.error('dev-server发生了异常')
        }
      }))
      resolve(devWebpackConfig)
    }
  })
})