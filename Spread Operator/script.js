// Array
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [10, 11, 12];

// Old Method
// const combined = array1.concat(array2);
const combined_1 = array1.concat(array2).concat(array3.concat(1,2,3,4,5,6));
console.log(combined_1);


// spread operator
const combined = [...array1, 7, ...array2, 8, 9, 10, ...array3];
console.log(combined);

// Object
const fName = { first: "KJW" };
const sName = { sur: "Coding" };

const full = { sr: 1, ...fName, ...sName, location: "Rawalpindin" };
console.log(full);
