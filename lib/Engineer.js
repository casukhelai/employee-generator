// Engineer parent class
// properties: name,id,email. GITHUB USERNAME
// methods: getName(), getID(), getEmail(), getGithub(), getRole() -- returns 'engineer"

class Engineer {
    constructor(name, id, email, github){
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
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

    getGithub() {
        return this.github;
    }
    
    getRole() {
        return this.role;
    }
}