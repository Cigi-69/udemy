// Read existing todos from localStorage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos');
    if (todosJSON !== null) {
        return JSON.parse(todosJSON);
    } else {
        return [];
    }
}

// Updating local sorage with new data
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Function for listing all todos
const listAllTodos = function (todos) {
    notCompletedAmount(todos);
    todos.forEach(function (todo, index) {
        const path = '#todos-div div:last-of-type';
        createNewElement('div', '', '#todos-div');
        createNewElement('input', 'checkbox', path);
        createNewElement('span', `${index + 1}. ${todo.text} - completed: ${todo.completed}`, path);
        createNewElement('button', 'x', path);
    });
}

// Function for creating new element - ELEMENT, TEXT, WHERE TO APPEND
const createNewElement = function (element, text, appendTo) {
    const newElement = document.createElement(element);
    if (element === 'input' && text === 'checkbox') {
        newElement.setAttribute('type', text);
    } else {
        newElement.textContent = text;
    }
    document.querySelector(appendTo).appendChild(newElement);
}

// Function for creating new todo - pushing todo object into original array of objects
const createNewTodo = function (todos, text) {
    if (text.length > 0) {
        todos.push({id: uuidv4(), text: text, completed: false });
        saveTodos(todos);
    }
}

// Filtering the todo - which are not completed yet
const notCompletedAmount = function (todos) {
    const notDone = todos.filter(function (todo) {
        return !todo.completed;
    });
    createNewElement('h2', `You have ${notDone.length} todos to do.`, '#todos-div');
}

// Filtering the todos
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