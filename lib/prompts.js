const prompts = [
  {
    message: 'Enter 3 characters for your svg',
    name: 'characters',
  },
  {
    message: 'Enter a text color (keyword or hex color code)',
    name: 'textColor',
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
  {
    message: 'Enter the shape color (keyword or hex color code)',
    name: 'shapeColor',
  },
];

module.exports = prompts;
