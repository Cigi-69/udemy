// Global scope (convertFarenheitToCelsius, tempOne, tempTwo)
    // Local scope (fahrenheir, celsius)
        // Local scope (isFreezing)

let convertFarenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;

    if (celsius <= 0) {
        let isFreezing = true;
    }

    return celsius;
}

let tempOne = convertFarenheitToCelsius(32);
let tempTwo = convertFarenheitToCelsius(68);

console.log(celsius);
console.log(celsius2);