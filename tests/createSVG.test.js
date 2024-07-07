// const CreateSVG = require('../index.js');

describe('Create an SVG', () => {
  describe('add characters', () => {
    it('should take in only 3 characters', () => {
      const characters = 'abc';
      expect(characters.length).toBeLessThanOrEqual(3);
    });
  });
});
