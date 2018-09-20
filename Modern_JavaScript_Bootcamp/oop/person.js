// Prototypal Inheritance
// myPerson --> Person.prototype --> Object.prototype --> null


class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.likes = likes;
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`;
        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`;
        });
        return bio;
    }
    setName(fullName) {
        const names = fullName.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, likes, position) {
        super(firstName, lastName, age, likes);
        this.position = position;
    }
    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}`;
    }
    getYeardsLeft() {
        return 65 - this.age;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, likes, grade) {
        super(firstName, lastName, age, likes);
        this.grade = grade;
    }
    getBio() {
        const status = this.grade > 69 ? 'passing' : 'failing';
         return `${this.firstName} ${this.lastName} is ${status} the test.`
    }
    updateGrade(points) {
        this.grade += points;
    }
}

// const me = new Employee('John', 'Doe', 29, ['Teaching', 'Biking'], 'Programmer');
// me.setName('Alexis Turner')
// console.log(me.getBio());
// console.log(me.getYeardsLeft());
// const person2 = new Person('Clancey', 'Turner', 51);
// console.log(person2.getBio());

const student = new Student('John', 'Doe', 25, ['programming', 'soccer'], 90);
console.log(student.getBio());
student.updateGrade(-45);
console.log(student.getBio());


