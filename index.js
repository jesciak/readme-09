// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');


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
            message: "What are some contribution guidelines",
            name: 'coontributing',
            },
            {
                type: 'input',
                message: "List any tests to include.",
                name: 'test',
                },
                {
                    type: 'list',
                    message: "Make a licesne selection",
                    choices: ['Apache License 2.0', 'GNU General Public License v3.0','MIT License', 'BSD 2-Clause "Simplified" License','BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0','Creative Commons Zero', 'Eclipse Public License 2.0','GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense' ],
                    name: 'license',
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
            {
                type: 'input',
                message: "What is your email address?",
                name: 'email',
        }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile ("readme.md", generateMarkdown(data), function(err){
        if(err)
            return console.log(err);
        else {
        console.log("Success!");
        } 
    });

}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answer){
        const fileName =
        answer.title 
        .split(' ')
        .join(' ') + '.md';
        writeToFile(fileName, answer);
    });

}
// Function call to initialize app
init();
