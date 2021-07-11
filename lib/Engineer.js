// Engineer parent class
// properties: name,id,email. GITHUB USERNAME
// methods: getName(), getID(), getEmail(), getGithub(), getRole() -- returns 'engineer"

// Get Employee class
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name,id,email);
        this.github = github;
        this.role = "Engineer";
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;