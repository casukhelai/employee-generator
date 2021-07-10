// Intern parent class
// properties: name,id,email, school
// methods: getName(), getID(), getEmail(), getSchool() getRole() -- returns 'intern'

class Intern {
    constructor(name, id, email, school){
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.role = "Intern";
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getSchool() {
        return this.school;
    }
    
    getRole() {
        return this.role;
    }
}