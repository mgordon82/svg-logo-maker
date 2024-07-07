function makeSVG(data) {
  console.log('data', data);
  const { characters, color, shape } = data;

  switch (shape) {
    case 'circle':
      return `
                <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="150" cy="100" r="80" fill="${color}" />
                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${characters.toUpperCase()}</text>
                </svg>`;
    case 'triangle':
      return `
                <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="150 15, 300 300, 0 300" fill="${color}" />
                    <text x="150" y="190" font-size="60" text-anchor="middle" fill="white">${characters.toUpperCase()}</text>
                </svg>`;
    case 'square':
      return `
                <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <rect width="150" height="150" x="10" y="10" fill="${color}" />
                    <text x="85" y="110" font-size="60" text-anchor="middle" fill="white">${characters.toUpperCase()}</text>
                </svg>`;
    default:
      return ``;
  }
}

module.exports = makeSVG;
