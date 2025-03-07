const numbers = [1, 2, 3, 4, 5];
// Expected output: [2, 4, 6, 8, 10]

let doubleNumbers = numbers.map((el) => {
    return el + el
})

console.log(doubleNumbers);

const numberss = [10, 20, 30, 40];
// Expected output: ["10", "20", "30", "40"]

let numbersToStrings = numbers.map((el) => {
    return `${el}`;
})

console.log(numbersToStrings);


const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
];
// Expected output: ["Alice", "Bob", "Charlie"]

const peopleNames = people.map((el) => {
    return el.name;
})

console.log(peopleNames);


const numberses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Expected output: [2, 4, 6, 8, 10]

let doubleN = numberses.filter((el) => {
    return el % 2 == 0
})

console.log(doubleN);

const peoples = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
];
// Expected output: [{ name: "Charlie", age: 35 }]

let older = peoples.filter((el) => {
    return el.age > 30;
})
console.log(older);

const words = ["apple", "banana", "kiwi", "mango", "watermelon"];
// Expected output: ["banana", "watermelon"]

let longest = words.filter((el) => {
    return el.length > 5;
})

console.log(longest);


const arr = [1, 2, 3, 4, 5];
// Expected output: 15

let sum = arr.reduce((acc, curr) => {
    return acc + curr;
})
console.log(sum);

const wordss = ["Hello", "world", "from", "JavaScript"];
// Expected output: "Hello world from JavaScript"

let con = wordss.reduce((acc, curr) => {
    return acc + ' ' + curr;
})

console.log(con);


const num = [10, 5, 20, 15, 30];
// Expected output: 30

let biggest = num.reduce((acc, curr) => {
    return acc > curr ? acc : curr;
})

console.log(biggest);


const fornumbers = [1, 2, 3, 4, 5];
// Expected output: 1, 2, 3, 4, 5 (logged to the console)\

fornumbers.forEach(element => {
    console.log(element);

});

let arrnumbers = [1, 2, 3, 4, 5];
// Expected output: [2, 4, 6, 8, 10] (original array modified)
arrnumbers.forEach((el, index, arr) => {
    arr[index] = el * 2
})
console.log(arrnumbers);


const ppl = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
];
// Expected output:
// "Name: Alice, Age: 25"
// "Name: Bob, Age: 30"
// "Name: Charlie, Age: 35"

ppl.forEach((el) => {
    console.log('Name: ' + el.name + ', ' + 'Age: ' + el.age);
})


const nu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Expected output: [2, 6, 10, 14, 18]

let evenAndDouble = nu.filter((el) => { return el % 2 !== 0 }).map((el) => { return el * 2 });
console.log(evenAndDouble);

const numb = [10, 20, 30, 40, 50];
// Expected output: 30
let av = numb.reduce((pr, cur, arr) => {
    return pr + cur
})
av = av / numb.length;

console.log(av);

const wor = ["apple", "banana", "apple", "orange", "banana", "apple"];
// Expected output: { apple: 3, banana: 2, orange: 1 }
let recc = wor.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1
    return acc;
}, {})

console.log(recc);
