// Create an array with five todos
// 1. Convert array to array of objects -> text, completed
// 2. Create function to remove a todo by text value

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
    completed: false
}, {
    text: 'Go to run',
    completed: false
}];

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase();
    });
    if (index >= 0) {
        todos.splice(index, 1);
        return console.log(`Todo "${todoText}" has been deleted!`);
    } else {
        return console.log(`Todo "${todoText}" was not found! 0 items deleted`);
    }
}

// deleteTodo(todos, 'walk the dog');

// console.log(`You have ${todos.length} ToDos.`);
// console.log('-------------------------------');
// todos.forEach(function (item, index) {
//     console.log(`Todo ${index + 1}: ${item}`);
// });

// console.log(todos);

const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed;
    })
}

console.log(getThingsToDo(todos));
