function showDetails(a, b, c) {
    let arr = [a, b, c];
    let name, age, status;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            name = arr[i];
        } else if (typeof arr[i] === 'number') {
            age = arr[i];
        } else {

            status = arr[i] ? 'Available' : 'Not Available';
        }
    }
    console.log(`Hello ${name} your age is ${age} and your status is ${status}`);
}

showDetails('John', 25, true);
showDetails(25, false, 'John');
showDetails(false, 'John', 25);


function sayHello(theName, theGender = '') {
    console.log(`Hello ${theGender == 'Female' ? 'Miss' : 'Mr'} ${theName}`)
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"


function calculate(firstNum, secondNum, operation) {
    if (firstNum && secondNum && !operation) {
        console.log(firstNum + secondNum);
    } else if (firstNum && secondNum && operation == 'add') {
        console.log(firstNum + secondNum);
    } else if (firstNum && secondNum && operation == 'subtract') {
        console.log(firstNum - secondNum);
    } else if (firstNum && secondNum && operation == 'multiply') {
        console.log(firstNum * secondNum);
    } else {
        console.log('Second Number Not Found');
    }

}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

function ageInTime(theAge) {
    if (theAge < 0 || theAge > 100) {
        console.log('Age Out Of Range');
    } else {
        let months = theAge * 12;
        console.log(`Months Example => ${months} Months`);
    }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months


function createSelectBox(startYear, endYear) {
    document.write('<select id="years"></select>');
    for (let i = startYear; i <= endYear; i++) {
        document.getElementById('years').innerHTML += `<option value="${i}">${i}</option>`;
    }
}
createSelectBox(2000, 2021);

