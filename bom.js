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



let id = parseInt(Math.random() * 9999);  // Initialize the `id` variable
let addButton = document.querySelector('button');
let input = document.querySelector('input');
let results = document.querySelector('.results');

function createTodoElement(element) {
    let todo = document.createElement('div');
    let removeBtn = document.createElement('button');
    let span = document.createElement('span');

    span.innerHTML = element.text;
    removeBtn.innerHTML = 'delete';

    removeBtn.classList.add('remove');
    removeBtn.setAttribute('id', `${element.id}`);
    todo.setAttribute('id', `todo${element.id}`);
    todo.classList.add('todo');

    todo.append(span);
    todo.append(removeBtn);
    results.append(todo);

    // Attach the remove event directly when creating the button
    removeBtn.addEventListener('click', function () {
        let id = this.id;
        document.getElementById(`todo${id}`).remove();

        // Update localStorage
        let todos = JSON.parse(localStorage.getItem('todos')) || [];
        let filtered = todos.filter(el => el.id != id);
        localStorage.setItem('todos', JSON.stringify(filtered));
    });
}

// Load todos from localStorage
if (localStorage.getItem('todos')) {
    let todos = JSON.parse(localStorage.getItem('todos'));
    results.style.display = 'block';
    todos.forEach(createTodoElement);
}

// Handle add new todo
addButton.addEventListener('click', function (e) {
    e.preventDefault();  // Prevent form submission

    if (input.value.length > 0) {
        id += 10;
        results.style.display = 'block';

        let newTodo = {
            id: id,
            text: input.value
        };

        createTodoElement(newTodo);

        // Store in localStorage
        let todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.push(newTodo);
        localStorage.setItem('todos', JSON.stringify(todos));

        input.value = '';  // Clear input
    }
});
