class Shape {
  constructor(characters, textColor) {
    this.characters = characters;
    this.textColor = textColor;
  }
  render() {
    throw new Error('Shape must be defined');
  }
}

module.exports = Shape;
