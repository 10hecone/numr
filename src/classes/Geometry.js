import { CalculError } from "../../index.js";
export class Geometry {
  #height;
  #width;

  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }

  get getArea() {
    return this.#width * this.#height;
  }

  get getHeight() {
    return this.#height;
  }

  get getWidth() {
    return this.#width;
  }

  get getDiameter() {
    if (this.#width !== this.#height) {
      return (this.#height + this.#width) * 2;
    } else return this.#height * 4;
  }

  setArea(height, width) {
    if (typeof height !== "number" || typeof width !== "number") throw new CalculError({ type: "TypeError", message: "Invalid Number" });
    this.#height = height
    this.#width = width
    return this.#height * this.#width
  }

  setHeight(height) {
    if (typeof height !== "number") throw new CalculError({ type: "TypeError", message: "Invalid Number" });
    this.#height = height
    return this.#height;
  }

  setWidth(width) {
    if (typeof width !== "number") throw new CalculError({ type: "TypeError", message: "Invalid Number" });
    this.#width = width
    return this.#width;
  }
}
