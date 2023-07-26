// improt the validate info 


const { describe } = require('node:test');
const validate = require('./index');

// tests 

describe('logoQuestions', ()=> {

    describe('letters', () => {

        it ('should only allow three letters', () => {
            const total = 3;
            const logoQuestions = new logoQuestions();
            expect (logoQuestions.letters(3)).toEqual(total);
        });
    });
});

