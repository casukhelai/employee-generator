// install and run jest & inquirer

const Engineer = require('../lib/Engineer');

// test every name [getName()], id [getId()], email [getEmail()], & getRole()
describe("Engineer class", () => {
    describe("Engineer Name", () => {
        // name
        it("getName() should return engineer name", () => {
            const name = "Burton Guster";
            const engineer = new Engineer(name, 2, "burton@psych.com", "brutongaster77");
            expect(engineer.name).toBe(name);
        });
    });

    describe("Engineer ID", () => {
        // id
        it("getID() should return the engineer ID number", () => {
            const id = "2";
            const engineer = new Engineer("Burton Guster", id, "burton@psych.com", "brutongaster77");
            expect(engineer.id).toBe(id);
        });
    });
    
    describe("Engineer Email", () => {
        // email
        it("getEmail() should return engineer email", () => {
            const email = "burton@psych.com";
            const engineer = new Engineer("Burton Guster", 2, email, "brutongaster77");
            expect(engineer.getEmail()).toBe(email);
        });
    });

    // do I just need this???
    describe("Engineer Github", () => {
        // email
        it("getGithub() should return engineer github", () => {
            const github = "brutongaster77";
            const engineer = new Engineer("Burton Guster", 2, "burton@psych.com", github);
            expect(engineer.getEmail()).toBe(github);
        });
    });
    
    describe("Engineer Role", () => {
        // getRole() test
        it("getRole() should return 'engineer' ", () => {
            const role = "engineer";
            const engineer = new Engineer("Burton Guster", 2, "burton@psych.com", "brutongaster77");
            expect(engineer.getRole()).toBe(role);
        });
    });
    
});




  
