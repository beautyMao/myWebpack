- webpack可以把以指定入口的一系列相互依赖的模块打包成一个文件，这里的模块指的不只是js，也可以是css；

- 遇到后缀为.css的文件，webpack先用css-loader加载器去解析这个文件，遇到“@import”等语句就将相应样式文件引入（所以如果没有css-loader，就没法解析这类语句），最后计算完的css，将会使用style-loader生成一个内容为最终解析完的css代码的style标签，放到head标签里。

- loader是有顺序的，webpack肯定是先将所有css模块依赖解析完得到计算结果再创建style标签。因此应该把style-loader放在css-loader的前面

- style-loader和css-loader作用是不同的。
    > css-loader: 加载.css文件
    > style-loader:使用<style>将css-loader内部样式注入到我们的HTML页面

- loader是有顺序的，webpack肯定是先将所有css模块依赖解析完得到计算结果再创建style标签。因此应该把style-loader放在css-loader的前面（webpack loader的执行顺序是从右到左）。
- webpack1的写法是用“!”来分隔不同的加载器，webpack2使用数组， loader的执行顺序是从右到左

--------------------------
#### css-loader 的options选项
- alias: 解析别名
- Minimize: true or false,是否开启css代码压缩，比如压缩空格不换行。
- modules：是否开启css-modules(css模块化)
- localIdentName: 修改classname



#### style-loader 的options选项

- transform:根据给定逻辑在css插入html前选择指定样式
- insertAt:插入位置 
- insertInto: 插入到指定dom 
- singleton:类型为布尔值，多个样式是否只生成一个<style></style>标签。




#### sass-loader








