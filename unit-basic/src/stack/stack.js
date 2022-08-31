class Stack {
    constructor() {
        this.array = [];
    }

    push(value) {
        this.array.push(value);
    }

    pop() {
        if (this.array.length > 0) {
            return this.array.pop();
        } else {
            throw Error('Stack is empty');
        }
    }

    peek() {
        if (this.array.length > 0) {
            return this.array[this.size() - 1];
        } else {
            throw Error('Stack is empty');
        }
    }

    size() {
        return this.array.length;
    }
}

module.exports = Stack;