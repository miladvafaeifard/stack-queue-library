const Stack = require('./stack');
const Queue = require('./queue');

const stack = new Stack();

stack.push('Apple');
stack.push('Banana');
stack.push('Orange');
stack.push('Strawberry');


console.log(stack);

stack.pop();

console.log(stack);


const queue = new Queue();

queue.enqueue('Apple');
queue.enqueue('Banana');
queue.enqueue('Orange');
queue.enqueue('Strawberry');

console.log(queue);

queue.dequeue();

console.log(queue);
