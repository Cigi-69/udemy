// Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!');
}

greetUser();

let squere = function (num) {
    let result = num * num;
    return result;
}

let value = squere(3);
let otherValue = squere(10);

console.log(value);
console.log(otherValue);