import { Calcul } from "../index";

export class MathPY {

    /**
    * @param {number} x
    * @param {number} n
    * @param {number} k
    * @param {number} i
    */

    // Fonctions arithmétiques et de représentation

    static comb(n: number, k: number) {
        if (typeof n !== "number" || typeof k !== "number") throw new TypeError('Number is invalid'); 
        if (!Calcul.getSignNumber(n, 'boolean') || !Calcul.getSignNumber(k, 'boolean')) throw new TypeError("Number is not positive");
        if (!Number.isInteger(n) || !Number.isInteger(k)) throw new TypeError("Number is The number is not an integer");

        if(k > n) return 0;

        if(k <= n) return (Calcul.factorial(n) / (Calcul.factorial(k) * (Calcul.factorial((n - k))))) 
    }

    static fabs(x: number) {
        if (typeof x !== "number") throw new TypeError('Number is invalid');

        if(Calcul.getSignNumber(x, 'boolean')) return x;
        return (x * -1);
    }

    static ldexp(x: number, i: number) {
        if (typeof x !== 'number' || typeof i !== 'number') throw new TypeError('Number is invalid')
        return (x * (2**i))
    }

    // Fonctions logarithme et exponentielle

    // Fonctions trigonométriques

    // Conversion angulaire

    // Fonctions hyperboliques

    // Fonctions spéciales

    // Constantes
    
}