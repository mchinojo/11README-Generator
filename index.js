const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter the title of your README.',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter a description of your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Enter the installation instructions',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Enter the usage information',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Enter the contribution guidelines',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'Enter the test instructions',
            name: 'testing',
        },
        {
            type: 'rawlist',
            message: 'Choose a license for your app',
            name: 'license',
            choices: [
                'Apache License 2.0',
                'GNU General Public License v3.0',
                'MIT License',
                'BSD 2-Clause "Simplified" License',
                'BSD 3-Clause "New" or "Revised" License',
                'Boost Software License 1.0',
                'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License 2.0',
                'GNU Affero General Public License v3.0',
                'GNU General Public License v2.0',
                'GNU Lesser General Public License v2.1',
                'Mozilla Public License 2.0',
                'The Unlicense'
            ]
        },
        {
            type: 'input',
            message: 'Enter your Github username',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Enter your email address',
            name: 'email',
        }
    ])

    .then((response) => {
        console.log(response);
    });

