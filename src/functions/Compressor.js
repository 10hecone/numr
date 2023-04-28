/**
 * Compressor
 */
// Compressor constante containing the functions
export const Compressor = {
  /**
   * String compress
   * @param {string} string 
   * @param {Object} options 
   * @param {Object} [options.dico] - The dictionary to be used for compression. Default is ASCII dictionary of 256 characters.
   * @param {string} [options.algorithm] - The algorithm to be used for compression. Default is "lzw".
   * @returns {string} The compressed string.
   * @throws {TypeError} If the string parameter is not a string or is invalid, or if an invalid algorithm is specified.
   */

  compress(string, options = {}) { // Compressor.compress("example", "lzw")

    const dico = options?.dico ?? Array.from({ length: 256 }, (_, i) => String.fromCharCode(i)).reduce((dict, char) => ({ ...dict, [char]: char.charCodeAt(0) }), {});
    const algorithm = options?.algorithm ?? 'lzw';
    let resultat = [];

    switch(algorithm) {
      case "lzw":
        let w = "";
        for (let i = 0; i < string.length; i++) {
          const c = string.charAt(i);
          const p = w + c;
          if (dico.hasOwnProperty(p)) {
            w = p;
          } else {
            resultat.push(dico[w]);
            dico[p] = Object.keys(dico).length;
            w = c;
          }
        }
        if (w !== "") {
          resultat.push(dico[w]);
        }
        resultat;
      break;
      default:
        throw new Error("Invalid algorithm")
    }

    return resultat;
  },

  /**
  * String decompress
  * @param {number[]} code 
  * @param {Object} options 
  * @param {Object} [options.dico] - The dictionary to be used for compression. Default is ASCII dictionary of 256 characters.
  * @param {string} [options.algorithm] - The algorithm to be used for compression. Default is "lzw".
  * @returns {string} The compressed string.
  * @throws {TypeError} If the string parameter is not a string or is invalid, or if an invalid algorithm is specified.
  */

  decompress(compressed, options = {}) {
    const dico = options?.dico ?? Array.from({ length: 256 }, (_, i) => String.fromCharCode(i));
    const algorithm = options?.algorithm ?? 'lzw';

    switch(algorithm) {
      case 'lzw': 
        let result = "";
        let prevCode = compressed[0];
        let prevEntry = dico[prevCode];
        result += prevEntry;
    
        for (let i = 1; i < compressed.length; i++) {
          const code = compressed[i];
          let entry;
    
          if (dico[code]) {
            entry = dico[code];
          } else {
            entry = prevEntry + prevEntry[0];
          }
    
          result += entry;
          dico.push(prevEntry + entry[0]);
          prevCode = code;
          prevEntry = entry;
        } 
      return result;
      default:
        throw new Error("Invalid algorithm")
    };
  }
};