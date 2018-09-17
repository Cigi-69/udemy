const Hangman = function (word, attempts) {
    this.word = word;
    this.attempts = attempts;
};

const game1 = new Hangman('Cat', 3);
const game2 = new Hangman('Dog', 3 );

console.log(game1);
console.log(game2);

