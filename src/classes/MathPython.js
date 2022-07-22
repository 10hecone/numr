import { CalculError, Calcul } from "../../index.js";

export class MathPY {

    /**
    * @param {number} x
    * @param {number} n
    * @param {number} k
    * @param {number} i
    */

    ceil(x) {
        if (typeof x !== "number") throw new CalculError({ type: "TypeError", message: "Invalid Number" });
        let add = Calcul.add(x, 1)
                if(Calcul.isInteger(x)) return x;
                return Math.floor(add);
    }

    comb(n, k) {
        if (typeof n !== "number" || typeof k !== "number") throw new CalculError({ type: "TypeError", message: "Invalid Number" });
        if (!Calcul.getSignNumber(n, 'boolean') || !Calcul.getSignNumber(k, 'boolean')) throw new CalculError({ type: "ValueError", message: "Number is not positive" });
        if (!Calcul.isInteger(n) || !Calcul.isInteger(k)) throw new CalculError({ type: "TypeError", message: "Number is The number is not an integer" });

        if(k > n) return 0;

        if(k <= n) return (Calcul.factorial(n) / (Calcul.factorial(k) * (Calcul.factorial((n - k)))))
    }

    fabs(x) {
        if (typeof x !== "number") throw new CalculError({ type: "TypeError", message: "Invalid Number" });

        if(Calcul.getSignNumber(x, 'boolean')) return x;
        return (x * -1);
    }

    isnan(x) {
        if (typeof x !== "number") return true;
        return false;
    }

    ldexp(x, i) {
        if (typeof x !== 'number' || typeof i !== 'number') throw new CalculError({ type: 'TypeError', message: 'Invalid Number'})
        return (x * (2**i))
    }
    
}