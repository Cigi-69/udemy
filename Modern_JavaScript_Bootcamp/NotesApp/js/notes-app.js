let notes = getSavedNotes();

const filters = {
    searchText: ''
}



renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function(e){
    const id = uuidv4();
    notes.push({
        id: id,
        title: '',
        body: ''
    })

    saveNotes(notes);
    location.assign(`/edit.html#${id}`);
});

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value);
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        renderNotes(notes, filters);
    }
})


// Unix Epoch - Jnuary 1st 1970 00:00:00

const now = new Date('January 21 2003 6:25:01');
const timestamp = now.getTime();

const myDate = new Date(timestamp);
console.log(myDate.getFullYear());




const dateOne = new Date('January 21 2003 6:25:01');
const dateTwo = new Date('January 21 2001 6:25:02');

const dateOneTimestamp = dateOne.getTime();
const dateTwoTimestamp = dateTwo.getTime();

console.log(dateOneTimestamp);
console.log(dateTwoTimestamp);

if (dateOneTimestamp < dateTwoTimestamp) {
    console.log(dateOne.toString());
} else if (dateTwoTimestamp < dateOneTimestamp) {
    console.log(dateTwo.toString());
}







// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Month: ${now.getMonth()}`);
// console.log(`Day of month: ${now.getDate()}`);
// console.log(`Hour: ${now.getHours()}`);
// console.log(`Minute: ${now.getMinutes()}`);
// console.log(`Seconds: ${now.getSeconds()}`);



