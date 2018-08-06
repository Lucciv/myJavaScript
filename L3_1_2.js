/**
 *
 * @authors Your Name (you@example.org)
 * @date    2018-01-15 15:17:48
 * @version $Id$
 */
// 我自己写的函数:
function area_of_circle(r, pi) {
   if (pi == null) {
      return 3.14 * r * r;
   } else {
      return pi * r * r;
   }
}
// 廖老师的测试:
if (area_of_circle(2) === 12.56 && area_of_circle(2, 3.1416) === 12.5664) {
   console.log('测试通过');
} else {
   console.log('测试失败');
}