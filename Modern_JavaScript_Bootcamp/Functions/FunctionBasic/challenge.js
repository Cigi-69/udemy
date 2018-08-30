// convertFarenheitToCelsius

let convertFarenheitToCelsius = function (fahrenheit) {
    return (fahrenheit -32) * 5 / 9;
}

let celsius = convertFarenheitToCelsius(32);
let celsius2 = convertFarenheitToCelsius(68);

console.log(celsius);
console.log(celsius2);