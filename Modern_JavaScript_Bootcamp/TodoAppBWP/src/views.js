import { getTodos, toggleTodo, removeTodo } from './todos'
import { getFilters } from './filters'

const renderTodos = () => {
    document.querySelector('#todos-div').innerHTML = '';
    const { searchText, checkgoxActivated} = getFilters()
    const filteredTodos = getTodos().filter((todo) => {
        const searchMatch = todo.text.toLowerCase().includes(searchText.toLowerCase());
        const hideCompletedMatch = !checkgoxActivated || !todo.completed;
        return searchMatch && hideCompletedMatch;
    });
    generateTodoDOM(filteredTodos);
}

// Function for creating new element - ELEMENT, TEXT, WHERE TO APPEND
const createNewElement = (element, text, appendTo, elementClass, checked) => {
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

// Filtering the todo - which are not completed yet
const generateSummaryDOM = (todos) => {
    const notDone = todos.filter((todo) => !todo.completed);
    const plural = notDone.length === 1 ? '' : 's';
    createNewElement('h2', `You have ${notDone.length} todo${plural} to do.`, '#todos-div', 'list-title');
};

// Function for listing all todos
const generateTodoDOM = (todos) => {
    document.querySelector('#todos-div').innerHTML = '';
    generateSummaryDOM(todos);
    if (todos.length > 0) {
        todos.forEach((todo, index) => {
            const pathLabel = '#todos-div label:last-of-type';
            const pathDiv = '#todos-div label:last-of-type div:last-of-type';
            createNewElement('label', '', '#todos-div', 'list-item');
            createNewElement('div', '', pathLabel, 'list-item__container');
            createNewElement('input', 'checkbox', pathDiv, '', todo.completed).addEventListener('change', () => {
                toggleTodo(todo.id);
            });
            createNewElement('span', `${index + 1}. ${todo.text}`, pathDiv);
            createNewElement('button', 'remove', pathLabel, "button button--text").addEventListener('click', () => {
                removeTodo(todo.id);
            });
        });
    } else {
        createNewElement('p', 'No to-dos to show.', '#todos-div', 'empty-message');
    }
}

export  { generateTodoDOM, renderTodos, generateSummaryDOM }