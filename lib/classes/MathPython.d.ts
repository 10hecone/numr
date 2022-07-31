/**
 * MathPY is a class containing several calculation functions from Python
 * MathPY require variable Cacul for comb, fabs.
 */
export declare class MathPY {
    static comb(n: number, k: number): number | undefined;
    static fabs(x: number): number;
    static ldexp(x: number, i: number): number;
    static dist(p1: number, p2: number, q1: number, q2: number): number;
}
