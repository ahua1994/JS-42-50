// Assignment-JS-42:
// Write a JS code to filter strings that have more than
// 5 characters in the list below.

let words = ["car", "elephant", "desert", "pumpkin", "eat", "fish", "dish"];

let filter5 = (arr) => arr.filter((x) => x.length < 5);

console.log(filter5(words));
