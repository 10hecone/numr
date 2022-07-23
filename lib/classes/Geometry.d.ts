export declare class Geometry {
    height: number;
    width: number;
    /**
    * @param {number} height
    * @param {number} width
    */
    constructor(height: number, width: number);
    getArea(): number;
    getDiameter(): number;
    setArea(height: number, width: number): number;
    setHeight(height: number): number;
    setWidth(width: number): number;
}
