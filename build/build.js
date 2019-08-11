process.env.NODE_ENV = 'production'

const webpack = require('webpack')
const webpackConfig = require('./webpack.prod.conf')
const ora = require('ora')
const rm = require('rimraf') // 用于清除打包文件 貌似webpack支持

const spinner = ora('开始打包了...')
spinner.start()

webpack(webpackConfig, (err, stats) => {
  spinner.stop()
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
    chunks: false,
    chunkModules: false
  }) + '\n\n');

})




