/**
 * @authors Your Name (you@example.org)
 * @date    2018-08-02 09:31:19
 * @version $Id$
 */
'use strict';

var arr=" acAef   ";
var axx=['a','f','z','c','b','k'];
var ann='3-5-1-8-0-0-2';
var axn=[1,10,2,20];
console.log(arr.substring(3,4));
console.log(arr.substring(3));
console.log(arr.trim());
console.log(axx);
console.log(axx.toString());
console.log(axx.indexOf('b'));
console.log(ann.split('-'));
console.log(arr.replace(' a','dd-'));
console.log(axx.sort());
console.log(axn.sort());
console.log(axn.sort((x,y)=>x>y?1:-1));
console.log(axn.sort((x,y)=>x<y?1:-1));