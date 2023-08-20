const Shapes = require('./shapes.js')

// Triangle
class Triangle extends Shapes {
    constructor(shapecolor, textcolor, letters) {
        super(shapecolor, textcolor, letters)
    }
    render() {
        return `<svg height="200" width="300" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="0,200 300,200 150,0" fill="${this.shapecolor}"/><text x="150" y="125" text-anchor="middle" font-size="60" fill="${this.textcolor}">${this.letters}</text></svg>`
    }
}

module.exports = Triangle;