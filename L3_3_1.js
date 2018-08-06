/**
 * @authors Your Name (you@example.org)
 * @date    2018-08-01 13:34:41
 * @version $Id$
 */
'use strict';

function add(x, y, f) {
    return f(x) + f(y);
}
console.log(add(-5, 6, Math.abs));