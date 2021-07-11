const Intern = require('../lib/Intern');

// test every name [getName()], id [getId()], email [getEmail()], & getRole()
describe("Intern class", () => {

    describe("getSchool method", () => {
        // email
        it("getSchool() should return intern email", () => {
            const email = "buzz@psych.com";
            const intern = new Intern("Buzz McNab", 4, "buzz@psych.com", "University of Santa Barbara");
            expect(intern.getEmail()).toBe(email);
        });
    });
});