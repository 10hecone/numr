/**
 * MathPY is a class containing several calculation functions from Python
 * MathPY require variable Cacul for comb, fabs.
 */

import { Calcul } from "../index"; // Import variable Calcul from index

export class MathPY {

    // Fonctions arithmétiques et de représentation

    // Comb function https://docs.python.org/3/library/math.html#math.comb
    static comb(n: number, k: number) {
        if (typeof n !== "number" || typeof k !== "number") throw new TypeError('Number is invalid'); // Create an error if it is not a number 
        if (!Calcul.getSignNumber(n, 'boolean') || !Calcul.getSignNumber(k, 'boolean')) throw new TypeError("Number is not positive"); // Create an error if it is not positive 
        if (!Number.isInteger(n) || !Number.isInteger(k)) throw new TypeError("Number is The number is not an integer"); // Create an error if it is not a integer 

        if (k > n) return 0;

        if (k <= n) return (Calcul.factorial(n) / (Calcul.factorial(k) * (Calcul.factorial((n - k)))));
    };

    // Fabs function https://docs.python.org/3/library/math.html#math.fabs
    static fabs(x: number) {
        if (typeof x !== "number") throw new TypeError('Number is invalid'); // Create an error if it is not a number 

        if (Calcul.getSignNumber(x, 'boolean')) return x;
        return (x * -1);
    };

    // ldexp function https://docs.python.org/3/library/math.html#math.ldexp
    static ldexp(x: number, i: number) {
        if (typeof x !== 'number' || typeof i !== 'number') throw new TypeError('Number is invalid') // Create an error if it is not a number 
        return (x * (2 ** i));
    };

    // Fonctions trigonométriques

    // dist function https://docs.python.org/3/library/math.html#math.dist
    static dist(p1: number, p2: number, q1: number, q2: number) {
        if (typeof p1 !== 'number' || typeof p2 !== 'number' || typeof q1 !== 'number' || typeof q2 !== 'number') throw new TypeError('Number is invalid') // Create an error if it is not a number 
        return (Math.sqrt(((p1 - p2) ** 2 + (q1 - q2) ** 2)));
    };
}