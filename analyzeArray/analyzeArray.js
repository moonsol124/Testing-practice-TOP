//An analyzeArray function that takes an array of numbers and returns an object 
//with the following properties: average, min, max, and length.

function getAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum/array.length;
}

function getMin(array) {
    let min = array[0];
    //if the number is smaller then update the min
    for (let i = 1; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }

    return min;
}

function getMax(array) {
    let max = array[0];
    //if the number is smaller then update the min
    for (let i = 1; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }

    return max;
}

function analyzeArry(array) {
    const obj = {};
    obj['average'] = getAverage(array);
    obj['min'] = getMin(array);
    obj['max'] = getMax(array);
    obj['length'] = array.length;
    return obj;
};

module.exports = {analyzeArry};