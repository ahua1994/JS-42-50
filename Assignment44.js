// Assignment-JS-44:
// See below the math exam results of students. Teacher decided to
// give everyone additional 10 points. Write a JS code to copy all
// of the contents of dict1 to dict2 by adding 10 points to each student.
dict1 = { Susan: 45, Tim: 35, Tina: 70, Tom: 65, Tony: 40 };
// Expected Output:
//  { Susan: 55, Tim: 45, Tina: 80, Tom: 75, Tony: 50 };

let addTenPoints = (obj) => {
    let newObj = {};
    for ([key, value] of Object.entries(obj)) {
        newObj[key] = value + 10;
    }
    return newObj;
};

console.log(addTenPoints(dict1));
