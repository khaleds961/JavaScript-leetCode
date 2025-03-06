let theBiggest = ['bla', 'propaganda', 'other', 'aaa', 'battery', 'test'];


let find = theBiggest.reduce((acc, curr) => {
    return acc.length > curr.length ? acc : curr;
})

console.log(find);

let chars = ['e', '@', '@', 'l', 'z', 'e', 'r', '@', '0'];

let ok = chars.filter((e) => {
    return e !== '@'
}).reduce((acc,curr)=>{
    return acc + curr
})
console.log(ok);










