/**
 * If string.normalize if defined, use it to transform è -> e for instance
 * And set the string in lowercase
 * @param {string} string
 * @return {string}
 */
const normalize = (string, shouldNormalize) => {
  if (String.prototype.normalize && shouldNormalize) {
    return string
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }
  return string.toLowerCase();
};

/**
 * Regex for whitespaces
 * @param {string} char
 * @param {string[]} whitelist
 * @return {string}
 */
const reWhitespace = (char, whitelist = []) => new RegExp(`([^${whitelist.map(element => `\\${element.toLowerCase()}`).join('')}a-zA-Z0-9\\${char}]|\\${char})+`, 'g');

/**
 * Regex for trim
 * @param {string} char
 * @return {string}
 */
const reTrim = char => new RegExp(`^\\${char}|\\${char}$`, 'g');

/**
 * Create a slugger
 * @param {string} char Whitespace character
 * @param {string} whitelist Whitelist of special characters allowed
 * @return {reTrim}
 */
const sluggr = (char = '_', whitelist = '', shouldNormalize = true) => string =>
  normalize(string, shouldNormalize)
    .replace(reWhitespace(char, whitelist.split('')), char)
    .replace(reTrim(char), '');

module.exports = sluggr;
