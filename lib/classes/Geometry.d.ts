/**
 * Geometry is a class containing several geometry functions to calculate the measure and get it
 */
export declare class Geometry {
    height: number;
    width: number;
    constructor(height: number, width: number);
    getArea(): number;
    getDiameter(): number;
    setArea(height: number, width: number): number;
    setHeight(height: number): number;
    setWidth(width: number): number;
}
