// Require files from node 

const inquirer = require('inquirer');
const fs = require('fs');

// my questions arry with inquirer

inquirer.prompt ([

    {
        name:'letters',
        type:'input',
        message:'Please choose 3 letters for your logo' 
    },
    {
        name:'textColor',
        type:'checkbox',
        message:'What color would you like your text to be?',
        choices: ['blue', 'white', 'black', 'red'],
    },
    {
        name:'shape', 
        type:'checkbox',
        message:'What shape would you like for your logo?', 
        choices:['Circle', 'Triangle', 'Square'],

    },
    {
        name:'shapeColor',
        type:'checkbox',
        message:'What shape color would you like for your logo?', 
        choices:['Red', 'Green', 'Blue', 'Pink'],
    }



]);