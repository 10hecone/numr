"use strict";
/**
 * Geometry is a class containing several geometry functions to calculate the measure and get it
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Geometry = void 0;
class Geometry {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    ;
    // getArea function 
    getArea() {
        return this.width * this.height;
    }
    ;
    // getDiameter function
    getDiameter() {
        if (this.width !== this.height) {
            return (this.height + this.width) * 2;
        }
        else
            return this.height * 4;
    }
    ;
    // setArea function
    setArea(height, width) {
        if (typeof height !== "number" || typeof width !== "number")
            throw new TypeError('Number is invalid'); // Create an error if it is not a number 
        this.height = height; // Change height in constructor
        this.width = width; // Change width in constructor
        return this.height * this.width;
    }
    ;
    // setHeight function
    setHeight(height) {
        if (typeof height !== "number")
            throw new TypeError('Number is invalid'); // Create an error if it is not a number 
        this.height = height; // Change height in constructor
        return this.height;
    }
    ;
    // setWidth function
    setWidth(width) {
        if (typeof width !== "number")
            throw new TypeError('Number is invalid'); // Create an error if it is not a number 
        this.width = width; // Change width in constructor
        return this.width;
    }
    ;
}
exports.Geometry = Geometry;
;
