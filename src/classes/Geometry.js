/**
 * Geometry is a class containing several geometry functions to calculate the measure and get it
 */

export class Geometry { // Export class Geometry to Module
  height;
  width;

  constructor(height, width) { // Build a constructor contains height and width
    this.height = height;
    this.width = width;
  };

  /**
   * getArea
   * @returns number
   */

  getArea() {
    return this.width * this.height;
  }; 

  /**
   * getDiameter
   * @returns number
   */

  getDiameter() {
    if (this.width !== this.height) {
      return (this.height + this.width) * 2;
    } else return this.height * 4;
  };

  /**
   * setArea
   * @param {number} height 
   * @param {number} width 
   * @returns number
   */

  setArea(height, width) {
    this.height = height // Change height in constructor
    this.width = width // Change width in constructor
    return this.height * this.width
  };

  /**
   * setHeight
   * @param {number} height 
   * @returns number
   */

  setHeight(height) {
    this.height = height // Change height in constructor
    return this.height; 
  };

  /**
   * setWidth
   * @param {number} width 
   * @returns number
   */
  
  setWidth(width) {
    this.width = width // Change width in constructor
    return this.width; 
  };
};
