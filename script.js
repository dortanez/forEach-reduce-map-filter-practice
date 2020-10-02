/* 
  Implement forEach, reduce, filter, map

  Question
  First implement reduce without the native version then implement filter and map.
*/

/**
 * @param {[], callback}
 * @return {[]}
 */

const forEach = function (arr, cb) {
    const newArray = [];
    for(let i = 0; i < arr.length; i++) {
        newArray.push(cb(arr[i]));
    }
    console.log(newArray)
  };
  
  /* 
    use forEach method above to produce output below
    example 1: [2,4,6,8]
    output 1: [4,8,12,16]
  
    example 2: [{num: 2}, {num: 4}, {num: 6}, {num: 8}]
    output 2: [{num: 4}, {num: 8}, {num: 12}, {num: 16}]
  */

  forEach([2,4,6,8], (num) => {
    return num * 2;
  })
  // [4,8,12,16]

  forEach([{num: 2}, {num: 4}, {num: 6}, {num: 8}], (item) => {
      item.num *= 2;
      return item;
  })
  // [{num: 4}, {num: 8}, {num: 12}, {num: 16}]

  
  /**
   * @param {[], callback, value of any type('', [], {}, 0) this is also optional}
   * @return { single value }
   */

  const reduce = function (arr, cb, initialValue) {
    let result = initialValue
    for(let i = 0; i < arr.length; i++) {
        result = cb(result, arr[i]);
    }
    console.log(result);
  };
  
  /* 
    use reduce method above to produce output below
    example 1: [2,4,6,8]
    output 1: 20
  
    example 2: [{num: 2}, {num: 4}, {num: 6}, {num: 8}]
    output 2: 20

     example 3: [2, 3, 4, 5, 6]
    output 3: {2: 2, 3: 3, 4: 4, 5: 5, 6: 6, sum: 20}
  */

 reduce([2,4,6,8], (accum, num) => {
     return accum + num;
 }, 0)
 // 20

 reduce([{num: 2}, {num: 4}, {num: 6}, {num: 8}], (accum, item) => {
     return accum + item.num;
 }, 0)
 // 20

 reduce([2, 3, 4, 5, 6], (accum, num) => {
    return accum[num] = num;
 }, {})
 // {2: 2, 3: 3, 4: 4, 5: 5, 6: 6, sum: 20}

  
  /**
   * @param {[], callback}
   * @return {[]}
   */
  
  // You can use reduce to write filter method or for loop
  const filter = function (arr, cb) {
    const newArray = [];
    for(let i = 0; i < arr.length; i++) {
        if(cb(arr[i])) {
            newArray.push(arr[i]);
        }
    }
    console.log(newArray);
  };
  
  /* 
    use filter method above to produce output below
    example 1: [2,4,6,8]
    output 1: [6, 8]
  
    example 2: [{num: 2}, {num: 4}, {num: 6}, {num: 8}]
    output 2: [{num: 6}, {num: 8}]
  */

  filter([2,4,6,8], (num) => {
      return num > 5;
  })
  // [6, 8]

  filter([{num: 2}, {num: 4}, {num: 6}, {num: 8}], (item) => {
      return item.num > 5;
  })
  // [{num: 6}, {num: 8}]
  
  /**
   * @param {[], callback}
   * @return {[]}
   */
  // You can use reduce to write map method or for loop
  const map = function (arr, cb) {
    const newArray = [];
    for(let i = 0; i < arr.length; i++) {
        newArray.push(cb(arr[i]));
    }
    console.log(newArray);
  };
  
  /* 
    use map method above to produce output below
    example 1: [2,4,6,8]
    output 1: [4,8,12,16]
  
    example 2: [{num: 2}, {num: 4}, {num: 6}, {num: 8}]
    output 2: [{num: 4}, {num: 8}, {num: 12}, {num: 16}]
  */

  map([2,4,6,8], (num) => {
    return num * 2;
  })
  // [4,8,12,16]

  map([{num: 2}, {num: 4}, {num: 6}, {num: 8}], (item) => {
    item.num *= 2;
    return item;
  })
  // [{num: 4}, {num: 8}, {num: 12}, {num: 16}]