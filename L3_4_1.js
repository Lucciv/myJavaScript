/**
 * @authors Your Name (you@example.org)
 * @date    2018-08-02 11:27:01
 * @version $Id$
 */
'use strict';

function lazy_sum(arr) {
    var sum = function() {
        return arr.reduce((x, y) => x + y);
    }
    return sum;
}

function lazy_mul(arr) {
    var mul = function() {
        return arr.reduce((x, y) => x * y);
    }
    return mul;
}

var f1 = lazy_sum([1, 3, 5, 7, 9]);
var f2 = lazy_mul([2, 4, 6, 8, 10]);
var f3 = f1;
console.log(f1);
console.log(f2);
console.log(f1());
console.log(f2());
console.log(f3());

console.log('--------------------');

var dn1 = [91, 93, 95, 97, 99];
var dn2 = [90, 92, 94, 96, 98];
var fd1 = lazy_sum(dn1);
var fd2 = lazy_mul(dn2);
console.log(fd1());
console.log(fd2());