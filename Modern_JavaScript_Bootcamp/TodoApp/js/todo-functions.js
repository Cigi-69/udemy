'use strict';

// Read existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos');
    try {
        return todosJSON ? JSON.parse(todosJSON) : [];
    } catch (e) {
        return [];
    }
}

// Updating local sorage with new data
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Function for removing clicked todo
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
        saveTodos(todos);
        filterTodos(todos, filters);
     }
}

// Function for toggling the Todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);

    if (todo) {
        todo.completed = !todo.completed;
        saveTodos(todos);
        filterTodos(todos, filters);
    }
}

// Function for listing all todos
const listAllTodos = (todos) => {
    document.querySelector('#todos-div').innerHTML='';
    notCompletedAmount(todos);
    if (todos.length > 0) {
        todos.forEach((todo, index) => {
            const pathLabel = '#todos-div label:last-of-type';
            const pathDiv = '#todos-div label:last-of-type div:last-of-type';
            // createNewElement(element, text, appentTo(path), elementClass, checked(optional))
            createNewElement('label', '', '#todos-div', 'list-item');
            createNewElement('div', '', pathLabel, 'list-item__container');
            createNewElement('input', 'checkbox', pathDiv, '', todo.completed).addEventListener('change', () => {
                toggleTodo(todo.id);
            });
            createNewElement('span', `${index + 1}. ${todo.text} - completed: ${todo.completed}`, pathDiv);
            createNewElement('button', 'remove', pathLabel, "button button--text").addEventListener('click', () => {
                removeTodo(todo.id);
            });
        });
    } else {
        createNewElement('p', 'No to-dos to show.', '#todos-div', 'empty-message'  );
    }

}

// Function for creating new element - ELEMENT, TEXT, WHERE TO APPEND
const createNewElement = (element, text, appendTo, elementClass,checked) => {
    const newElement = document.createElement(element);

    if (element === 'input' && text === 'checkbox') {
        newElement.setAttribute('type', text);
        newElement.checked = checked;
    } else if (elementClass !== '') {
        newElement.textContent = text;
        newElement.className = elementClass;
    } else {
        newElement.textContent = text;
    }
    document.querySelector(appendTo).appendChild(newElement);
    return newElement;
}

// Function for creating new todo - pushing todo object into original array of objects
const createNewTodo = (todos, text) => {
    if (text.trim().length > 0) {
        // If we have property whose value comes from a variable with the exact same name - we can use ES6 object definition shorthand - instead text: text -> text
        todos.push({id: uuidv4(), text, completed: false });
        saveTodos(todos);
    }
}

// Filtering the todo - which are not completed yet
const notCompletedAmount = (todos) => {
    const notDone = todos.filter((todo) => !todo.completed);
    const plural = notDone.length === 1 ? '' : 's';
        createNewElement('h2', `You have ${notDone.length} todo${plural} to do.`, '#todos-div', 'list-title');
};

// Filtering the todos
const filterTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        // if there is a match - return true
        const searchMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        // checkbox not-checked -> always true -> all todos || otherwise -> always flase -> todos with todo.completed === false;
        const hideCompletedMatch = !filters.checkgoxActivated || !todo.completed;
        return searchMatch && hideCompletedMatch;
    });
    document.querySelector('#todos-div').innerHTML = '';
    listAllTodos(filteredTodos);
}