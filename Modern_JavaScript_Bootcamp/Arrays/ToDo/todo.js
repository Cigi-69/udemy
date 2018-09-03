// Create an array with five todos
// You have x todos
// Print the first and second to last items -> Todo: walk the dog

const todos = ['Walkt the dog', 'Go to the store', 'Pick up laundry', 'Learn something new', 'Go to run'];
console.log(`You have ${todos.length} ToDos.`);
console.log('-------------------------------');
// for (let i = 0; i < todos.length; i++) {
//     console.log(`Todo ${i + 1}: ${todos[i]}`);
// }
console.log(`Todo: ${todos[0]}`);
console.log(`Todo: ${todos[todos.length - 2]}`);


