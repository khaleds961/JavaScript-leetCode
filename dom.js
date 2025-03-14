let header = document.createElement('div');
let brand = document.createElement('span');
let navbar = document.createElement('div');
let content = document.createElement('div');
let footer = document.createElement('div')

footer.style.cssText = 'background-color:#146542;text-align:center;color:white;padding:5px';
content.style.cssText = 'background-color:#ececec;display:grid;grid-template-columns: auto auto auto;';

let footerDiv = document.createElement('p');
footerDiv.innerHTML = 'Copyright';

footer.appendChild(footerDiv)

for (let i = 0; i < 15; i++) { 
    let divContent = document.createElement('div');
    divContent.style.cssText = 'background-color:white;padding:10px;margin:5px;border:1px solid black;text-align:center;display:grid;grid-template-columns: auto';
    divContent.innerHTML = `Product ${i+1}`;
    content.appendChild(divContent);
}



navbar.innerHTML = 'Home About Service Contact';
header.style.cssText = 'background-color:grey;display:flex;justify-content:space-between;padding:10px;color:white';
brand.innerHTML = 'Elzero';



header.append(brand)
header.append(navbar)
document.body.append(header)
document.body.append(content)
document.body.append(footer)


