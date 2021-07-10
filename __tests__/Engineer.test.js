// install and run jest & inquirer

const Engineer = require('../lib/Engineer');

// test every name [getName()], id [getId()], email [getEmail()], & getRole()
describe("Engineer class", () => {
    describe("Engineer Name", () => {
        // name
        it("getName() should return engineer name", () => {
            const name = "Burton Guster";
            const engineer = new Engineer(name);
            expect(engineer.name).toBe(name);
        });
    });

    describe("Engineer ID", () => {
        // id
        it("getID() should return the engineer ID number", () => {
            const id = "2";
            const engineer = new Engineer("Burton Guster", id, "burton@psych.com");
            expect(engineer.id).toBe(id);
        });
    });
    
    describe("Engineer Email", () => {
        // email
        it("getEmail() should return engineer email", () => {
            const email = "burton@psych.com";
            const engineer = new Engineer("Burton Guster", 1, email);
            expect(engineer.getEmail()).toBe(email);
        });
    });
    
    describe("Engineer Role", () => {
        // getRole() test
        it("getRole() should return 'engineer' ", () => {
            const role = "engineer";
            const engineer = new Engineer("Burton Guster", 1, "burton@psych.com");
            expect(engineer.getRole()).toBe(role);
        });
    });
    
});




  
