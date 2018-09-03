const notes = ['Note 1', 'Note 2', 'Note 3'];

// // remove the last item of the array - the removed item is provided as a returned value
// console.log(notes.pop());

// // adding intem in the end of the array
// notes.push('My new note');

// // remove the first item of the array - the removed item is provided as a returned value
// console.log(notes.shift());

// // adding item on the first place of the array
// notes.unshift('My first note');

// notes.splice(1, 0, 'This is the new second item');
// notes.splice(1, 1, 'This is the new second item');

notes[2] = 'This is now the new note 3';

notes.forEach(function (item, index) {
    console.log(index);

    console.log(item);
});

console.log(notes.length);
console.log(notes);

// Counting... 1
// for(let i = 0; i < 3; i++) {
//     console.log(`Counting... ${i + 1}`);

// }

for(let i = 0; i < notes.length; i++) {
    console.log(`Note ${i + 1}: ${notes[i]}`);
}

console.log('------------------------------');

for (let i = notes.length - 1; i >= 0; i--) {
    console.log(`Note ${i + 1}: ${notes[i]}`);
}
