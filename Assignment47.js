// Assignment-JS-47:
// Write a JS code to find intersection of 3 lists below.
let list1 = [11, 4, 5, 9, 7];
let list2 = [5, 10, 4, 1, 10];
let list3 = [7, 3, 9, 5, 1];
// Expected output
// Intersection of lists : [5]

let intersect = (arr, arr2, arr3) =>
    arr.filter((x) => arr2.includes(x) && arr3.includes(x));

console.log(intersect(list1, list2, list3));
