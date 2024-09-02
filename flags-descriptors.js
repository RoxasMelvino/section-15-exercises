const rectObj = {
    name: 'rectangle 1', 
    width: 10,
    height: 10,
}

let descriptor = Object.getOwnPropertyDescriptor(rectObj, 'name');
console.log(descriptor);