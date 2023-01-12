const inquirer = require("inquirer");
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        message: "What is the title of your project?",
        type: "input",
    },
    {
        name: "description",
        message: "What is the description of your project?",
        type: "input",
    },
    {
        name: "installation",
        message: "What are the installation steps for your project?",
        type: "input",
    },
    {
        name: "usage",
        message: "What are the usage instructions for your project?",
        type: "input",
    },
    {
        name: "contribution",
        message: "What are the details on the contributions to this project?",
        type: "input",
    },
    {
        name: "testing",
        message: "Describe the tests that can be ran, and how to run them.",
        type: "input",
    },
    {
        name: "license",
        message: "Which license is your project under?",
        type: "list",
        choices: [
            "MIT",
            "Apache 2.0",
            "GNU 3.0",
            "Eclipse Public",
            "Boost Software 1.0",
            "Creative Commons Zero 1.0",
        ],
    },
    {
        name: "gitHub",
        message: "What is your GitHub username?",
        type: "input",
    },
    {
        name: "email",
        message: "What is your email?",
        type: "input",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}`, data, (err) => console.log())
}

// TODO: Create a function to initialize app
async function init() {
    const answers = await inquirer.prompt(questions);
    const answerStrings = [
        `# *${answers.title}*\n`,
        "## Table of Contents\n- [Description](#Description)\n- [Installation](#Installation)\n- [Usage](#Usage)\n- [Contributions](#Contributions)\n- [Testing](#Testing)\n\n",
        `## Description\n${answers.description}`,
        `## Installation Steps\n${answers.installation}`,
        `## Usage Instructions\n${answers.usage}`,
        `## Contributions\n${answers.contribution}`,
        `## Testing Information\n${answers.testing}`,
        `## License\nLicensed under the ${answers.license} license.`,
        `## Contact Info\n[**GitHub**](www.github.com/${answers.github})<br>[**${answers.email}**]()`
    ];

    
    writeToFile("result.md", answerStrings.join("\n\n"))
}

// Function call to initialize app
init();
