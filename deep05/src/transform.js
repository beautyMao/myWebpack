/*
* @Author: Pan Jiahui
* @Date:   2018-10-12 18:25:33
* @Last Modified by:   Pan Jiahui
* @Last Modified time: 2018-10-12 20:13:58
*/
// transform.js
module.exports = function(css) {
 // console.log(css)
 // console.log(window.innerWidth)

  if (window.innerWidth < 476) {
    return  css.replace('f00', 'eee')
  } 
  return css
}
