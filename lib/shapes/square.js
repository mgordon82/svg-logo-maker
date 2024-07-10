const Shape = require('../shape');

class Square extends Shape {
  constructor(characters, textColor, shapeColor) {
    super(characters, textColor);
    this.shapeColor = shapeColor;
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
       <rect width="150" height="150" x="10" y="10" fill="${this.shapeColor}" />
        <text x="85" y="110" font-size="60" text-anchor="middle" fill="${
          this.textColor
        }">${this.characters.toUpperCase()}</text>
    </svg>`;
  }
}

module.exports = Square;
