'use strict';

var xiaoming01 = {
    name: '小明',
    birth: 1987,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school',
    address: {
        city: 'Beijing',
        street: 'No.1 Road',
        zipcode: '100001'
    },
    age: function() {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};

var xiaoming02 = {
    name: '小明',
    birth: 1990,
    age: function() {
        var that = this; // 在方法内部一开始就捕获this
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - that.birth; // 用that而不是this
        }
        return getAgeFromBirth();
    }
};

var {
    name,
    address: {
        city,
        zip
    }
} = xiaoming01;

console.log('name = ' + name);
console.log('city = ' + city);
console.log('zip = ' + zip);
console.log('age = ' + xiaoming02.age());