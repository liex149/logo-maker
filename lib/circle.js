const Shapes = require('./shapes.js')

// Circle
class Circle extends Shapes {
    constructor(shapecolor, textcolor, letters) {
        super(shapecolor, textcolor, letters)
    }
    render() {
        return `<svg height="200" width="300" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.shapecolor}" /><text x="150" y="125" text-anchor="middle" font-size="60" fill="${this.textcolor}">${this.letters}</text></svg>`
    }
}

module.exports = Circle;