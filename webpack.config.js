let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    entry: './index.js',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: 'head'
    })]
}

module.exports = config