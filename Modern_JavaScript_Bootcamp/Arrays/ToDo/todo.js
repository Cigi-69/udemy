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

// const sortTodos = function (todos) {
//     todos.sort(function (a, b) {
//         if (a.completed === b.completed) {
//             return 0;
//         } else if (!a.completed) {
//             return -1;
//         } else {
//             return 1;
//         }
//     });
// }

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        return (a.completed === b.completed)? 0 : !a.completed? -1 : 1;
    });
}

sortTodos(todos);
console.log(todos);

