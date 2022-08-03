function reverseString(string) {
    const array = [];
    const splited = string.split('');
    for (let i = splited.length; i >= 0; i--) {
        array.push(splited[i]);
    }
    return array.join('');
}

module.exports = reverseString;