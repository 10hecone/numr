/**
 * Import functions/property/class
 * Export function/property/class
 */

import { Geometry } from './classes/Geometry.js'; // Class
import { Calcul } from './functions/Calcul.js'; // Variable.function()
import { PI } from './functions/__Property.js'; // Property (exception to PI which is a function)
import { MathPY } from './classes/MathPython.js'; // Class.static 
import { Compressor } from './functions/Compressor.js'; // Algorithm 

export { 
  Geometry,
  MathPY,
  Calcul,
  Compressor,
  PI,
};
