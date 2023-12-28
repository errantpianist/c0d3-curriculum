/**
 * Write a function called solution that
 *   takes in 2 parameters, a string and a function,
 *   returns the combined result of the function being called
 *     with every letter in the string
 * @param {string} str
 * @param {function} fun
 * @returns {string}
 */

const solution = (str, fun, result = '', i = 0) => {
  if (!str[i]) {
    return result;
  }
  result += fun(str[i]);
  if (i >= str.length - 1) {
    return result;
  }
  return solution(str, fun, result, i + 1);
};

module.exports = {
  solution,
};
