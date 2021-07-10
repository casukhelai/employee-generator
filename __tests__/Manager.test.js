const Manager = require('../lib/Manager');

// test every name [getName()], id [getId()], email [getEmail()], & getRole()
describe("Manager class", () => {
    describe("Manager Name", () => {
        // name
        it("getName() should return manager name", () => {
            const name = "Juliet O'Hara";
            const manager = new Manager(name);
            expect(manager.name).toBe(name);
        });
    });
    describe("Manager ID", () => {
        // id
        it("getID() should return the manager ID number", () => {
            const id = "3";
            const manager = new Manager("Juliet O'Hara", id, "juliet@psych.com");
            expect(manager.id).toBe(id);
        });
    });
    
    describe("Manager Email", () => {
        // email
        it("getEmail() should return manager email", () => {
            const email = "juliet@psych.com";
            const manager = new Manager("Juliet O'Hara", 3, email);
            expect(manager.getEmail()).toBe(email);
        });
    });
    
    describe("Manager Role", () => {
        // getRole() test
        it("getRole() should return 'manager' ", () => {
            const role = "Manager";
            const manager = new Manager("Juliet O'Hara", 1, "juliet@psych.com");
            expect(manager.getRole()).toBe(role);
        });
    });
});