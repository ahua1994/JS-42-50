// Assignment-JS-49:
// Write a JS code to find how many days passed from "2020-5-31" to today.
// (You don’t know this topic. This is also a task for you. A developer
//     should know learning new topics)

let pastDate = "2020-5-31";

let howLongAgo = (date) => {
    let now = new Date();
    let past = new Date(date);
    let ms = now - past;
    let days = Math.floor(ms / (1000 * 60 * 60 * 24));
    return `It has been ${days} days since ${date}`;
};

console.log(howLongAgo(pastDate));
