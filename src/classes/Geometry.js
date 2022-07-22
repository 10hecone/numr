export class Geometry {
  height;
  width;

  /**
  * @param {number} height
  * @param {number} width
  */

  constructor(height, width) {
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

  setArea(height, width) {
    if (typeof height !== "number" || typeof width !== "number") throw new TypeError({ type: "TypeError", message: "Invalid Number" });
    this.height = height
    this.width = width
    return this.height * this.width
  }

  setHeight(height) {
    if (typeof height !== "number") throw new TypeError({ type: "TypeError", message: "Invalid Number" });
    this.height = height
    return this.height;
  }

  setWidth(width) {
    if (typeof width !== "number") throw new TypeError({ type: "TypeError", message: "Invalid Number" });
    this.width = width
    return this.width;
  }
}
