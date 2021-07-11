// require packages
const inquirer = require("inquirer");
const fs = require("fs");
const { inherits } = require("util");

// require the team member JS scripts

// add prompts using inquirer
const questions =
[
    {
        type: "input",
        name: "name",
        message: "What is the name of this employee?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the ID of the emmployee?"
    },
    {
        type: "input",
        name: "email",
        message: "What is their email?"
    },
    {
        type: "list",
        name: "role",
        message: "what role does this employee have?",
        choices: ["Manager", "Engineer", "Intern"]
    },
];

// Ask specific questions for each role
// Manager office number
managerOffice = [
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number? (Required)",
        validate: officeNumber => {
            if(officeNumber) {
                return true;
            } else {
                console.log("Enter an office number please!");
                return false;
            }
        }
    }
];

// Engineer github user
engineerGit = [
    {
        type: "input",
        name: "github",
        message: "What is the engineer's github username?",
        validate: github => {
            if(github){
                return true;
            } else{
                console.log("Please enter a username.");
                return false;
            }
        }
    }
];

// Intern school name
internSchool = [
    {
        type: "input",
        name: "school",
        message: "What school does the intern go to?",
        validate: school => {
            if(school){
                return true;
            } else {
                console.log("Please enter a school name.");
                return false;
            }
        }
    }
];
















init();