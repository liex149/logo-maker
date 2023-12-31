const Shapes = require('./shapes.js')


// Square
class Square extends Shapes {
    constructor(shapecolor, textcolor, letters) {
        super(shapecolor, textcolor, letters)
    }
    render() {
        return `<svg height="200" width="300" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x = "40" y = "10" width="200" height= "200" fill="${this.shapecolor}"/><text x="150" y="125" text-anchor="middle" font-size="60" fill="${this.textcolor}">${this.letters}</text></svg>`
    }
}

module.exports = Square;