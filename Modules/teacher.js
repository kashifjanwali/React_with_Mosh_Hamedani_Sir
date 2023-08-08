import { Person } from "./person";

export class Teacher extends Person {
    constructor(name, nationality, qualification) {
        super(name);
        super(nationality);
        this.qualification = qualification;
    }
    super(walk);
    teach() {
        console.log("Teach");
    }
}