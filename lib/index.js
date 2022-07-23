"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PI = exports.Calcul = exports.MathPY = exports.Geometry = void 0;
// Import des functions/property/class.
const Geometry_1 = require("./classes/Geometry"); // Class
Object.defineProperty(exports, "Geometry", { enumerable: true, get: function () { return Geometry_1.Geometry; } });
const Calcul_1 = require("./functions/Calcul"); // Variable.function()
Object.defineProperty(exports, "Calcul", { enumerable: true, get: function () { return Calcul_1.Calcul; } });
const __Property_1 = require("./functions/__Property"); // Property (exception à PI qui est une function)
Object.defineProperty(exports, "PI", { enumerable: true, get: function () { return __Property_1.PI; } });
const MathPython_1 = require("./classes/MathPython"); // Class.static 
Object.defineProperty(exports, "MathPY", { enumerable: true, get: function () { return MathPython_1.MathPY; } });
