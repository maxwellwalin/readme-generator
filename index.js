const fs = require("fs");
const inquirer = require("inquirer");

const writeToFile = (answers) =>
    `# ${answers.title}

## Description
${answers.desc}
        
## Table of Contents
[Installation](#installation)  
[Usage](#usage)  
[License](#license)  
[Contributing](#contributing)  
[Tests](#tests)  
[Questions](#questions)  

## Installation
${answers.inst}

## Usage
${answers.usage}

## License
${answers.license}

## Contributing
${answers.guidelines}

## Tests
${answers.test}

## Questions
Please visit my [GitHub account](github.com/${answers.github}) or contact me via email at ${answers.email} if you have any questions.`

const init = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter your project title: ',
        },
        {
            type: 'input',
            name: 'desc',
            message: 'Enter a description of your project: ',
        },
        {
            type: 'input',
            name: 'inst',
            message: 'Enter instructions to install your project: ',
        },
        {
            type: 'input',
            name: 'usage',
            message: "Enter your project's usage information: ",
        },
        {
            type: 'input',
            name: 'guidelines',
            message: "Enter the guidelines for other developer's contributions: ",
        },
        {
            type: 'input',
            name: 'test',
            message: "Enter the test instructions for your project: ",
        },
        {
            type: 'list',
            message: 'Which license is your application covered under?',
            name: 'license',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter your GitHub username: ",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter your email address: ",
        },
    ])
        .then((answers) => {
            const READMEContent = writeToFile(answers);

            fs.writeFile('README.md', READMEContent, (err) =>
                err ? console.log(err) : console.log('Successfully created README.md!'))
        });
}

init();