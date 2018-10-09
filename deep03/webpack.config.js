//const CleanWebpackPlugin = require('clean-webpack-plugin') //删除指定文件 


module.exports = {
    entry: {
        app: './src/app.ts'
    },
    output: {
        filename: '[name].[hash:8].js'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: {
                loader: 'ts-loader'
            },
            exclude: '/node_module/'
        }]
    },
    plugins: [
        //传入数组,指定要删除的目录
        // new CleanWebpackPlugin(['dist'])
    ]
}