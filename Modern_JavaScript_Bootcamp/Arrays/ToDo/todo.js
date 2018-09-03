// Create an array with five todos
// You have x todos
// Print the first and second to last items -> Todo: walk the dog

const todos = ['Walkt the dog', 'Go to the store', 'Pick up laundry', 'Learn something new', 'Go to run'];

// console.log(`Todo: ${todos[0]}`);
// console.log(`Todo: ${todos[todos.length - 2]}`);

// Delete the 3rd item
// Add a new item onto the end
// Remove the first item from the list

todos.splice(2, 1);
todos.push('Go to the Gym');
todos.shift();

// console.log(todos);
// for (let i = 0; i < todos.length; i++) {
//     console.log(`Todo ${i + 1}: ${todos[i]}`);
// }
console.log(`You have ${todos.length} ToDos.`);
console.log('-------------------------------');
todos.forEach(function(item, index) {
    console.log(`Todo ${index + 1}: ${item}`);
});
