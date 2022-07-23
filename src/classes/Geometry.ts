export class Geometry {
  height;
  width;

  /**
  * @param {number} height
  * @param {number} width
  */

  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
  }

  getArea() {
    return this.width * this.height;
  }

  getDiameter() {
    if (this.width !== this.height) {
      return (this.height + this.width) * 2;
    } else return this.height * 4;
  }

  setArea(height: number, width: number) {
    if (typeof height !== "number" || typeof width !== "number") throw new TypeError('Number is invalid');
    this.height = height
    this.width = width
    return this.height * this.width
  }

  setHeight(height: number) {
    if (typeof height !== "number") throw new TypeError('Number is invalid');
    this.height = height
    return this.height;
  }

  setWidth(width: number) {
    if (typeof width !== "number") throw new TypeError('Number is invalid');
    this.width = width
    return this.width;
  }
}
