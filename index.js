// require packages
const inquirer = require("inquirer");
const fs = require("fs");


// require the team member JS scripts
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const generateHTML = require("./lib/generateHTML");
const Employee = require("./lib/Employee");

// create an employee array
let employeesArr = [];

// add prompts using inquirer
const managerQuestions = () => {
    inquirer
    .prompt ([
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
    ])
// .then(managerData => {
//     let {name,id,email,officeNumber} = managerData;
//     const manager = new Manager(name,id,email,officeNumber);

//     employeesArr.push(manager);
//     console.log(manager);
// })
};

// create Engineer and Intern questions
const engQuestions = () => {
    inquirer
        .prompt ([
        {
            type: "input",
            name: "employeeName",
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
    ])
}

const internQuestions = () => {
    inquirer
        .prompt ([
        {
            type: "input",
            name: "employeeName",
            message: "What is the name of the employee?"
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
        ])
}
const createEmployee = () => {
    inquirer
        .prompt ([
        {
            type: "input",
            name: "employeeName",
            message: "What is the name of the employee?"
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
            when: (input) => input.role === "Engineer"  
        },
        {
            type: "input",
            name: "school",
            message: "What school does the intern go to?",
            when: (input) => input.role === "Intern"
        },
        {
            type: "confirm",
            name: "continueGen",
            message: "Would you like to add more members?",
            default: false,
        }
    ])
    .then(data => {
        // so grab all the info and put it into an array
        let {name,id,email,role,github,school,continueGen} = data;
        let employee;

        if(role === "Engineer"){
            employee = new Engineer(name,id,email,github);
            console.log(employee);
        } else(role === "Intern")
            employee = new Intern(name,id,email,school);
            console.log(employee);
        
        employeesArr.push(employee);

        // if yes is chosen in prompt, return back to createEmployee() 
        // console.log(continueGen);
        if(continueGen){
            return createEmployee(employeesArr);
        } else{
            // Write HTML here
            return employeesArr;
        }
    })


};

// Generate team profile
const writeFile = data => {
    // assume not writing to the same file everytime, since parameter is more specific
    fs.writeFile("./dist/index.html", data, (err) =>
    err ? console.log(err) : console.log("Your team profile has been successfully created! Deploy the HTML file in the browser to see your profile!"));
}

// Create a function to initialize app

async function init() {
    console.log("Welcome to the team profile generator!\nHere you'll be able to keep members of your team in one place.\nPlease answer the following prompts:");
    await managerQuestions();
    
    createEmployee()
        // .then(employeesArr => {
        //     return generateHTML(employeesArr);
        // })
        // .then(indexHTML => {
        //     return fs.writeFile(indexHTML);
        // })
        // writeToHTML(data)

};

init();

