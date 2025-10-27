// // function declaratoin

// // Function Expression
// const add = function (a, b) {
//     console.log(a + b);
// }
// // Calling function
// add(2, 3);

// // console.log(x);
// // var x = 9;


// // arrow functions
// const add2 = (a, b) => {
//     console.log('razan');
//     console.log(a + b);
// }
// // Calling function
// add2(2, 3);



// let hello = (x) => {
//     return "Hello World!";
// }

// let hello2 = x => "Hello World!";


// const user1 = {
//     username: "Alice",
//     greet: function () {
//         console.log(`Hello, ${this.username}`);
//     },
// };

// user1.greet();



// const user11 = {
//     username: "Alice",
//     greet: () => {
//         console.log(this);
//         console.log(`Hello, ${this.username}`);
//     },
// };

// user11.greet();



// const user3 = {
//     name: "Alice",
//     greet: function () {
//         const inner = () => {
//             console.log(`Hello, ${this.name}`);
//         };
//         inner();
//     },
// };

// user3.greet();



const button11 = document.querySelector("button");
// button11.addEventListener("click",function(){
//     console.log(this);  
// });


button11.addEventListener("click",()=>{
    console.log(this);  
});

// ❌ Avoid in:
// ❌ Object methods (unless nested inside a normal function).
// ❌ Event listeners if you need this to refer to the element.
  