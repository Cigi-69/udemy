// HTTP (Hypertext Transfer Ptrotocol)
// Request - What do we want to do
// Responsee - What was actually done

const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');

const game1 = new Hangman('Car Parts', 2);
puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    puzzleEl.textContent = game1.puzzle;
    guessesEl.textContent = game1.statusMessage;
});

getPuzzle('2').then((puzzle) => {
    console.log(puzzle);
}).catch((error) => {
    console.log(`Error: ${error}`);
});

getCountryDetail('SK').then((country) => {
    console.log(country.name);
}).catch((error) => {
    console.log(`Error: ${error}`);
});