/**
 * @authors Your Name (you@example.org)
 * @date    2018-08-02 09:17:19
 * @version $Id$
 */
'use strict';

var r,arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
r = arr.filter(function(element, index, self) {
    return self.indexOf(element) === index;
});
console.log(r.toString());