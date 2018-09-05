const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}];

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

// notes[2] = 'This is now the new note 3';

// notes.forEach(function (item, index) {
//     console.log(index);

//     console.log(item);
// });

// console.log(notes.length);
// console.log(notes);

// Counting... 1
// for(let i = 0; i < 3; i++) {
//     console.log(`Counting... ${i + 1}`);

// }

// for(let i = 0; i < notes.length; i++) {
//     console.log(`Note ${i + 1}: ${notes[i]}`);
// }

// console.log('------------------------------');

// for (let i = notes.length - 1; i >= 0; i--) {
//     console.log(`Note ${i + 1}: ${notes[i]}`);
// }

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    })
}

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
        return isTitleMatch || isBodyMatch;
    })
}

console.log(findNotes(notes, 'eating'));


// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase();
//     })
//     return notes[index]
// }

// const note = findNote(notes, 'Office modification');
// console.log(note);


// const index = notes.findIndex(function (note, index) {
//     console.log(note);
//     return note.title === 'Habbits to work on';
// })

// console.log(index);


