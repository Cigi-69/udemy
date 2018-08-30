// Challenge area

// name, age, location
// Andrew is 27 and lives in Philadelphia.
// Increase age by 1 and print message again

let person = {
    name: 'Michal',
    age: 29,
    location: 'Nitra',
    coutry: 'Slovakia'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}, ${person.coutry}.`);

person.age += 1;
console.log(`${person.name} is ${person.age} and lives in ${person.location}, ${person.coutry}.`);