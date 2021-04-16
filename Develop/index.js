// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Github Username:',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Email Address:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the Title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a Description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation Instructions for your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide the Usage Information for your Project.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the Contribution Guidelines for your project?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Provide test Instructions for your project.',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Finally, pick which license you are using for your project.',
        name: 'license',
        choices: ['Apache2.0', 'BSD3', 'MIT', 'none'],
    },
    ]

    // TODO: Create a function to write README file
    function writeToFile (response){
        fs.writeFile('README.md', generateMarkdown(response), (err) =>
        err ? console.error(err) : console.log('Success!'))
    };



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    
    .then((response) => {
        writeToFile(response);
    });
}

// Function call to initialize app
init();
