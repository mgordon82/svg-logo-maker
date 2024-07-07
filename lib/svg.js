const inquirer = require('inquirer');
const { saveSVG } = require('./saveSVG');

const prompts = require('./prompts');

class SVG {
  run() {
    return inquirer
      .prompt(prompts)
      .then((resp) => {
        if (resp.characters.length <= 3) {
          saveSVG(`./dist/${resp.shape}.svg`, resp);
        } else {
          console.log('Must be up to 3 characters');
          run();
        }
      })
      .then(() => console.log('SVG created successfully'))
      .catch((error) => {
        console.log(error);
        console.log('Something went wrong');
      });
  }
}

module.exports = SVG;
