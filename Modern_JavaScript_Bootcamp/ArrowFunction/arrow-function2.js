const add = function () {
    return arguments[0] + arguments[1];
}

// Not working with arrow function
// const add = () => {
//     return arguments[0] + arguments[1];
// }

console.log(add(11, 22, 33, 44));

// const car = {
//     color: 'Red',
//     getSummary: function () {
//         return `The car is ${this.color}`
//     }
// }

// Alternative way of writing methods
const car = {
    color: 'Red',
    getSummary() {
        return `The car is ${this.color}`
    }
}

// Arrow function can't use key word this
// const car = {
//     color: 'Red',
//     getSummary: () => {
//         return `The car is ${this.color}`
//     }
// }

console.log(car.getSummary());
