let num = 103.941;

console.log(num.toFixed(2));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));


let min = 10;
let max = 20;
// 0 - .999999
// let randomNum = Math.random();

// 0 - 9.999999
// let randomNum = Math.random() * (max - min);

// 0 - 10.999999
// let randomNum = Math.random() * (max - min + 1);

// 0 - 10
// let randomNum = Math.floor(Math.random() * (max - min + 1));

// 10 - 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNum);

