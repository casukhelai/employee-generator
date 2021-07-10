const Intern = require('../lib/Intern');

// test every name [getName()], id [getId()], email [getEmail()], & getRole()
describe("Intern class", () => {
    describe("getName method", () => {
        // name
        it("getName() should return intern name", () => {
            const name = "Buzz McNab";
            const intern = new Intern(name);
            expect(intern.name).toBe(name, 4, "buzz@psych.com", "University of Santa Barbara");
        });
    });
    describe("getId method", () => {
        // id
        it("getID() should return the intern ID number", () => {
            const id = "4";
            const intern = new Intern("Buzz McNab", id, "buzz@psych.com", "University of Santa Barbara");
            expect(intern.id).toBe(id);
        });
    });
    
    describe("getEmail method", () => {
        // email
        it("getEmail() should return intern email", () => {
            const email = "buzz@psych.com";
            const intern = new Intern("Buzz McNab", 4, email,"University of Santa Barbara");
            expect(intern.getEmail()).toBe(email);
        });
    });

    describe("getSchool method", () => {
        // email
        it("getSchool() should return intern email", () => {
            const email = "buzz@psych.com";
            const intern = new Intern("Buzz McNab", 4, "buzz@psych.com", "University of Santa Barbara");
            expect(intern.getEmail()).toBe(email);
        });
    });
    
    describe("getRole method", () => {
        // getRole() test
        it("getRole() should return 'intern' ", () => {
            const role = "Intern";
            const intern = new Intern("Buzz McNab", 4, "buzz@psych.com");
            expect(intern.getRole()).toBe(role);
        });
    });
});