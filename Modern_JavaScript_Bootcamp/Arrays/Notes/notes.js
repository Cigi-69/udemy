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
