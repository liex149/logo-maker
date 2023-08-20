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
                message: 'Please enter 3 letters',
                name: 'letters',
            },
            {
                type: 'list',
                message: 'Pick a color',
                name: 'textcolor',
                choices: ['red', 'green', 'blue', 'yellow'],
            },
            {
                type: 'list',
                message: 'Pick a color',
                name: 'shapecolor',
                choices: ['red', 'green', 'blue', 'yellow'],
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
                console.log('you are here')
                const mySquare = new Square(response.shapecolor, response.textcolor, response.letters);
                writeToFile(`./examples/logo.svg`, mySquare.render())
            } else if (response.shape == 'circle') {
                const myCircle = new Circle(response.shapecolor, response.textcolor, response.letters);
                writeToFile(`./examples/logo.svg`, myCircle.render())
            } else {
              
                const myTriangle = new Triangle(response.shapecolor, response.textcolor, response.letters);
                writeToFile(`./examples/logo.svg`, myTriangle.render())


            }
        })

}


initialize();