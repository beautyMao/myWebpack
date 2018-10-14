### 提取CSS

> extract-text-webpack-plugin该插件的主要是为了抽离css样式,防止将样式打包在js中引起页面样式加载错乱的现象;

```
npm install extract-text-webpack-plugin --save-dev


//webpack.config.js文件中配置
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
}

```

### 该插件有三个参数意义分别如下

> use:指需要什么样的loader去编译文件,这里由于源文件是.css所以选择css-loader
> fallback:编译后用什么loader来提取css文件
> publicfile:用来覆盖项目路径,生成该css文件的文件路径





