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
    searchText: ''
}

// how many todos needs to be completed
const todosLeft = function (todos) {
    let toComplete = todos.filter(function (todo) {
        return !todo.completed;
    });
    return toComplete.length;
}

// function for creating the elements
const createElement = function (text, element) {
    const newParagraph = document.createElement(element);
    newParagraph.textContent = text;
    document.querySelector('#todos-div').appendChild(newParagraph);
};

// list all todos and put them into page
const listAllTodos = function (todos) {
    todos.forEach(function (todo, index) {
        createElement(`${index + 1}. ${todo.text} - Completed: ${todo.completed}`, 'p');
    });
};

// todos - filtered based on the input and rendered into page
const renderedTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    });
    document.querySelector('#todos-div').innerHTML = '';
    // creating h2 - with number of not completed tasks
    createElement(`You have ${todosLeft(filteredTodos)} todos left.`, 'h2');
    // listed all new filtered todos
    listAllTodos(filteredTodos);
}

// initail rendering - to be displayed something
renderedTodos(todos, filters);

// Listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function(e){
    console.log('Add new todo!');
})

// Listen for input for new todo
document.querySelector('#new-todo').addEventListener('input', function (e) {
    console.log(e.target.value);

})

// Listen for input for filter
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderedTodos(todos, filters);
})


