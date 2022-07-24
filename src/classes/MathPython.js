"use strict";
exports.__esModule = true;
exports.MathPY = void 0;
var index_1 = require("../index");
var MathPY = /** @class */ (function () {
    function MathPY() {
    }
    // Fonctions arithmétiques et de représentation
    MathPY.comb = function (n, k) {
        if (typeof n !== "number" || typeof k !== "number")
            throw new TypeError('Number is invalid');
        if (!index_1.Calcul.getSignNumber(n, 'boolean') || !index_1.Calcul.getSignNumber(k, 'boolean'))
            throw new TypeError("Number is not positive");
        if (!Number.isInteger(n) || !Number.isInteger(k))
            throw new TypeError("Number is The number is not an integer");
        if (k > n)
            return 0;
        if (k <= n)
            return (index_1.Calcul.factorial(n) / (index_1.Calcul.factorial(k) * (index_1.Calcul.factorial((n - k)))));
    };
    MathPY.fabs = function (x) {
        if (typeof x !== "number")
            throw new TypeError('Number is invalid');
        if (index_1.Calcul.getSignNumber(x, 'boolean'))
            return x;
        return (x * -1);
    };
    MathPY.ldexp = function (x, i) {
        if (typeof x !== 'number' || typeof i !== 'number')
            throw new TypeError('Number is invalid');
        return (x * (Math.pow(2, i)));
    };
    // Fonctions logarithme et exponentielle
    // Fonctions trigonométriques
    MathPY.dist = function (p1, p2, q1, q2) {
        if (typeof p1 !== 'number' || typeof p2 !== 'number' || typeof q1 !== 'number' || typeof q2 !== 'number')
            throw new TypeError('Number is invalid');
        return (Math.sqrt((Math.pow((p1 - p2), 2) + Math.pow((q1 - q2), 2))));
    };
    return MathPY;
}());
exports.MathPY = MathPY;
