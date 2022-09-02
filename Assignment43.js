// Assignment-JS-43:
// Write a JS code to display the repetition number of
// each character in a string.
// The expected Result for "www.clarusway.com" is:
// {'w': 4, '.': 2, 'c': 2, 'l': 1, 'a': 2, 'r': 1, 'u': 1,
// 's': 1, 'y': 1, 'o': 1, 'm': 1}

let letterCount = (str) => {
    let chars = {};
    let letters = str.split("");
    for (let i of letters) {
        chars[i] = letters.reduce((acc, x) => (x === i ? acc + 1 : acc), 0);
    }
    return chars;
};

console.log(letterCount("www.clarusway.com"));
