"use strict";
exports.__esModule = true;
exports.Geometry = void 0;
var Geometry = /** @class */ (function () {
    function Geometry(height, width) {
        this.height = height;
        this.width = width;
    }
    Geometry.prototype.getArea = function () {
        return this.width * this.height;
    };
    Geometry.prototype.getDiameter = function () {
        if (this.width !== this.height) {
            return (this.height + this.width) * 2;
        }
        else
            return this.height * 4;
    };
    Geometry.prototype.setArea = function (height, width) {
        if (typeof height !== "number" || typeof width !== "number")
            throw new TypeError('Number is invalid');
        this.height = height;
        this.width = width;
        return this.height * this.width;
    };
    Geometry.prototype.setHeight = function (height) {
        if (typeof height !== "number")
            throw new TypeError('Number is invalid');
        this.height = height;
        return this.height;
    };
    Geometry.prototype.setWidth = function (width) {
        if (typeof width !== "number")
            throw new TypeError('Number is invalid');
        this.width = width;
        return this.width;
    };
    return Geometry;
}());
exports.Geometry = Geometry;
