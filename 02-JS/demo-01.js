// All References
// https://www.w3schools.com/js/js_es6.asp
// https://www.w3schools.com/js/js_let.asp
// https://www.w3schools.com/js/js_const.asp
// https://www.w3schools.com/js/js_datatypes.asp
// https://www.w3schools.com/js/js_typeof.asp
// https://www.geeksforgeeks.org/primitive-and-non-primitive-data-types-in-javascript/
// https://www.w3schools.com/js/js_hoisting.asp
// https://www.w3schools.com/js/js_destructuring.asp
// https://www.w3schools.com/react/react_es6_spread.asp
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_rest
// https://www.w3schools.com/js/js_best_practices.asp


// var global scope
{
    var x1 = 9;
}


// let block scope
{
    let x2 = 10;
    console.log(x2);
}

let x2 = 90;
var x1 = 88;
console.log(x1);

const x3 = 11;

// x3 = 9;
console.log(x3);
console.log(typeof x1);


// Hoisting
console.log(summation(3, 9));
function summation(x, y) {
    return x + y;
}


// JS destructuring
const obj1 = { name: "Alice", age: 25 };
const obj2 = { name: "Alice", age: 25 };

// let username = obj1.name;
// let age2 = obj1.age;

let { name, age } = obj1;
let { name:username, age: age2 } = obj2;

console.log(name);
console.log(age);

console.log(username);
console.log(age2);



// Passing by value
let n1 = 89;
let n2 = n1;
n2 = 99;
console.log(n1);
console.log(n2);


// Passing by reference
let arr1 = [1,2,3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1);
console.log(arr2);


// spread operator ...
// 1. Copying Arrays & Objects (Avoiding Mutations)

const arr11 = [1,2,3];
const arr22 = [...arr11];
arr22.push(6);
console.log({arr11});
// console.log("arr11",arr11);
console.log({arr22});


const obj11 = { name: "Alice", age: 25 };
const obj22 = { ...obj11 }; 
obj22.age=99;
console.log(obj11);
console.log(obj22);


// 2. Merging Arrays & Objects
const arr111 = [1, 2, "razan"];
const arr222 = [1, 2, 3];

const arr333= [...arr111,...arr222];
console.log(arr333);


const user = { username: "John", age: 30 };
const details = { username:"Razan", country: "USA", gender: "Male" };
const empDetails = {...user,...details}
console.log(empDetails);


// 3. Adding Elements to Arrays Easily
const arr = [1, 2, 3];
const newArr = [0, ...arr, 4];
console.log(newArr);


// 4. Converting Strings to Arrays
const str = "Hello";
const charArray = [...str];
console.log(charArray);








