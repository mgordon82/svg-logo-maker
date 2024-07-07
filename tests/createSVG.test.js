const Triangle = require('../lib/triangle');

describe('Create an SVG', () => {
  describe('create shape', () => {
    it('should be a blue triangle', () => {
      const shape = new Triangle();
      shape.setColor('blue');
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  });
});
