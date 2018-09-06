// array of objects for ToDo
const todos = [{
    text: 'Walk the dog',
    completed: true
}, {
    text: 'Go to the store',
    completed: false
}, {
    text: 'Pick up laundry',
    completed: true
}, {
    text: 'Learn something new',
    completed: true
}, {
    text: 'Go to run',
    completed: false
}];

// object of filters
const filters = {
    searchText: '',
    checkgoxActivated: false
}

// function for creating new element - ELEMENT, TEXT, WHERE TO APPEND
const createNewElement = function (element, text, appendTo) {
    let newElement = document.createElement(element);
    newElement.textContent = text;
    document.querySelector(appendTo).appendChild(newElement);
}

// function for listing all todos
const listAllTodos = function (todos) {
    notCompletedAmount(todos);
    if (!filters.checkgoxActivated) {
        todos.forEach(function (todo, index) {
            createNewElement('p', `${index + 1}. ${todo.text} - completed: ${todo.completed}`, '#todos-div');
        });
    } else {
        todos.forEach(function (todo, index) {
            if (todo.completed === false) {
                createNewElement('p', `${index + 1}. ${todo.text} - completed: ${todo.completed}`, '#todos-div');
            }
        });
    }
}

// filtering the todo - which are not completed yet
const notCompletedAmount = function (todos) {
    let notDone = todos.filter(function (todo) {
        return !todo.completed;
    });
    createNewElement('h2', `You have ${notDone.length} todos.`, '#todos-div');
}

// filtering the todos
const filterTodos = function (todos, filters) {
    let filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    });
    document.querySelector('#todos-div').innerHTML = '';
    listAllTodos(filteredTodos);
}

const hideCompleted = function (todos, filters) {
    let hided = todos.filter(function(todo) {
        return todo.completed === true;
    });
    return hided;
    // filterTodos(hided, filters);
}

const createNewTodo = function (todos, text) {
    todos.push({text: text, completed: false})
}

// Listening for the input for searching
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    filterTodos(todos, filters);
})

// Listening for submit, preventing default behaviour, listing all todos again
document.querySelector('#todo-form').addEventListener('submit', function (e) {
    e.preventDefault();
    createNewTodo(todos, e.target.elements.textTodo.value);
    document.querySelector('#todos-div').innerHTML = '';
    filterTodos(todos, filters);
    e.target.elements.textTodo.value = '';
})

// Listening for the checkbox
document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.checkgoxActivated = e.target.checked;
    document.querySelector('#todos-div').innerHTML = '';
    filterTodos(todos, filters);
})

listAllTodos(todos);
// console.log(notCompleted(todos));



