// Template literals

// 1- string interpolation

let n1 = 9;
let n2 = 8;

let sum1 = "The sum of " + n1 + " and " + n2 + "= " + (n1+n2);

console.log(sum1);

let sum2 = `The sum of ${n1} and ${n2} = ${n1+n2} `;
console.log(sum2);


// 2- multi line strings
// const s = "This is a multi-line string 
// that spans across 
// several lines.";
const s2 = `This is a multi-line string 
that spans across 
several lines.`;

console.log(s2);


// Escaping Backticks
// const s2 = 'This is a backtick ' and this is a dollar sign '';
const s3 = `This is a backtick \` and this is a dollar sign `;


