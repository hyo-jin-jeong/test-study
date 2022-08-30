const Calculator = require('../calculator.js');


describe('Calculator', () => {
    let calculator;
    beforeEach(()=>{
        calculator = new Calculator();
    });

    it('init with 0', () => {
        expect(calculator.value).toBe(0);
    });

    it('set', () => {
        calculator.set(3);
        expect(calculator.value).toBe(3);
    });

    it('clear',()=>{
        calculator.set(9);
        calculator.clear();
        expect(calculator.value).toBe(0);
    });

    it('add', ()=>{
        calculator.set(1);
        calculator.add(1);
        expect(calculator.value).toBe(2);
    });

    it('add Failure', ()=>{
        expect(()=>calculator.add(101)).toThrowError('Value can not be greater than 100');
    });
    

    it('subtract', () => {
        calculator.subtract(3);
        expect(calculator.value).toBe(-3);
    });

    it('multiply', () =>{
        calculator.set(1);
        calculator.multiply(3);
        expect(calculator.value).toBe(3);
    })

    describe('divides', ()=>{
        it('0/0 === NAN', ()=>{
            calculator.divide(0);
            expect(calculator.value).toBe(NaN);
        });
        it('1/0 === Infinity', ()=>{
            calculator.set(1);
            calculator.divide(0);
            expect(calculator.value).toBe(Infinity);
        });
        it('divide', () =>{
            calculator.set(3);
            calculator.divide(3);
            expect(calculator.value).toBe(1);
        })
    })


})