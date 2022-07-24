import { Calcul } from "../index";

export class MathPY {

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

    static dist(p1: number, p2: number, q1: number, q2: number ) {
        if (typeof p1 !== 'number' || typeof p2 !== 'number' || typeof q1 !== 'number' || typeof q2 !== 'number') throw new TypeError('Number is invalid')
        return (Math.sqrt(((p1 - p2)**2 + (q1 - q2)**2)))

    }

    // Conversion angulaire

    // Fonctions hyperboliques

    // Fonctions spéciales

    // Constantes
    
}