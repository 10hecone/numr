"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathPY = void 0;
const index_1 = require("../index");
class MathPY {
    // Fonctions arithmétiques et de représentation
    static comb(n, k) {
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
    }
    static fabs(x) {
        if (typeof x !== "number")
            throw new TypeError('Number is invalid');
        if (index_1.Calcul.getSignNumber(x, 'boolean'))
            return x;
        return (x * -1);
    }
    static ldexp(x, i) {
        if (typeof x !== 'number' || typeof i !== 'number')
            throw new TypeError('Number is invalid');
        return (x * (2 ** i));
    }
    // Fonctions logarithme et exponentielle
    // Fonctions trigonométriques
    static dist(p1, p2, q1, q2) {
        if (typeof p1 !== 'number' || typeof p2 !== 'number' || typeof q1 !== 'number' || typeof q2 !== 'number')
            throw new TypeError('Number is invalid');
        return (Math.sqrt(((p1 - p2) ** 2 + (q1 - q2) ** 2)));
    }
}
exports.MathPY = MathPY;