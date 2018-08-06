/**
 * @authors Your Name (you@example.org)
 * @date    2018-08-01 14:50:18
 * @version $Id$
 */
/**
*请把用户输入的不规范的英文名字，变为首字母大写，其他小写的规范名字。
*输入： ['adam', 'LISA', 'barT']
*输出： ['Adam', 'Lisa', 'Bart']
 */
'use strict';

// No.001方法
// function normalize(arr) {
//     var b = arr.map(function(x) {
//         return x.substring(0, 1).toUpperCase() + x.substring(1).toLowerCase();
//     });
//     return b;
// }
// No.002方法
function normalize(arr) {
    return arr.map(x => x.substring(0, 1).toUpperCase() + x.substring(1).toLowerCase());
}

// 测试:
if (normalize(['adam', 'LISA', 'barT']).toString() === ['Adam', 'Lisa', 'Bart'].toString()) {
    console.log('测试通过!');
} else {
    console.log('测试失败!');
}