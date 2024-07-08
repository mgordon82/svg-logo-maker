const Shape = require('../shape');

class Triangle extends Shape {
  constructor(characters, textColor, shapeColor) {
    super(characters, textColor);
    this.shapeColor = shapeColor;
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }
}

module.exports = Triangle;
