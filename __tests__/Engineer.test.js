// install and run jest & inquirer

const Engineer = require('../lib/Engineer');

// test every name [getName()], id [getId()], email [getEmail()], & getRole()
describe("Engineer class", () => {
    // do I just need this???
    describe("Engineer Github", () => {
        // email
        it("getGithub() should return engineer github", () => {
            const github = "shawnspencer77";
            const engineer = new Engineer("Shawn Spencer", 1, "shawn@psych.com", github);
            expect(engineer.getGithub()).toBe(github);
        });
    });
    
});




  
