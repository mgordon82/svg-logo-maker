const Circle = require('./shapes/circle');
const Triangle = require('./shapes/triangle');
const Square = require('./shapes/square');
const { saveSVG } = require('./saveSVG');

function makeSVG(data) {
  const { characters, textColor, shape, shapeColor } = data;
  let svgCode = '';

  switch (shape) {
    case 'circle':
      const circle = new Circle(characters, textColor, shapeColor);
      svgCode = circle.render();
      saveSVG('./dist/circle.svg', svgCode);
      break;
    case 'triangle':
      const triangle = new Triangle(characters, textColor, shapeColor);
      svgCode = triangle.render();
      saveSVG('./dist/triangle.svg', svgCode);
      break;
    case 'square':
      const square = new Square(characters, textColor, shapeColor);
      svgCode = square.render();
      saveSVG('./dist/square.svg', svgCode);
    default:
      return ``;
  }
}

module.exports = makeSVG;
