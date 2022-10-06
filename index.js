// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const util = require ('util');

const generateMarkdown = require ('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the title of your project? (REQUIRED)",
        name: 'title',
        validate: function (answer){
            if(answer.length<1){
                return console.log("A project title is required.");
            }
            return true; 
        }
    },
    {
    type: 'input',
    message: "Enter a description of your project. (REQUIRED)",
    name: 'description',
    validate: function (answer){
        if(answer.length<1){
            return console.log("A project description is required.");
        }
        return true;
    }
},
{
    type: 'input',
    message: "Are there any installation instructions?",
    name: 'installation',
    },
    {
        type: 'input',
        message: "Provide instructions and examples for use.",
        name: 'usage',
        },
{
        type: 'input',
        message: "What is your Github username?",
        name: 'username',
        validate: function (answer){
            if(answer.length<1){
                return console.log("Username is required.");
            }
            return true;
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, err=>{
        if(err){
            return console.log(err);
        }
        console.log("Success!")
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
