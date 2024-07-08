const Shape = require('../shape');

class Circle extends Shape {
  constructor(characters, textColor, shapeColor) {
    super(characters, textColor);
    this.shapeColor = shapeColor;
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
}

module.exports = Circle;
