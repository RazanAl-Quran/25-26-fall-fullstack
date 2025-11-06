// Resources
// https://developer.okta.com/blog/2019/01/16/history-and-future-of-async-javascript
// https://www.freecodecamp.org/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/
// http://callbackhell.com/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ


// CALLBACKS
// A callback is a function passed as an argument to another function and executed later.

// ************ callbacks 1
function calculateSquare(number, callback) {
    console.log('inside calculateSquare');
    let result = number * number;
    callback(result);
}

function displayResult(result) {
    console.log("The square is:", result);
}
// Calling the function with a callback
calculateSquare(5, displayResult);




// ************ callbacks 2
// console.log('hi 1');
// function cb() {
//     console.log('hi 2');
// }
// setTimeout(cb, 3000);
// console.log('hi 3');



// ************ callback 3
function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 done");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 done");
        callback();
    }, 3000);
}

function step3() {
    setTimeout(() => {
        console.log("Step 3 done");
    }, 2000);
}

// console.log('hello');

// step1(() => {
//     step2(() => {
//         step3();
//     });
// });

// console.log('bye');

// step1();
// step2();
// step3();



// Promises


console.log('before');

// Digimon API call
// let allDigimons = fetch("https://digimon-api.vercel.app/api/digimon");
// console.log(allDigimons);

fetch("https://digimon-api.vercel.app/api/digimon")
    .then((allDigimons) => {
        return allDigimons.json();
    }).then((parsedDigimon)=>{
        console.log(parsedDigimon)     
    }).catch(error=>{
        console.log(error);
        
    });

console.log('after');


// async/await 

console.log('before');

async function fetchDigimon() {
    const digimons = await fetch('https://digimon-api.vercel.app/api/digimon');
    const alldigimons = await digimons.json();
    console.log(alldigimons);
    
}
fetchDigimon();

console.log('after');

