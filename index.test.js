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

describe('logoQuestions', ()=> {

        describe('textColor', () => {
            it('should only let you choose one choice from checkbox', ()=> {
                const total = 1;
                const logoQuestions = new logoQuestions(); 
                expect (logoQuestions.textColor(1)).toEqual(total);
            });
        });
});

describe('logoQuestions', ()=> {
    
    describe('shape', () => {
        it('should only allow you to chooes one shape', ()=> {
            const total = 1;
            const logoQuestions = new logoQuestions();
            expect(logoQuestions.shape(1)).toEqual(total);  
        });

    });
});

