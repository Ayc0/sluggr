/**
 * Regex for whitespaces
 * @param {string} char
 * @param {string[]} whitelist
 * @return {string}
 */
const reWhitespace = (char, whitelist = []) => new RegExp(`([^${whitelist.map(element => `\\${element}`).join('')}a-zA-Z0-9\\${char}]|\\${char})+`, 'g');

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
const sluggr = (char = '_', whitelist = '') => string =>
  string
    .toLowerCase()
    .replace(reWhitespace(char, whitelist.split('')), char)
    .replace(reTrim(char), '');

module.exports = sluggr;
