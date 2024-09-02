const circle = {
    name: 'Circle 1',
    radius: 30
};

Object.freeze(circle); // freezing also makes the object sealed.
let descriptor = Object.getOwnPropertyDescriptors(circle);
console.log(descriptor);

console.log('obj is sealed?', Object.isSealed(circle)); //true
console.log('obj is frozen?', Object.isFrozen(circle)); //false