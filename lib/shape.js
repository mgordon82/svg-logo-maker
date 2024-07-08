class Shape {
  constructor(characters, textColor) {
    this.characters = characters;
    this.textColor = textColor;
  }
  render() {
    throw new Error('Shape must be defined');
  }
  createSVG() {
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.render()}
        <text x="150" y="190" font-size="60" text-anchor="middle" fill="${
          this.textColor
        }">${this.characters.toUpperCase()}</text>
    </svg>
    `;
  }
}

module.exports = Shape;
