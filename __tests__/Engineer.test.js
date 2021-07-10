const Engineer = require('../lib/Engineer');

// test every name [getName()], id [getId()], email [getEmail()], & getRole()
describe("Engineer", () => {
    // name
    it("getName() should return engineer name", () => {
        const name = "Burton Guster";
        const engineer = new Engineer(name);
        expect(engineer.name).toBe(name);
    });

    // id
    it("getID() should return the engineer ID number", () => {
        const id = "2";
        const engineer = new engineer("Burton Guster", id, "burton@psych.com");
        expect(engineer.id).toBe(id);
    });

    // email
    it("getEmail() should return engineer email", () => {
        const email = "burton@psych.com";
        const engineer = new Engineer("Burton Guster", 2, email);
        expect(engineer.getEmail()).toBe(email);
    });
 
    it("getRole() should return 'engineer' ", () => {
        const role = "engineer";
        const engineer = new engineer("Burton Guster", 2, "burton@psych.com");
        expect(engineer.getRole()).toBe(role);
    });

});