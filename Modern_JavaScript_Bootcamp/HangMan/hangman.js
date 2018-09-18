const Hangman = function (word, attempts) {
    this.word = word.toLowerCase().split('');
    this.guessedLetters = ['a','n','y','c','e','t'];
    this.attempts = attempts;
};

Hangman.prototype.getPuzzle = function () {
    let puzzle = '';

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter;
        } else {
            puzzle += '*';
        }
    });

    return puzzle;
}

const game1 = new Hangman('Cat', 2);
const game2 = new Hangman('New York', 4 );

console.log(game1.getPuzzle());
console.log(game2.getPuzzle());



// console.log(game1);
// console.log(game2);

