const Hangman = function (word, attempts) {
    this.word = word.toLowerCase().split('');
    this.guessedLetters = [];
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
    return `${puzzle} - attempts: ${this.attempts}`;
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase();
    if(!this.guessedLetters.includes(guess)) {
        this.word.includes(guess) ? this.guessedLetters.push(guess) : this.attempts--;
    }
}


const game1 = new Hangman('Cat', 2);
console.log(game1.getPuzzle());



window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    console.log(game1.getPuzzle());
})




