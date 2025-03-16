// let select_size = document.querySelector('#font_size');
// let font_family = document.getElementById('font_family');
// let font_size = document.getElementById('font_size');
// let color = document.getElementById('color');

// for (let i = 16; i <= 30; i++) {
//     let option = document.createElement('option')
//     option.value = i+'px';
//     option.innerHTML = i;
//     select_size.appendChild(option)
// }

// document.querySelector('button').addEventListener('click', function (e) {
//     e.preventDefault();
//     let font_family = document.getElementById('font_family').value;
//     let font_size = document.getElementById('font_size').value;
//     let color = document.getElementById('color').value;
//     console.log(font_size);

//     document.body.style.fontFamily = font_family;
//     document.body.style.fontSize = font_size;
//     document.body.style.color = color;

//     let settings = {
//         font_family: font_family,
//         font_size: font_size,
//         color: color
//     }

//     localStorage.setItem('settings', [JSON.stringify(settings)])

// })

// function checkSettings() {
//     let settings = localStorage.getItem('settings');
//     if (settings) {

//         let set = JSON.parse(settings);
//         console.log(set.font_family);

//             if (set.font_family) {
//                 document.body.style.fontFamily = set.font_family;
//                 font_family.value = set.font_family;
//             }
//             if (set.font_size) {
//                 document.body.style.fontSize = set.font_size;
//                 font_size.value = set.font_size;
//             }

//             if (set.color) {
//                 document.body.style.color = set.color;
//                 color.value = set.color;
//             }
//     }
// }

// checkSettings()


let submitButton = document.querySelector('button')

submitButton.onclick = function (e) {
    e.preventDefault();

    let fname = document.querySelector('[name=firstName]').value;
    let lname = document.querySelector('[name=lastName]').value;
    let age = document.querySelector('[name=age]').value;
    let country = document.querySelector('[name=country]').value;

    let arrInfo = {
        fname: fname,
        lname: lname,
        age: age,
        country: country
    }

    sessionStorage.setItem('info', JSON.stringify(arrInfo))
}


function checkInfo() {

    let info = JSON.parse(sessionStorage.getItem('info')) ?? [];

    document.querySelector('[name=firstName]').value = info.fname ?? '';
    document.querySelector('[name=lastName]').value = info.lname ?? '';
    document.querySelector('[name=age]').value = info.age ?? '';
    document.querySelector('[name=country]').value = info.country ?? 'Lebanon';
}

checkInfo()