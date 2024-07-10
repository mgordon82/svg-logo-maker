const Circle = require('../lib/shapes/circle');
const Square = require('../lib/shapes/square');
const Triangle = require('../lib/shapes/triangle');

describe('Create an SVG', () => {
  describe('create triangle shape', () => {
    it('should be a blue triangle', () => {
      const shape = new Triangle('mrg', 'red', 'blue');
      expect(shape.render()).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="blue" />
        <text x="150" y="175" font-size="60" text-anchor="middle" fill="red">MRG</text>
    </svg>`
      );
    });
  });
  describe('create circle shape', () => {
    it('should be a blue circle', () => {
      const shape = new Circle('mrg', 'red', 'blue');
      expect(shape.render()).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
       <circle cx="150" cy="100" r="80" fill="blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">MRG</text>
    </svg>`
      );
    });
  });
  describe('create square shape', () => {
    it('should be a blue square', () => {
      const shape = new Square('mrg', 'red', 'blue');
      expect(shape.render()).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
       <rect width="150" height="150" x="10" y="10" fill="blue" />
        <text x="85" y="110" font-size="60" text-anchor="middle" fill="red">MRG</text>
    </svg>`
      );
    });
  });
});
