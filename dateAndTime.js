// // Needed Output
// "1247939400 Seconds"
// "20798990 Minutes"
// "346650 Hours"
// "14444 Days"
// "481 Months"
// "40 Years"

// let date = new Date('11 17 1995')
// let now = new Date()

// let diff = now - date;

// let sec = (diff/1000).toFixed();
// let min = (sec/60).toFixed();
// let hour = (min/60).toFixed();
// let days = (hour/24).toFixed();
// let years = (days/365).toFixed();
// let months = (days/30).toFixed();


// console.log(sec,min,hour,days,years,months);


// ex2
// Needed Output
// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"
// let date = new Date(0);
// date.setFullYear(date.getFullYear() +10);
// date.setSeconds(date.getSeconds()+1)
// console.log(date);


//ex3
// Needed Output
// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"
// let date = new Date();
// let month = date.setMonth(3)
// let day = date.setDate(30)
// console.log(date);
// console.log(month);

// console.log(date.toLocaleDateString('default',{day:day}));

// ex4
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// let bir = new Date('1995 11 17')
// let bi = new Date('11 17 95')
// const d = new Date(1995, 10, 17);

// console.log(bi);
// console.log(bir);
// console.log(d);


// ex5
// Needed Output
// "Loop Took 1921 Milliseconds."

// let t0 = performance.now();

// for(let i = 1;i<=999;i++){
//     console.log(i);
// }

// let t1 = performance.now();

// console.log(`time spend is ${t1-t0}`);


// ex6

// Write Your Generator Function Here
// function* gen() {
//     let i = 1;
//     while (true) {
//         yield 100 * i * i - 160 * i + 74;
//         i++;
//     }
// }

// let generator = gen();

// console.log(generator.next()); // Output => {value: 14, done: false}
// console.log(generator.next()); // Output => {value: 154, done: false}
// console.log(generator.next()); // Output => {value: 494, done: false}
// console.log(generator.next()); // Output => {value: 1034, done: false}
// console.log(generator.next()); // Output => {value: 1774, done: false}
// console.log(generator.next()); // Output => {value: 2714, done: false}
// console.log(generator.next()); // Output => {value: 3854, done: false}
// console.log(generator.next()); // Output => {value: 5194, done: false}
// console.log(generator.next()); // Output => {value: 6734, done: false}

// main.js File
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60

// mod-two.js File
let a = 10; // Do Not Edit Names
let b = 20; // Do Not Edit Names
let c = 30; // Do Not Edit Names