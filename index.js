const inquirer = require('inquirer');
const fs = require('fs');

const licenseBadges = {
    'Apache License 2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'GNU General Public License v3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'MIT License': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'BSD 2-Clause "Simplified" License': '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
    'BSD 3-Clause "New" or "Revised" License': '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    'Boost Software License 1.0': '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    'Creative Commons Zero v1.0 Universal': '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)',
    'Eclipse Public License 2.0': '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
    'GNU Affero General Public License v3.0': '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
    'GNU General Public License v2.0': '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
    'GNU Lesser General Public License v2.1': '[![License LGPL v2.1](https://img.shields.io/badge/license-LGPL%20v2.1-blue)](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html)',
    'Mozilla Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    'The Unlicense': '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
};

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter the title of your project.',
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
            message: 'Enter your collaborators',
            name: 'credits',
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
        // console.log(response);
        const data = `
# ${response.title} ${licenseBadges[response.license]}

## Description
${response.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

## Installation
${response.installation}

## Usage
${response.usage}

## Credits
${response.credits}

## Contributing
${response.contribution}

## Tests
${response.testing}

## Questions?
If you have any questions or issues, feel free to reach out to me through any of the following channels:

* GitHub: [${response.username}](${response.username}).
* Email: [${response.email}](mailto:${response.email}).

I'm always happy to help and would love to hear from you if you have any feedback or suggestions for improving this project.

## License
This project is licensed under the ${response.license}. 
`;

        fs.writeFile('README.md', data, function (err) {

            if (err) {
                console.error(err);
                return;
            }
            console.log('Saved!');

        });
    });


