const inquirer = require('inquirer');
const fs = require('fs');
const makeSVG = require('./utils/makeSVG');

const prompts = [
  {
    message: 'Enter 3 characters for your svg',
    name: 'characters',
  },
  {
    message: 'Enter a color keyword or hex color code',
    name: 'color',
  },
  {
    message: 'What shape would you like?',
    name: 'shape',
    type: 'list',
    choices: [
      {
        name: 'triangle',
        value: 'triangle',
      },
      {
        name: 'square',
        value: 'square',
      },
      {
        name: 'circle',
        value: 'circle',
      },
    ],
  },
];

function saveSVG(file, promptData) {
  fs.writeFile(file, makeSVG(promptData), (error) => {
    if (error) {
      console.error('There was an error making the svg', error);
    } else {
      console.log('Successfully created the SVG file!');
    }
  });
}

function init() {
  inquirer.prompt(prompts).then((resp) => {
    console.log('resp', resp.characters.length);
    if (resp.characters.length <= 3) {
      saveSVG(`./dist/${resp.shape}.svg`, resp);
    } else {
      console.log('Must be up to 3 characters');
      init();
    }
  });
}

init();
