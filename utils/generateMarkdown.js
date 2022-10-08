// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    // https://img.shields.io/badge/license-MIT-brightgreen
    if (license === "MIT License") {
      return "https://img.shields.io/badge/license-MIT-brightgreen"
    } else if (license ==="Apache License 2.0"){
      return "https://img.shields.io/badge/license-Apache-blue"
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT License") {
    return "this is a description of the mit licence"
  } else if (license ==="Apache License 2.0"){
    return "this is the apcahe license description"
  }



}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents 

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  

  ## License: ${data.license}
  ![${data.license}](${renderLicenseBadge(data.license)})
  ${renderLicenseSection(data.license)}


  ## Contributors
   - [github](https://github.com/${data.username}) 

  ## Contact
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
