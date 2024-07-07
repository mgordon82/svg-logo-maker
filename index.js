const inquirer = require('inquirer');
const fs = require('fs');

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
  fs.writeFile(file, makeSVG(data), (error) => {
    if (error) {
      console.error('There was an error making the svg', err);
    } else {
      console.log('Successfully created the SVG file!');
    }
  });
}

function init() {
  inquirer
    .prompt(questions)
    .then((resp) => saveSVG(`./dist/${resp.shape}.svg`));
}

init();
