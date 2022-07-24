"use strict";
exports.__esModule = true;
exports.PI = exports.Calcul = exports.MathPY = exports.Geometry = void 0;
// Import des functions/property/class.
var Geometry_1 = require("./classes/Geometry"); // Class
exports.Geometry = Geometry_1.Geometry;
var Calcul_1 = require("./functions/Calcul"); // Variable.function()
exports.Calcul = Calcul_1.Calcul;
var __Property_1 = require("./functions/__Property"); // Property (exception à PI qui est une function)
exports.PI = __Property_1.PI;
var MathPython_1 = require("./classes/MathPython"); // Class.static 
exports.MathPY = MathPython_1.MathPY;
