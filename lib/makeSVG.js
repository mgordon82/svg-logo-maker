const Circle = require('./shapes/circle');
const Triangle = require('./shapes/triangle');
const Square = require('./shapes/square');

function makeSVG(data) {
  console.log('data', data);
  const { characters, textColor, shape, shapeColor } = data;
  let svgCode = '';

  switch (shape) {
    case 'circle':
      const circle = new Circle();
      svgCode = circle.createSVG(characters, textColor, shapeColor);
      break;
    case 'triangle':
      const triangle = new Triangle();
      svgCode = triangle.createSVG(characters, textColor, shapeColor);
      break;
    case 'square':
      const square = new Square();
      svgCode = square.createSVG(characters, textColor, shapeColor);
    default:
      return ``;
  }
}

module.exports = makeSVG;
