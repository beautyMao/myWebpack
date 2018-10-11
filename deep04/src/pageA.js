/*
 * @Author: Pan Jiahui
 * @Date:   2018-10-09 20:44:42
 * @Last Modified by:   Pan Jiahui
 * @Last Modified time: 2018-10-11 21:20:54
 */

//import './subPageA'
//import './subPageB'
require.include('./moduleA.js')
let page = 'subPageA'
if (page === 'subPageA') {
    // require.ensure(['./subPageA'], function() {
    //     var _ = require('./subPageA')
    // }, 'subPageA')
    //import动态引入并执行
    import(/* webpackChunkName:'subPageA' */'./subPageA').then(function(subPageA){
        //subpageA页面加载完后回调 每个import都是promise
        console.log(subPageA)
    })
} else {
    require.ensure(['./subPageB'], function() {
        var _ = require('./subPageB')
    }, 'subPageB')
}



//import * as _ from 'lodash'
require.ensure(['lodash'], function() {
    var _ = require('lodash')
    _.join([1, 2], 3)
}, 'vendor')


export default 'pageA'