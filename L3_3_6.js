/**
 * @authors Your Name (you@example.org)
 * @date    2018-08-01 15:29:36
 * @version $Id$
 * Note: " => "这个知识点:https://www.cnblogs.com/hailun/p/6279029.html
 * 参考https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
'use strict';

var arr = ['1', '2', '3'];
var ann = [1, 2, 3];
var r = arr.map(x => parseInt(x));
// var r = arr.map(function(x) {
//     return parseInt(x);
// });
console.log(r);
var z = ann.map(String);
console.log(z);