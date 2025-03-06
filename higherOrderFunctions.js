let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero
let str = mix.map((el) => {
    return isNaN(parseInt(el)) ? el : ''
}).reduce((acc, cur) => {
    return acc + cur
})

console.log(str);


let myString = "EElllzzzzzzzeroo";

// Elzero
let noRepeat = myString.split('').filter((el, index) => {
    return myString.indexOf(el) == index
}).join('')

console.log(noRepeat);


let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero
let see = myArray.reduce((acc, cur) => {
    return acc.concat(cur), []
})

console.log(see);



let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// [-1, -10, 10, 20, -5, -3]

let ss = numsAndStrings.filter((el) => {
    return !isNaN(parseInt(el))
}).map((e) => {
    return -e
})

console.log(ss);


let nums = [2, 12, 11, 5, 10, 1, 99];

// 500


let calc = nums.reduce((acc, curr) => {
    return curr % 2 == 0 ? acc * curr : acc + curr
}, 1)

console.log(calc);


let mySring = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = mySring.split(',').map((e)=>{
    return isNaN(parseInt(e)) ? e : ''
}).filter((e)=>{
    return e != '_'
}).reduce((acc,curr)=>{
    return acc+curr
}).split('').filter((el,index)=>{
    return mySring.indexOf(el) !== index
})

console.log(solution);
