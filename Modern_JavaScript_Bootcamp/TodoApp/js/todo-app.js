// array of objects for ToDo
let todos = [];

// object of filters
const filters = {
    searchText: '',
    checkgoxActivated: false
}

// read data from local storage
const todosJSON = localStorage.getItem('todos');
// if data exist - parse them into todos
if (todosJSON !== null) {
    todos = JSON.parse(todosJSON);
}

// function for creating new element - ELEMENT, TEXT, WHERE TO APPEND
const createNewElement = function (element, text, appendTo) {
    const newElement = document.createElement(element);
    newElement.textContent = text;
    document.querySelector(appendTo).appendChild(newElement);
}

// function for listing all todos
const listAllTodos = function (todos) {
    notCompletedAmount(todos);
        todos.forEach(function (todo, index) {
            createNewElement('p', `${index + 1}. ${todo.text} - completed: ${todo.completed}`, '#todos-div');
        });
}

// filtering the todo - which are not completed yet
const notCompletedAmount = function (todos) {
    const notDone = todos.filter(function (todo) {
        return !todo.completed;
    });
    createNewElement('h2', `You have ${notDone.length} todos to do.`, '#todos-div');
}

// filtering the todos
const filterTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        // if there is a match - return true
        const searchMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        // checkbox not-checked -> always true -> all todos || otherwise -> always flase -> todos with todo.completed === false;
        const hideCompletedMatch = !filters.checkgoxActivated || !todo.completed;
        return searchMatch && hideCompletedMatch;
    });
    document.querySelector('#todos-div').innerHTML = '';
    listAllTodos(filteredTodos);
}

// function for creating new todo - pushing todo object into original array of objects
const createNewTodo = function (todos, text) {
    if (text.length > 0) {
        todos.push({ text: text, completed: false });
        // updating local sorage with new data
        localStorage.setItem('todos', JSON.stringify(todos));
    }
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
    // document.querySelector('#todos-div').innerHTML = '';
    filterTodos(todos, filters);
})

listAllTodos(todos);
// console.log(notCompleted(todos));



