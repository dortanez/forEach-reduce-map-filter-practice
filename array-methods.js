/* 
  Implement forEach, reduce, filter, map

  1. Write logic for each method below
  2. Write code for callback function in array-methods-test.js
*/

/**
 * @param {[], callback(currentValue, index, array)}
 * @return {[]}
 */
function _forEach(arr, cb) {
  const newArray = [];
    for(let i = 0; i < arr.length; i++) {
        newArray.push(cb(arr[i]));
    }
    return newArray;
}

/**
 * @param {[], callback(accumulator, currentValue, index, array), value of any type('', [], {}, 0) this is also optional}
 * @return { single value }
 */
function _reduce(arr, cb, initialValue) {
  if(arr.length !== 0) {
    let result = initialValue === undefined ? arr[0] : initialValue;
    for(let i = [initialValue === undefined ? 1 : 0]; i < arr.length; i++) {
        result = cb(result, arr[i])
    }
  return result;
  }
}

/**
 * @param {[], callback(currentValue, index, array)}
 * @return {[]}
 */

// You can use reduce to write filter method or for loop
function _filter(arr, cb) {
  const newArray = [];
    for(let i = 0; i < arr.length; i++) {
        if(cb(arr[i])) {
            newArray.push(arr[i]);
        }
    }
    return newArray
}

/**
 * @param {[], callback(currentValue, index, array)}
 * @return {[]}
 */
// You can use reduce to write map method or for loop
function _map(arr, cb) {
  const newArray = [];
    for(let i = 0; i < arr.length; i++) {
        newArray.push(cb(arr[i]));
    }
    return newArray;
}
