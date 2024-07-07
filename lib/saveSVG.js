const fs = require('fs');
const makeSVG = require('./makeSVG');

function saveSVG(file, promptData) {
  fs.writeFile(file, makeSVG(promptData), (error) => {
    if (error) {
      console.error('There was an error making the svg', error);
    } else {
      console.log('Successfully created the SVG file!');
    }
  });
}

module.exports = { saveSVG };
