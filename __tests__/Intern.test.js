const Intern = require('../lib/Intern');

// test every name [getName()], id [getId()], email [getEmail()], & getRole()
describe("Intern class", () => {

    describe("getSchool method", () => {
        // email
        it("getSchool() should return intern email", () => {
            const school = "University of Santa Barbara";
            const intern = new Intern("Shawn Spencer", 1, "shawn@psych.com", "University of Santa Barbara");
            expect(intern.getSchool()).toBe(school);
        });
    });
});