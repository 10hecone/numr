"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Geometry = void 0;
class Geometry {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // Get Function
    // getArea function 
    getArea() {
        return this.width * this.height;
    } // Return area
    // getDiameter function
    getDiameter() {
        if (this.width !== this.height) {
            return (this.height + this.width) * 2;
        }
        else
            return this.height * 4;
    }
    // Set Function
    // setArea function
    setArea(height, width) {
        if (typeof height !== "number" || typeof width !== "number")
            throw new TypeError('Number is invalid'); // Create an error if it is not a number 
        this.height = height; // Change height in constructor
        this.width = width; // Change width in constructor
        return this.height * this.width; // Return area
    }
    // setHeight function
    setHeight(height) {
        if (typeof height !== "number")
            throw new TypeError('Number is invalid'); // Create an error if it is not a number 
        this.height = height; // Change height in constructor
        return this.height; // Return height
    }
    // setWidth function
    setWidth(width) {
        if (typeof width !== "number")
            throw new TypeError('Number is invalid'); // Create an error if it is not a number 
        this.width = width; // Change width in constructor
        return this.width; // Return width
    }
}
exports.Geometry = Geometry;
