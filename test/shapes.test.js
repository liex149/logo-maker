const Square = require('../lib/square.js');
const Triangle = require('../lib/triangle.js');
const Circle = require('../lib/circle');
const Shapes = require('../lib/shapes');


// circle
describe('Circle', () => {
    test('renders correctly', () => {
        const circle = new Circle("green", "blue", "LOL");
        expect(circle.render()).toEqual(`<svg height="200" width="300" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="green" /><text x="150" y="125" text-anchor="middle" font-size="60" fill="blue">LOL</text></svg>`)
    });
})


// Square
/  describe('Square', () => {
    test('renders correctly', () => {
      const square = new Square("pink", "red", "SAD");
      expect(square.render()).toEqual(`<svg height="200" width="300" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x = "0" y = "0" width="300" height= "200" fill="pink"/><text x="150" y="125" text-anchor="middle" font-size="80" fill="red">SAD</text></svg>`);
    })
})

// Triangle
describe('Triangle', () => {
    test('renders correctly', () => {
      const triangle = new Triangle("blue", "black", "OmG");
      expect(triangle.render()).toEqual(`<svg height="200" width="300" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="0,200 300,200 150,0" fill="blue"/><text x="150" y="125" text-anchor="middle" font-size="60" fill="black">OmG</text></svg>`);
    });
  });

