/**
 * @authors Your Name (you@example.org)
 * @date    2018-08-01 10:23:04
 * @version $Id$
 * Note: 不理解，此后待研究
 */

'use strict';

var count = 0;
var oldParseInt = parseInt; // 保存原函数
// parseInt(s: string, radix: int)

parseInt = function() {
    count += 1;
    return oldParseInt.apply(null, arguments); // 调用原函数
    // return oldParseInt.apply(null, []); // 调用原函数
};

// 测试:
parseInt('10');
parseInt('20');
parseInt('30');
parseInt('30');
parseInt('30');
parseInt('30');
parseInt('30');
parseInt('30');
parseInt('30');
parseInt('30');
parseInt('30');
parseInt('30');
console.log('count = ' + count); // 3