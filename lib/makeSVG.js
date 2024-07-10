const Circle = require('./shapes/circle');
const Triangle = require('./shapes/triangle');
const Square = require('./shapes/square');

function makeSVG(data) {
  const { characters, textColor, shape, shapeColor } = data;
  let svgCode = '';

  switch (shape) {
    case 'circle':
      const circle = new Circle(characters, textColor, shapeColor);
      svgCode = circle.createSVG();
      break;
    case 'triangle':
      const triangle = new Triangle(characters, textColor, shapeColor);
      svgCode = triangle.createSVG();
      break;
    case 'square':
      const square = new Square(characters, textColor, shapeColor);
      svgCode = square.createSVG();
    default:
      return ``;
  }
}

module.exports = makeSVG;
