// Assignment-JS-50:
// Write a JS code to process mathematical operations below list.
// You can assume in each expression, there is a first number,
// and then an operator, and then second number.
let operations = ["5 + 6", "2 * 3", "8 / 4", "4 - 5"];
// Expected output:
// [11, 6, 2, -1]

function maths(mathArr) {
    let values = mathArr.map((x) => {
        let y = x.split(" ");
        let num1 = parseInt(y[0]);
        let num2 = parseInt(y[2]);
        switch (y[1]) {
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "/":
                return num1 / num2;
            case "*":
                return num1 * num2;
        }
    });
    return values;
}

console.log(maths(operations));
