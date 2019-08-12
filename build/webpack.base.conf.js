const path = require('path')

module.exports = {
  // 设置脚本执行目录
  context: path.resolve(__dirname, '../'),
  // 表示入口文件 这里的入口文件可能只有一个，也可以传入的是一个数组
  entry: './src/index.js',
  // 表示文件的输出地址，以及输出文件的名称
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'webpack4.0-react.js'
  },
  // 针对不同的模块使用不同的loader进行处理
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/
      },{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
}