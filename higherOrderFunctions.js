let sentence = 'i love food code too playing match'; ``
let sentArr = sentence.split(" ").filter((el) => {
    return el.length > 4;
}).join(" ")
console.log(sentArr);

let mix = "A13Bs2zx";

let getNumbers = mix.split('').filter((el) => {
return !isNaN(parseInt(el))
}).map((el)=>{
    return el*el;
})
console.log(getNumbers);
