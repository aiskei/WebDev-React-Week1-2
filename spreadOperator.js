
//spread operator array
const numbers = [1,2,3,4];
const addNumber = [...numbers, 5,6]
console.log(addNumber)

//spread operator object
const person = {name: 'John Murray', age: 25}
const newPerson = {...person, city: 'Jersey'}
console.log(newPerson)
