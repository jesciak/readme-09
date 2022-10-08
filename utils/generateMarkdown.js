// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    // https://img.shields.io/badge/license-MIT-brightgreen
    if (license ==="Apache License 2.0"){
      return "https://img.shields.io/badge/license-Apache-blue"
    } else if (license ==="GNU General Public License v3.0"){
      return "https://img.shields.io/badge/license-GNU%20General%20Public%20License%20v3.0-yellow"
    }else if (license === "MIT License") {
      return "https://img.shields.io/badge/license-MIT-brightgreen"
    }else if (license ==="BSD 2-Clause 'Simplified' License"){
      return "https://img.shields.io/badge/license-BSD%202--Clause%20%22Simplified%22%20License-yellowgreen"
    }else if (license ==="BSD 3-Clause 'New' or 'Revised' License"){
      return "https://img.shields.io/badge/license-BSD%203--Clause%20%22New%22%20or%20%22Revised%22%20License-orange"
    }else if (license === "Boost Software License 1.0") {
      return "https://img.shields.io/badge/license-Boost%20Software%20License%201.0-lightgrey"
    }else if (license === "Creative Commons Zero") {
      return "https://img.shields.io/badge/license-Creative%20Commons%20Zero-blueviolet"
    }else if (license === "Eclipse Public License 2.0") {
      return "https://img.shields.io/badge/license-Eclipse%20Public%20License%202.0-pink"
    }else if (license === "GNU Affero General Public License v3.0") {
      return "https://img.shields.io/badge/license-GNU%20Affero%20General%20Public%20License%20v3.0-magenta"
    }else if (license === "GNU General Public License v2.0") {
      return "https://img.shields.io/badge/license-GNU%20General%20Public%20License%20v2.0-purple"
    }else if (license === "GNU Lesser General Public License v2.1e") {
      return "https:/https://img.shields.io/badge/license-GNU%20Lesser%20General%20Public%20License%20v2.1-cyan/img.shields.io/badge/license-MIT-brightgreen"
    }else if (license === "Mozilla Public License 2.0") {
      return "https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-tan"
    }else if (license === "The Unlicense") {
      return "https://img.shields.io/badge/license-The%20Unlicense-black"
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
   - [github](https://github.com/${data.username}) ${data.username}

  ## Contact
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
