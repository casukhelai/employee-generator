// Intern parent class
// properties: name,id,email, school
// methods: getName(), getID(), getEmail(), getSchool() getRole() -- returns 'intern'
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name,id,email);
        this.school = school;
        this.role = "Intern";
    }

    getSchool() {
        return this.school;
    }

}

module.exports = Intern;