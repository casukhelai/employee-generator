// Employee parent class
// properties: name,id,email, officeNumber
// methods: getName(), getID(), getEmail(), getRole() -- returns 'Manager'

// Get Employee class
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;