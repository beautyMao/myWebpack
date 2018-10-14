/*
 * @Author: Pan Jiahui
 * @Date:   2018-10-12 20:46:06
 * @Last Modified by:   Pan Jiahui
 * @Last Modified time: 2018-10-12 21:01:49
 */

const CleanWebpackPlugin = require('clean-webpack-plugin') //删除指定文件 
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path')

module.exports = {
    entry: {
        'app': './src/app.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        publicPath: './dist/',
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: {
                    loader: 'style-loader',
                },
                use: [{
                    loader: 'css-loader',
                    options: {
                        minimize: true,
                        modules: true,
                        localIdentName: '[path][name]_[local]_[hash:base64:5]'
                    }
                }, {
                    loader: 'sass-loader'
                }]
            })
        }]
    },
    plugins: [
        //传入数组,指定要删除的目录
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin({
            filename: '[name].min.css',
            //默认就是false 只提取初始化的css，不提取异步加载的
            allChunks: false
        })
    ]
}