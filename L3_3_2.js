/**
 * @authors Your Name (you@example.org)
 * @date    2018-08-01 13:43:41
 * @version $Id$
 */
'use strict';

function pow(x) {
    return x * x;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var results = arr.map(pow);
console.log("第一种方案："+results);

// var result = [];
// for (var i=0; i<arr.length; i++) {
//     result.push(pow(arr[i]));
// }
// console.log("第二种方案："+result);