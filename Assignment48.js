// Assignment-JS-48:
// Write a JS code to find the numbers that are greater than 150
// in the text below, and sort these numbers.
let text =
    "Maradona spent 5 years at Argentinos Juniors, from 1976 to 1981, scoring 115 goals in 167 appearances.";
// Expected outcome:
// [167, 1976, 1981]

let strNums = (str) =>
    str
        .split(" ")
        .filter((x) => !isNaN(parseInt(x)) && parseInt(x) > 150)
        .sort((a, b) => parseInt(a) - parseInt(b));
console.log(strNums(text));
