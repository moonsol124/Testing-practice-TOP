function goPositive (prePos, n, max, min, newStr) {
    let newPos = prePos;
    for (let i = 0; i < n; i++) {
        newPos++;
        if (newPos > max) {
            newPos = min;
        }
    }

    newStr.push(String.fromCharCode(newPos));
}

function goNegative(prePos, n, max, min, newStr) {
    let newPos = prePos;
    for (let i = 0; i < n*(-1); i++) {
        newPos--;
        if (newPos < min) {
            newPos = max;
        }
    }

    newStr.push(String.fromCharCode(newPos));  
}

function convertLetter(prePos, max, min, newStr, specialChar, n) {
    if (prePos <= max && prePos >= min) {
        if (n > 0) {
            goPositive(prePos, n, max, min, newStr);
        }
        else if (n < 0) {
            goNegative(prePos, n, max, min, newStr); 
        }
    }
    else {
        newStr.push(specialChar);
    }
}

function caesar(string, n) {
    const newStr = [];
    for (let i = 0; i < string.length; i++) {

        // check if the letter is big or small
        const prePos = string[i].charCodeAt();
        let max = 0;
        let min = 0;

        if (prePos >= 97 && prePos <= 122) {
            max = 122;
            min = 97;
        }
        else {
            max = 90;
            min = 65;
        }
        
        // convert the letters
        convertLetter(prePos, max, min, newStr, string[i], n)
    }

    return newStr.join('');
}

module.exports = caesar;

// if (prePos <= max && prePos >= min) {
        //     if (n > 0) {
        //         let newPos = prePos;
        //         for (let i = 0; i < n; i++) {
        //             newPos++;
        //             if (newPos > max) {
        //                 newPos = min;
        //             }
        //         }

        //         newStr.push(String.fromCharCode(newPos));
        //     }
        //     else if (n < 0) {
        //         let newPos = prePos;
        //         for (let i = 0; i < n*(-1); i++) {
        //             newPos--;
        //             if (newPos < min) {
        //                 newPos = max;
        //             }
        //         }

        //         newStr.push(String.fromCharCode(newPos));  
        //     }
        // }
        // else {
        //     newStr.push(string[i]);
        // }