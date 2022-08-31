const Stack = require('../stack.js');

describe('Stack class', () => {
    let stack;
    beforeEach(() => {
        stack = new Stack();
    })

    it('is created empty', () => {
        expect(stack.size()).toEqual(0);
    });

    it('allows to push item', () => {
        stack.push(1);
        expect(stack.size()).toBe(1);
    });

    describe('pop', () => {
        it('throw an error if stack is empty', () => {
            expect(() => {
                stack.pop()
            }).toThrow('Stack is empty');
        });
        it('returns the last pushed item and removes it from the stack', () => {
            stack.push(1);
            stack.push(2);

            expect(stack.pop()).toBe(2);
            expect(stack.array.length).toBe(1);
        });

    })

    describe('peek', () => {
        it('throw an error if stack is empty', () => {
            expect(() => {
                stack.peek();
            }).toThrow('Stack is empty');
        });
        it('returns the last pushed item but keeps it in the stack', () => {
            stack.push(1);
            expect(stack.peek()).toBe(1);
        });
    });

});