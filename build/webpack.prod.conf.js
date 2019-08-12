const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const prodWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  // 对不同的文件进行提取
  optimization: {
    splitChunks: {
      chunks: 'initial',                           // 只对入口文件处理
      cacheGroups: {
          commons: {
              name: "commons",
              chunks: "initial",
              minChunks: 2
          },
          vendor: { 
              priority: 100,                       // 缓存优先级权重
              chunks: "all",                       // 应用范围
              test: /[\\/]node_modules[\\/]/,      // ??
              name: "vendor",                      // split 出来的 chunk 的名字
              minChunks: 1,                        // 最小chunks
              maxInitialRequests: 5,
              minSize: 0
          }
      }
    },
    runtimeChunk: {
      name: 'manifest'
    }
  },
  // 是否启用调试
  devtool: false,
  // 使用插件
  plugins: [new HtmlWebpackPlugin({
    template: './assert/index.html'
  })]
})

module.exports = prodWebpackConfig
