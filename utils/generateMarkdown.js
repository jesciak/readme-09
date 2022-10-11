// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   if (license.length===0){
    return ""
   }
    else if (license ==="Apache License 2.0"){
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
}};



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.length===0){
    return ""
   }
    else if (license ==="Apache License 2.0"){
      return "http://choosealicense.com/licenses/apache-2.0/"
    } else if (license ==="GNU General Public License v3.0"){
      return "https://choosealicense.com/licenses/gpl-3.0/"
    }else if (license === "MIT License") {
      return "http://choosealicense.com/licenses/mit/"
    }else if (license ==="BSD 2-Clause 'Simplified' License"){
      return "http://choosealicense.com/licenses/bsd-2-clause/"
    }else if (license ==="BSD 3-Clause 'New' or 'Revised' License"){
      return "https://choosealicense.com/licenses/bsd-3-clause/"
    }else if (license === "Boost Software License 1.0") {
      return "https://choosealicense.com/licenses/bsl-1.0/"
    }else if (license === "Creative Commons Zero") {
      return "https://choosealicense.com/licenses/cc0-1.0/"
    }else if (license === "Eclipse Public License 2.0") {
      return "https://choosealicense.com/licenses/epl-2.0/"
    }else if (license === "GNU Affero General Public License v3.0") {
      return "https://choosealicense.com/licenses/agpl-3.0/"
    }else if (license === "GNU General Public License v2.0") {
      return "https://choosealicense.com/licenses/gpl-2.0/"
    }else if (license === "GNU Lesser General Public License v2.1e") {
      return "http://choosealicense.com/licenses/lgpl-2.1"
    }else if (license === "Mozilla Public License 2.0") {
      return "https://choosealicense.com/licenses/mpl-2.0/"
    }else if (license === "The Unlicense") {
      return "https://choosealicense.com/licenses/unlicense/"

}};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT License") {
    return "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
  } else if (license ==="Apache License 2.0"){
    return "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
  } else if (license ==="GNU General Public License v3.0"){
    return "Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights."
  }else if (license ==="BSD 2-Clause 'Simplified' License"){
    return "A permissive license that comes in two variants, the BSD 2-Clause and BSD 3-Clause. Both have very minute differences to the MIT license."
  }else if (license ==="BSD 3-Clause 'New' or 'Revised' License"){
    return "A permissive license similar to the BSD 2-Clause License, but with a 3rd clause that prohibits others from using the name of the copyright holder or its contributors to promote derived products without written consent."
  }else if (license === "Boost Software License 1.0") {
    return "A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
  }else if (license === "Creative Commons Zero") {
    return "The Creative Commons CC0 Public Domain Dedication waives copyright interest in a work you've created and dedicates it to the world-wide public domain. Use CC0 to opt out of copyright entirely and ensure your work has the widest reach. As with the Unlicense and typical software licenses, CC0 disclaims warranties. CC0 is very similar to the Unlicense."
  }else if (license === "Eclipse Public License 2.0") {
    return "This commercially-friendly copyleft license provides the ability to commercially license binaries; a modern royalty-free patent license grant; and the ability for linked works to use other licenses, including commercial ones."
  }else if (license === "GNU Affero General Public License v3.0") {
    return "Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available."
  }else if (license === "GNU General Public License v2.0") {
    return "The GNU GPL is the most widely used free software license and has a strong copyleft requirement. When distributing derived works, the source code of the work must be made available under the same license. There are multiple variants of the GNU GPL, each with different requirements."
  }else if (license === "GNU Lesser General Public License v2.1e") {
    return "Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work."
  }else if (license === "Mozilla Public License 2.0") {
    return "Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work."
  }else if (license === "The Unlicense") {
    return "A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code."

}};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}<br>
  ![${data.license}](${renderLicenseBadge(data.license)})

  ## Table of Contents 

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  

  ## License
   ${data.license}<br>
  ${renderLicenseLink(data.license)}<br>
  ${renderLicenseSection(data.license)}


  ## Contributing


   
  ## Questions
  If you have any questions please email: ${data.email}

  - [Github:](https://github.com/${data.username}) ${data.username}

`;
}

module.exports = generateMarkdown;
