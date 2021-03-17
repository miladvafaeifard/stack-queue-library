class Stack {
    constructor() {
        this.items = [];
    }

    push(data){
        this.items.push(data);
    }

    pop() {
        return this.items.pop();
    }
}

module.exports = Stack;
