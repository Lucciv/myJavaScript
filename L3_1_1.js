/**
 *
 * @authors Your Name (you@example.org)
 * @date    2018-01-15 15:17:48
 * @version $Id$
 */
// 我自己写的函数:
function sum(...rest) {
   var i, s = 0;
   for (i = 0; i < rest.length; i++) {
      s = s + rest[i];
   }
   return s;
}
// 廖老师的测试:
var i, args = [];
for (i = 1; i <= 100; i++) {
   args.push(i);
}
if (sum() !== 0) {
   console.log('测试失败: sum() = ' + sum());
} else if (sum(1) !== 1) {
   console.log('测试失败: sum(1) = ' + sum(1));
} else if (sum(2, 3) !== 5) {
   console.log('测试失败: sum(2, 3) = ' + sum(2, 3));
} else if (sum.apply(null, args) !== 5050) {
   console.log('测试失败: sum(1, 2, 3, ..., 100) = ' + sum.apply(null, args));
} else {
   console.log('测试通过!');
   console.log(sum.apply(null, args));
}
