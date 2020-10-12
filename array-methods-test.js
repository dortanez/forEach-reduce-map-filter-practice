describe('_forEach', () => {
  it('should return double from original array', () => {
    const arr = [2, 4, 6, 8];
    const callback = (num) => {
      return num * 2;
    };

    expect(_forEach(arr, callback)).toEqual([4, 8, 12, 16]);
  });
});

describe('_reduce', () => {
  it('should return total number from list of numbers', () => {
    const arr = [2, 4, 6, 8];
    const callback = (accum, num) => {
      return accum += num;
    };

    expect(_reduce(arr, callback, 0)).toEqual(20);
  });

  it('should return a combination of string and number from array', () => {
    const arr = ['2', 4, '6', 8];
    const callback = (accum, next) => {
      return accum += next;
    };
    

    expect(_reduce(arr, callback)).toEqual('2468');
  });

  it('should transform an array of json data to a single object', () => {
    const arr = [
      { city: 'Los Angeles' },
      { state: 'CA' },
      { population: 200000 },
      { attractions: ['Hollywood', 'Beach', 'DisneyLand'] },
    ];
    const callback = () => {
      //write code here
    };

    expect(_reduce(arr, callback)).toEqual({
      city: 'Los Angeles',
      state: 'CA',
      population: 200000,
      attractions: ['Hollywood', 'Beach', 'DisneyLand'],
    });
  });
});

describe('_filter', () => {
  it('should filter numbers less than or equal 6', () => {
    const arr = [2, 4, 6, 8];
    const callback = (num) => {
      return num <= 6;
    };

    expect(_filter(arr, callback)).toEqual([2, 4, 6]);
  });

  it('should filter out state from array of object', () => {
    const arr = [
      { city: 'Los Angeles' },
      { state: 'CA' },
      { population: 200000 },
      { attractions: ['Hollywood', 'Beach', 'DisneyLand'] },
    ];
    const callback = (arr) => {
      return !arr.state;
    };

    expect(_filter(arr, callback)).toEqual([
      { city: 'Los Angeles' },
      { population: 200000 },
      { attractions: ['Hollywood', 'Beach', 'DisneyLand'] },
    ]);
  });
});

describe('_map', () => {
  it('should return double and apply to every value in array', () => {
    const arr = [2, 4, 6, 8];
    const callback = (num) => {
      return num * 2;
    };

    expect(_map(arr, callback)).toEqual([4, 8, 12, 16]);
  });

  it('should produce a brand new array instead of modifying the input array', () => {
    const arr = [2, 4, 6, 8];
    const callback = () => {
      return arr;
    };

    expect(_map(arr, callback)).not.toEqual(arr);
  });
});
