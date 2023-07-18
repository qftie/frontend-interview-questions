const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // mode 可选 development 或 production ，默认为后者
    // production 会默认压缩代码并进行其他优化（如 tree shaking）
    mode: 'development', // 开发模式
    entry: path.join(__dirname, 'src', 'index'), // （当前目录拼接src拼接index）入口文件
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist') // 如果没有，webpack会自动创建这个文件夹
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                include:  path.join(__dirname, 'src'),
                exclude: /node_modules/
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        })
    ],
    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, 'dist'),  // 根目录
        open: true,  // 自动打开浏览器
    }
}
