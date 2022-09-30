// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
## Licensing:
[![license](https://img.shields.io/badge/license-${data.licensing}-blue)](https://shields.io)

## Table of Contents
-[Description](#description)
-[Installation](#installation)
-[Usage](#usage)
-[Contribution](#contribution)
-[Additional Information](#additional-information)

## Description:
${data.description}

## Installation:
${data.installation}

## Usage:
${data.usage}

## License:
${data.license}

## Contribution:
${data.contribute}

## Testing:
${data.test}

## Aditional Information:
- Github: [${data.githubUsername}](https://github.com/${data.githubUsername})
- Email: ${data.email} `;
}

module.exports = generateMarkdown;
