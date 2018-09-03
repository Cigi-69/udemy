// Challenge area
// 1 - 5 - ture if correct - false if not correct
// console.log(makeGuess(1));

let min = 1;
let max = 5;

let makeGuess = function (num) {
    return num === Math.floor(Math.random() * (max - min + 1)) + min;

}

let makeGuess2 = function (num) {
    let winningNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (num === winningNumber)  {
        return `Yeah! You guess right!`;
    } else {
        return `Ooops! You guess ${num} but winning number is ${winningNumber}.`;
    }
}

console.log(makeGuess(3));
console.log(makeGuess2(4));


