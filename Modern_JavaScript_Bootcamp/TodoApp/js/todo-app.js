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

// You have 2 todos left (p)
// Add a p for each todo above (use text value)
const todosLeft = todos.filter(function (todo) {
    return !todo.completed;
})

const createElement = function (text, element) {
    const newParagraph = document.createElement(element);
    newParagraph.textContent = text;
    document.querySelector('body').appendChild(newParagraph);
};

const allTodos = function (todos) {
    todos.forEach(function (todo, index) {
        createElement(`${index + 1}. ${todo.text} - Completed: ${todo.completed}`, 'p');
    });
};

// Listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function(e){
    console.log('Add new todo!');
})

document.querySelector('#new-todo').addEventListener('input', function (e) {
    console.log(e.target.value);
})

createElement(`You have ${todosLeft.length} todos left.`, 'h2');
allTodos(todos);



