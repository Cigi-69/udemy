// const myAge = 18
// const message = myAge >= 18 ? 'You can vote!' : 'You cannnot vote!'
// console.log(message);

const myAge = 27;
const showPage = () => {
    console.log('Showing the page');
}

const showErrorPage = () => {
    console.log('Showing the error page');
}

myAge >= 21 ? showPage() : showErrorPage();


const team = ['Tayler', 'Porter', 'Martin', 'Lucas', 'Peter']

console.log(team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team!');
