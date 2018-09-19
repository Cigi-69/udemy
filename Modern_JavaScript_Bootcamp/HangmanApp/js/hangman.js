const Hangman = function (word, attempts) {
    this.word = word.toLowerCase().split('');
    this.guessedLetters = [];
    this.attempts = attempts;
    this.status = 'playing';
};

Hangman.prototype.setStatus = function () {
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter));

    if (this.attempts === 0) {
        this.status = 'failed';
    } else if (finished) {
        this.status = 'finished';
    } else {
        this.status = 'playing';
    }
    return this.status;
}

Hangman.prototype.getStatus = function () {
    if (this.status === 'playing') {
        return `Guesses left: ${this.attempts}`;
    } else if (this.status === 'failed') {
        return `Nice try! The word was "${this.word.join('')}".`;
    } else {
        return 'Great work! You guessed the word.';
    }
}

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

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase();

    if (this.status !== 'playing') {
        return
    }

    if(!this.guessedLetters.includes(guess)) {
        this.word.includes(guess) ? this.guessedLetters.push(guess) : this.attempts--;
        this.setStatus();
    }
}







