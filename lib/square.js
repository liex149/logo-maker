const Shapes = require('./shapes.js')


// Square
class Square extends Shapes {
    constructor(shapecolor, textcolor, letters) {
        super(shapecolor, textcolor, letters)
    }
    render() {
        return `
        <svg height="500" width="500" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,0 0,500 500,500 500,0" stroke="black" stroke-width="1" fill="${this.shapecolor}"/>
        <text x="50%" y="50%" text-anchor="middle" font-family="Verdana" font-size="50" fill="${this.textcolor}">${this.letters}</text>
     </svg>`
    }
}

module.exports = Square;