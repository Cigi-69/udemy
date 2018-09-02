// Challenge area
// isvalidPassword
// length is more than 8 - and doesn't contain the word password
let isValidPassword = function (passwordPhrase) {
    return passwordPhrase.length > 8 && !passwordPhrase.includes('password');
}

console.log(isValidPassword('asdfp'));
console.log(isValidPassword('abc123!@#$%^&'));
console.log(isValidPassword('asdfpasdfpoipassword'));


