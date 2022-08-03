const analyzeArray = require('./analyzeArray');

test('analyze the array', () => {
    expect(analyzeArray.analyzeArry([1, 2, 3])).toEqual({'average': 2, 'min': 1, 'max': 3, 'length': 3});
})

test ('ignore same numbers', () => {
    expect(analyzeArray.analyzeArry([2, 2, 2])).toEqual({'average': 2, 'min': 2, 'max': 2, 'length': 3});
})