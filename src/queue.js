class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(data){
        this.items.push(data);
    }

    dequeue() {
        return this.items.shift();
    }
}

module.exports = Queue;
