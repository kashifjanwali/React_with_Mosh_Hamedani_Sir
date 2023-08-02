// Old Method for creating  multiple same objects

/*
const person = {
    name: "KJW Coding",
    walk() {
        console.log("Walk");
    }
};
person.name;
person.walk();


const person2 = {
    name: "Kashif JanWali",
}
*/

// Class

class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log("walk");
    }
}

const person = new Person("Kashif Hussain");