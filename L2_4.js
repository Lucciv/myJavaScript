/**
 *
 * @authors Your Name (you@example.org)
 * @date    2018-01-15 10:52:47
 * @version $Id$
 */
var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([
   ['Michael', 95],
   ['Bob', 75],
   ['Tracy', 85]
]);
// 遍历Array
for (var x of a) {
   console.log(x);
}
// 遍历Set
for (var x of s) {
   console.log(x);
}
// 遍历Map
for (var x of m) {
   console.log(x[0] + '=' + x[1]);
}
// 遍历Map2
m.forEach(function(value,key,map) {
   // console.log(value + ', key = ' + key);
   console.log(key);
});