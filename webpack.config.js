const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

var config = {
  plugins: [new HtmlWebpackPlugin({
    template: 'index.html'
  })],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/
      }
    ]
  }
}

module.exports = config