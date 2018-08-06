/**
 * @authors Duh (you@example.org)
 * @date    2018-08-01 09:57:03
 * @version $Id$
 */
'use strict';

function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};

var xiaowang = {
    name: '小王',
    birth: 1962,
    age: getAge
};

console.log(xiaoming.name + '的年龄是：' + getAge.apply(xiaoming, [])); // 小明的年龄是：28
console.log(xiaowang.name + '的年龄是：' + getAge.apply(xiaowang, [])); // 小王的年龄是：58