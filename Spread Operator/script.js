// Array
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Old Method
// const combined = array1.concat(array2);

// spread operator
const combined = [...array1, 7, ...array2, 8, 9, 10]
console.log(combined);

// Object
const fName = { first: "KJW" };
const sName = { sur: "Coding" };

const full = { ...fName, ...sName };
console.log(full);
