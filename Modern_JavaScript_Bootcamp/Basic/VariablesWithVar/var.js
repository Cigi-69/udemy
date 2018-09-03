// var firstName = 'Michal';
// firstName = 'Andrew';

// if (10 === 10) {

//     Function scope
//     var firstName = 'Jen';

//     Block scope - it is not available outside the IF block of code
//     let firstName = 'Jen';
// }

const setName = function () {
    var firstName = 'Jen'
}

// Is not possible with using let or const
// var firstName = 'Jen';


setName();
console.log(firstName);
