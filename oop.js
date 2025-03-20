// //ex1
// class Car {
//     constructor(name, model, price) {
//         this.n = name;
//         this.m = model;
//         this.p = price;
//     }

//     run() {
//         return `Car One Name Is ${this.n} And Model Is ${this.m} And Price Is ${this.p}`;
//     }

//     stop() {
//         return "Car Is Running Now";
//     }


// }
// // Needed Output
// // "Car One Name Is MG And Model Is 2022 And Price Is 420000"
// // "Car Is Running Now"
// let car = new Car('Mg', 2002, 42000);
// console.log(car.run());
// console.log(car.stop());

// // ex2

// class Phone {
//     constructor(name, serial, price) {
//         this.name = name;
//         this.serial = serial;
//         this.price = price;
//     }
// }

// class Tablet extends Phone {
//     constructor(name, serial, price,size = 'unknown') {
//         super(name, serial, price)
//         this.size = size;
//     }

//     fullDetails() {
//         return `${this.name} Serial is ${this.serial} and Size is ${this.size}`;
//     }
// }

// // Write Tablet Class Here

// let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
// let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
// let TabletThree = new Tablet("LG", 250450650, 650);

// console.log(`${TabletOne.fullDetails()}`);
// // iPad Serial is 100200300 And Size Is 12.9

// console.log(`${TabletTwo.fullDetails()}`);
// // Nokia Serial is 350450650 And Size Is 10.5

// console.log(`${TabletThree.fullDetails()}`);
// // LG Serial is 250450650 And Size Is Unknown


// ex3
// Edit The Class
// class User {
//     #c;
//     constructor(username, card) {
//       this.u = username;
//       this.#c = card;
//     }

//     fullData(){
//         let card = this.#c.toString();
//         let rg = /\d{4}-\d{4}-\d{4}-\d{4}/g
//         let rgx = /\d{4}/g
//         if(!rg.test(card)){
//             let cardArr = card.match(rgx);
//             return `Hello ${this.u} Your Credit Card Number Is ${cardArr.join('-')}`
//         }
//         return `Hello ${this.u} Your Credit Card Number Is ${this.#c}`
//     }

//     get showData(){
//         return this.fullData();
//     }
//   }

//   // Do Not Edit Anything Below

//   let userOne = new User("Osama", "1234-5678-1234-5678");
//   let userTwo = new User("Ahmed", "1234567812345678");
//   let userThree = new User("Ghareeb", 1234567812345678);

//   console.log(userOne.showData);
//   // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

//   console.log(userTwo.showData);
//   // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

//   console.log(userThree.showData);
//   // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

//   console.log(userOne.c); // Prevent Accessing To Card Property Here
//   // Undefined


//ex4

// Write Your Code Here

// Object.defineProperty(String.prototype, "addLove", {
//     value: function () {
//         return `I Love ${this}`;
//     },
// });

// // Do Not Edit Below
// let myStr = "Elzero";

// console.log(myStr.addLove()); // I Love Elzero Web School


//ex5

const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
  };
  
  // Write Your Code Here

  Object.defineProperties(myObj,{
    id:{
        enumerable:false
    },
    score:{
        writable:false,
    },
    country:{
        enumerable:false,
    }
  })

//   delete myObj.country;
  
  myObj.score = 500;
  
  for (let prop in myObj) {
    console.log(`${prop} => ${myObj[prop]}`);
  }
  
  console.log(myObj);
  
  // Needed Output
  
//   "username => Elzero"
//   "score => 1000"
//   {username: 'Elzero', score: 1000, id: 100}