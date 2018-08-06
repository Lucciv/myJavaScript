/**
 * @authors Your Name (you@example.org)
 * @date    2018-08-01 13:51:38
 * @version $Id$
 */
'use strict';

// function product(arr) {
//     if (arr) {
//         return arr.reduce(function(x, y) {
//             return x * y;
//         });
//     } else return 0;
// }
function product(arr) {
    if (arr) {
        function pp(x, y) {
            return x * y;
        }
        return arr.reduce(pp);
    } else return 0;
}
// 测试:
if (product([1, 2, 3, 4]) === 24 && product([0, 1, 2]) === 0 && product([99, 88, 77, 66]) === 44274384) {
    console.log('测试通过!');
} else {
    console.log('测试失败!');
}