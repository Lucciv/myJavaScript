/**
 * @authors Your Name (you@example.org)
 * @date    2018-08-01 14:30:38
 * @version $Id$
 */
'use strict';
// No.001方法
function string2int(s) {
        return s * 1;
}
// No.002方法
function string2int(s) {
    var i = 0;
    var arr = new Array();
    for (i; i < s.length; i++) {
        arr.push(s[i]);
    }
    用map把arr的string值变为number
    var newArr = arr.map(function(x) {
        return x * 1;
    });
    var res = newArr.reduce(function(x, y) {
        return (x * 10) + y;
    });
    var newArr = arr.map(x => x * 1);
    var res = newArr.reduce((x,y) => (x * 10) + y);
    return res;
}
// No.003方法
function string2int(s) {
    var i = 0;
    var arr = new Array();
    for (i; i < s.length; i++) {
        arr.push(s[i]);
    }
    var newArr = arr.map(x => x * 1);
    var res = newArr.reduce((x,y) => (x * 10) + y);
    return res;
}
// 测试:
if (string2int('0') === 0 && string2int('12345') === 12345 && string2int('12300') === 12300) {
    if (string2int.toString().indexOf('parseInt') !== -1) {
        console.log('请勿使用parseInt()!');
    } else if (string2int.toString().indexOf('Number') !== -1) {
        console.log('请勿使用Number()!');
    } else {
        console.log('测试通过!');
    }
} else {
    console.log('测试失败!');
}