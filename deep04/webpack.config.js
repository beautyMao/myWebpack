const CleanWebpackPlugin = require('clean-webpack-plugin') //删除指定文件 

const webpack = require('webpack')
const path = require('path')
module.exports = {
    entry: {
        'pageA': './src/pageA',
        // 'pageB': './src/pageB',
        // 'vendor':['lodash']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        publicPath:'./dist/',
        chunkFilename: '[name].chunk.js'
    },
    plugins: [
        //传入数组,指定要删除的目录
        new CleanWebpackPlugin(['dist']),
        // new webpack.optimize.CommonsChunkPlugin({
        //     names: 'common',
        //     minChunks: 2,
        //     chunks:['pageA','pageB']
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     names: ['vendor','manifest'],
        //     minChunks: Infinity,
        // })
    ]
}