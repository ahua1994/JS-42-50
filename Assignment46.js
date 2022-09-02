// Assignment-JS-46:
// Write a JS code to get only the negative integers out of the list below.
let array = [
    13, -39, 25, 30, 0, 15, -16, -89, -89, -94, 92, -51, -19, -34, -4, -87, -34,
    29, -71, 31,
];

let posOnly = (arr) => arr.filter((x) => x >= 0);

console.log(posOnly(array));
