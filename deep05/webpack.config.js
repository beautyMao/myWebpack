/*
 * @Author: Pan Jiahui
 * @Date:   2018-10-11 22:12:20
 * @Last Modified by:   Pan Jiahui
 * @Last Modified time: 2018-10-12 20:35:03
 */
const CleanWebpackPlugin = require('clean-webpack-plugin') //删除指定文件 
const webpack = require('webpack')
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
            use: [{
                loader: 'style-loader',
                options: {
                    transform: './src/transform.js'
                }
            }, {
                loader: 'css-loader',
                options: {
                    minimize: true,
                    modules: true,
                    localIdentName:'[path][name]_[local]_[hash:base64:5]'
                }
            },{
                loader:'sass-loader'
            }]
        }]
    },
    plugins: [
        //传入数组,指定要删除的目录
        new CleanWebpackPlugin(['dist']),
    ]
}