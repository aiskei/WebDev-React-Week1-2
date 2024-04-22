//map function
const color = ['red', 'blue', 'green', 'yellow'];

const colorObject = color.map((col) => (col));
console.log(colorObject);

//filter function
const filterColor = color.filter((col) => (col != "red" && col != 'green'));
console.log(filterColor);


//reduce function
const numbers = [1,2,3,4,5];
const sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum);

//find function
const findNumber = numbers.find((number) => number === 3);
console.log(findNumber);
