//make a function
function capitalize(string) {
    const splited = string.split('');
    let newString = [];
    for (let i = 0; i < splited.length; i++) {
        if (i === 0) {
            newString.push(splited[i].toUpperCase());
        }
        else if (splited[i] === ' ') {
            newString.push(splited[i]);
            newString.push(splited[i = i+1].toUpperCase());
        }
        else {
            newString.push(splited[i]);
        }
    }
    // return newString.join('');
    return newString.join('');
}

//then return it
module.exports = capitalize;