// require packages
const inquirer = require("inquirer");
const fs = require("fs");


// require the team member JS scripts
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const generateHTML = require("./lib/generateHTML");

// ======== Prompts ========

// add prompts using inquirer
const managerQuestions =
    [
        {
            type: "input",
            name: "name",
            message: "What is the name of the manager?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is their email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number? (Required)"
        },
    ];

// create Engineer and Intern questions
const engQuestions = [
        {
            type: "input",
            name: "name",
            message: "What is the name of the engineer?"
        },
        {
            type: "input",
            name: "id",
            message: "What is their ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is their email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's github username?",  
        },
];

const internQuestions = [
        {
            type: "input",
            name: "name",
            message: "What is the name of the intern?"
        },
        {
            type: "input",
            name: "id",
            message: "What is their ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is their email?"
        },
        {
            type: "input",
            name: "school",
            message: "What school does the intern go to?"
        },
        ];

// need to ask if there are more individuals to be added

const continuePrompt = [
        {
            type: "list",
            name: "continue",
            message: "Do you want to add another team member?",
            choices: ["Engineer", "Intern", "I'm done"],
        }
    ];

// GOTTA GO BACK TO BASICS....UGH THIS BIG OL FUNCTION IS MEANT EXECUTE THE WHOLE PROGRAM ISHYAAAAA *SMACKS HEAD*
// ====== Create the actual profile ======
const mainProfile = (function() {
    // create an employee array
    let employeesArr = [];

    // there's no better place for this init function, so i'm going to see if it works here
    const init = () => {
        console.log("Welcome to the team profile generator!\nHere you'll be able to keep members of your team in one place.\nPlease answer the following prompts:");
        managerData();
    }

    function askUser() {
        //ask what user wants to do
        inquirer.prompt(continuePrompt)
        .them((choice => {
            switch (choice.option){
                case "Engineer":
                    engineerData();
                    break;
                case "Intern":
                    internData();
                    break;
                case "I'm done":
                    writeFile(employeesArr);
            }
        }));  
    }

// create the functions for creating info for the employeez
const managerData = () => {
    inquirer.prompt(managerQuestions)
    .then(data => {
       let manager = new Manager(data.name,data.id,data.email,data.officeNumber);
       employeesArr.push(manager);
    })
    // call the function to create this case
    askUser();
}
const engineerData = () => {
    inquirer.prompt(engQuestions)
    .then(data => {
       let engineer = new Engineer(data.name,data.id,data.email,data.github);
       employeesArr.push(engineer);
    })
    // call the function to create this case
    askUser();
}
const internData = () => {
    inquirer.prompt(internQuestions)
    .then(data => {
       let intern = new Intern(data.name,data.id,data.email,data.school);
       employeesArr.push(intern);
    })
    // call the function to create this case
    askUser();
}

// Write file
function writeFile(data){
    let htmlTemplate = generateHTML(data);

    fs.write("./dist/index.html", htmlTemplate, (err) => {
        err ? console.log(err) : console.log("Your team profile has been successfully created! Deploy the HTML file in the browser to see your profile!")
    })
}

return {
    init: init,
};

})();

mainProfile.init();


