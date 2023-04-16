/**
 * MathPY is a class containing several calculation functions from Python
 * MathPY require variable Cacul for comb, fabs.
 */

import { Calcul } from "../index.js"; // Import variable Calcul from index

export class MathPY {

    /**
     * Comb function https://docs.python.org/3/library/math.html#math.comb
     * @param {number} n 
     * @param {number} k 
     * @returns number
     */

    static comb(n, k) {
        if (typeof n !== "number" || typeof k !== "number") throw new TypeError('Number is invalid'); // Create an error if it is not a number 
        if (!Calcul.getSignNumber(n, 'boolean') || !Calcul.getSignNumber(k, 'boolean')) throw new TypeError("Number is not positive"); // Create an error if it is not positive 
        if (!Number.isInteger(n) || !Number.isInteger(k)) throw new TypeError("Number is The number is not an integer"); // Create an error if it is not a integer 

        if (k > n) return 0;

        if (k <= n) return (Calcul.factorial(n) / (Calcul.factorial(k) * (Calcul.factorial((n - k)))));
    };

        
    /**
     * Fabs function https://docs.python.org/3/library/math.html#math.fabs
     * @param {number} x
     * @returns number
     */

    static fabs(x) {
        if (typeof x !== "number") throw new TypeError('Number is invalid'); // Create an error if it is not a number 

        if (Calcul.getSignNumber(x, 'boolean')) return x;
        return (x * -1);
    };

    /**
     * ldexp function https://docs.python.org/3/library/math.html#math.ldexp
     * @param {number} x
     * @param {number} i
     * @returns number
     */

    static ldexp(x, i) {
        if (typeof x !== 'number' || typeof i !== 'number') throw new TypeError('Number is invalid') // Create an error if it is not a number 
        return (x * (2 ** i));
    };

    // Fonctions trigonométriques

    /**
     * dist function https://docs.python.org/3/library/math.html#math.dist
     * @param {number} p1
     * @param {number} p2
     * @param {number} q1
     * @param {number} q2
     * @returns number
     */
    
    static dist(p1, p2, q1, q2) {
        if (typeof p1 !== 'number' || typeof p2 !== 'number' || typeof q1 !== 'number' || typeof q2 !== 'number') throw new TypeError('Number is invalid') // Create an error if it is not a number 
        return (Math.sqrt(((p1 - p2) ** 2 + (q1 - q2) ** 2)));
    };
}