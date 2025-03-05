let names = (...name) => `String [${name.join("], [")}] => Done !`;

console.log(names('Osama', 'Khaled', 'Ali', 'Mohamad'));


let myNumbers = [20, 50, 10, 60];

function calc(one, two, ...nums) {
    return one + two[0] + nums[0][1];
}

console.log(calc(10, myNumbers, myNumbers))


function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        let fullName = zName.split(' ');
        let fName = fullName[0];
        let lName = fullName[1].charAt().toUpperCase();
        return `${fName} ${lName}`;
    }
    function ageWithMessage(zAge) {
        return `Your Age Is ${zAge.substring(0, 2)}`;
        // Write Your Code Here
        // 38 Is My Age => Your Age Is 38
        // 32 Is The Age => Your Age Is 32
    }
    function countryTwoLetters(zCountry) {
        // Write Your Code Here
        // Egypt => You Live In EG
        // Syria => You Live In SY
        return `You Live In ${zCountry.substring(0, 2).toUpperCase()}`;
    }
    function fullDetails() {
        return 'Hello ' + namePattern(zName) + ' ' + ageWithMessage(zAge) + ' ' + countryTwoLetters(zCountry);
    }
    return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY


const itsMe = () => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function

const urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org


// function checker(zName) {
//     return function (status) {
//       return function (salary) {
//         return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//       };
//     };
//   }
const checker = (zName) => (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble


function specialMix(...data) {
    let total = 0;
    let foundNumber = false;
    for (let i = 0; i < data.length; i++) {
        if (!isNaN(parseInt(data[i]))) {
            total += parseInt(data[i]);
            foundNumber = true;
        }
    }
    return foundNumber ? total : "All Is Strings"; 
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings