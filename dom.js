

document.querySelector('form').onsubmit = function (e) {
    e.preventDefault();

    let text = document.querySelector('[name=texts]').value;
    let number = document.querySelector('[name=elements]').value;
    let type = document.querySelector('select').value;
    let container = document.querySelector('.results')

    container.innerHTML = '';
    
    for (let i = 0; i < number; i++) {
        let divsec = document.createElement(type);
        divsec.classList.add('div-style')
        const newContent = document.createTextNode(text);
        divsec.appendChild(newContent)
        container.appendChild(divsec)
    }


}