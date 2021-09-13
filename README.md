# Professional README Generator

## Description

When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions&mdash;this last part increases the likelihood that other developers will contribute to the success of the project. 

You can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.

This project is a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer).

## Installation

Clone this repository and navigate to its directory in the terminal. 

If you do not have Node.js already installed on your computer, navigate to [here](https://nodejs.org/en/) to download it.

Make sure to download to required dependencies by entering the following command into the console:

```bash
npm install 
```

Once the package-lock.json file is added, all installation required to invoke the application has been completed.

## Usage

The application is invoked by using the following command:

```bash
node index.js
```

Enter the desired information into each of the Inquirer prompts and a README.md file will be generated with the input information in the ./generated_README folder.

[Link](https://drive.google.com/file/d/1kvIr3XS0Kk4FnF7GcpwrCkCPlgodCZMY/view) to video demonstrating this applications functionality and usage.

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Application Functionality

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

# Technology Used
- [node.js](https://nodejs.org/en/)
- node.js [Inquirer package](https://www.npmjs.com/package/inquirer)
- node.js [fs package](https://www.npmjs.com/package/fs)