// Multiple arguments
let add = function (a, b, c) {
    return a + b + c;
}

let result = add(10, 1, 5);
console.log(result);

// Default arguments
let getScoreText = function (name = 'Annonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`;
    // return 'Name: ' + name + ' - Score: ' + score;
}

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

let name = 'Vikram';
let age = 12;
console.log(`Hey my name is ${name}! I am ${age} years old.`); // injecting value
