const Manager = require('../lib/Manager');

// test every name [getName()], id [getId()], email [getEmail()], & getRole()
describe("Manager class", () => {
    // do I just need this???
    describe("Manager Github", () => {
        // email
        it("getManager() should return engineer github", () => {
            const officeNumber = 123;
            const manager = new Manager("Shawn Spencer", 1, "shawn@psych.com", officeNumber);
            expect(manager.getOfficeNumber()).toBe(officeNumber);
        });
    });
    
});