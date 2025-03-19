class User{
    constructor(id,name,salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
}

let userOne = new User(11,'khaled',6000)

console.log(userOne.id);


let str = 'string';
let s = new String();

console.log(s instanceof String);
console.log(str instanceof String);

