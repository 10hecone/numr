"use strict";
exports.__esModule = true;
exports.Calcul = void 0;
var __Property_js_1 = require("./__Property.js");
exports.Calcul = {
    add: function (num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number')
            throw new TypeError('Number is invalid');
        return num1 + num2;
    },
    subtract: function (num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number')
            throw new TypeError('Number is invalid');
        return num1 - num2;
    },
    multiply: function (num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number')
            throw new TypeError('Number is invalid');
        return num1 * num2;
    },
    divide: function (num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number')
            throw new TypeError('Number is invalid');
        return num1 / num2;
    },
    factorial: function (num) {
        if (typeof num !== 'number' || typeof num !== 'number')
            throw new TypeError('Number is invalid');
        var res = 1;
        for (var i = 1; i <= num; i++) {
            res *= i;
        }
        return res;
    },
    getRandomNumber: function (num1, num2, param) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number')
            throw new TypeError('Number is invalid');
        switch (param) {
            case 'decimal':
                return Math.random() * (num2 - num1) + num1;
            case 'round':
                return Math.floor(Math.random() * (num2 - num1) + num1);
            default:
                throw new TypeError('Invalid Type');
        }
    },
    getSignNumber: function (num, param) {
        if (typeof num !== 'number')
            throw new TypeError('Number is invalid');
        var bool = Math.sign(num);
        switch (param) {
            case 'boolean':
                switch (bool) {
                    case 1:
                        return true;
                    case -1:
                        return false;
                    default:
                        return null;
                }
            case 'number':
                return bool;
            default:
                throw new TypeError('Number is invalid');
        }
    },
    getPerimeter: function (num, param) {
        if (typeof num !== 'number')
            throw new TypeError('Number is invalid');
        switch (param) {
            case 'decimal':
                return (0, __Property_js_1.PI)(15) * (num * 2);
            case 'round':
                return Math.floor((0, __Property_js_1.PI)(15) * (num * 2));
            default:
                return (0, __Property_js_1.PI)(15) * (num * 2);
        }
    }
};
