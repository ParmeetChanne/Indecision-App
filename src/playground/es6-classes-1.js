class Person {
    constructor(name = 'Name') {
        this.name = name;
    }
    getGreeting() {
        return `Hi ${this.name}`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major
    }
}

const me = new Person('Parmeet Channe');
console.log(me.getGreeting)

const other = new Person('Check');
console.log(other.getGreeting)

