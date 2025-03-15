// let pro = prompt('Print from to');


// let num_one = parseInt(pro.split('-')[0]); // Convert to number
// let num_two = parseInt(pro.split('-')[1]);

// let div = document.createElement('div')

// for (let i = num_one; i <= num_two; i++) {
//     let text = document.createTextNode(i)
//     let br = document.createElement('br'); 
//     div.appendChild(text)
//     div.appendChild(br)
// }

// document.body.appendChild(div)

// let al = function () {
//     alert('welcome')
// }

// setTimeout(al,3000)

// let div = document.querySelector('div')

// let count = setInterval(() => {
//     let num = parseInt(div.innerHTML);

//     if (num == 0) {
//         // location.href = `https://Elzero.org`
//         clearInterval(count)
//         window.open(`https://Elzero.org`,'site','width=500,height=500');
//     } else {
//         div.innerHTML -= 1;
//     }
// }, 1000)



let id = parseInt(Math.random() * 9999);  // Initialize the `id` variable if it's not already defined
let addButton = document.querySelector('button');
let input = document.querySelector('input');
let results = document.querySelector('.results');


if (localStorage.getItem('todos')) {
    let todos = JSON.parse(localStorage.getItem('todos'))
    results.style.display = 'block';
    todos.forEach(element => {
        let todo = document.createElement('div');
        let removeBtn = document.createElement('button');
        removeBtn.classList.add('remove')
        let span = document.createElement('span');
        span.innerHTML = element.text;
        removeBtn.setAttribute('id', `${element.id}`)
        todo.setAttribute('id', `todo${element.id}`)
        removeBtn.innerHTML = 'delete';
        todo.classList.add('todo');
        todo.append(span)
        // todo.append(removeBtn)
        results.append(todo)
    });
}

let remove = document.querySelectorAll('.remove')

remove.forEach((button) => {
    button.addEventListener('click', function () {  // Use addEventListener
        let id = this.id;
        document.getElementById(`todo${id}`).remove();
        let todos = JSON.parse(localStorage.todos);
        let filtred = todos.filter((el)=>{
            return el.id != id;
        })
        localStorage.setItem('todos',JSON.stringify(filtred))

    });
})


addButton.addEventListener('click', function (e) {
    e.preventDefault();  // Prevent the default behavior of the input field

    if (input.value.length > 0) {
        let todo = document.createElement('div');
        let removeBtn = document.createElement('button');

        id += 10;
        results.style.display = 'block';


        removeBtn.classList.add('remove')
        let span = document.createElement('span');
        span.innerHTML = input.value;
        removeBtn.setAttribute('id', `${id}`)
        todo.setAttribute('id', `todo${id}`)
        removeBtn.innerHTML = 'delete';
        todo.classList.add('todo');
        todo.append(span)
        todo.append(removeBtn)
        results.append(todo)

        // Get the existing todos from localStorage or initialize an empty array
        let todos = JSON.parse(localStorage.getItem('todos')) || [];

        // Push the new todo into the array
        todos.push({
            'id': id,
            'text': todo.innerHTML
        });

        // Store the updated todos back to localStorage
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    input.value = '';  // Clear the input field
});
