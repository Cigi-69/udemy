// Challenge area
// create funkcion - take farenheit in - return object with all three


let tempCalc = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * 5 / 9,
        kelvin: (fahrenheit + 459.67) * 5 / 9
    }
}

let temperature = tempCalc(32);
console.log(`Temperature in: `);
console.log(`   - fahrenheit: ${temperature.fahrenheit}`);
console.log(`   - celsius: ${temperature.celsius}`);
console.log(`   - kelvin: ${temperature.kelvin}`);



