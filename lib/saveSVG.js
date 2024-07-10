const fs = require('fs');

function saveSVG(file, promptData) {
  fs.writeFile(file, promptData, (error) => {
    if (error) {
      console.error('There was an error making the svg', error);
    } else {
      console.log('Successfully created the SVG file!');
    }
  });
}

module.exports = { saveSVG };
