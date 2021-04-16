// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
    return ''
  } 
  
  return `![License-Badge](https://img.shields.io/badge/license-${license}-blue.svg)`

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
    return ''
  } 
  
  return `* [License](#License)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return ''
  } 
  
  return `## License`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
  # ${response.title}

  ## Table of Contents
  ${renderLicenseLink(response.license)}
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ${renderLicenseSection(response.license)}

  ${renderLicenseBadge(response.license)}
  
  ## Description

  ${response.description}

  ## Installation 

  ${response.installation}

  ## Usage

  ${response.usage}

  ## Contributing

  ${response.contributing}

  ## Tests

  ${response.tests}

  ## Questions

  Github:
  https://github.com/${response.username}

  Email:
  ${response.email}


  
  `;
}

module.exports = generateMarkdown;
