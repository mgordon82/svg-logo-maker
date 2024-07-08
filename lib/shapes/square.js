const Shape = require('../shape');

class Square extends Shape {
  constructor(characters, textColor, shapeColor) {
    super(characters, textColor);
    this.shapeColor = shapeColor;
  }
  render() {
    return `<rect width="150" height="150" x="10" y="10" fill="${this.shapeColor}" />`;
  }
}

module.exports = Square;
