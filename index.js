const inquirer = require('inquirer');
const Circle = require('./lib/circle.js');
const Square = require('./lib/square.js');
const Triangle = require('./lib/triangle.js');

const fs = require('fs');

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success')
    );
}

function initialize() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter 3 letters (upper, lower, or both)',
                name: 'letters',
            },
            {
                type: 'input',
                message: 'Pick a color for the text',
                name: 'textcolor',
            },
            {
                type: 'input',
                message: 'Pick a color for the shape',
                name: 'shapecolor',
            },
            {
                type: 'list',
                message: 'Please pick a shape',
                name: 'shape',
                choices: ['circle', 'square', 'triangle'],
            },

        ])
        .then((response) => {
            if (response.shape == 'square') {
                const mySquare = new Square(response.shapecolor, response.textcolor, response.letters);
                writeToFile(`./examples/${Math.random()}.svg`, mySquare.render())
            } else if (response.shape == 'circle') {
                const myCircle = new Circle(response.shapecolor, response.textcolor, response.letters);
                writeToFile(`./examples/${Math.random()}.svg`, myCircle.render())
            } else {
              
                const myTriangle = new Triangle(response.shapecolor, response.textcolor, response.letters);
                writeToFile(`./examples/${Math.random()}.svg`, myTriangle.render())


            }
        })

}
initialize();