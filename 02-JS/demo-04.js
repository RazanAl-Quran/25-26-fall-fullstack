// foreach
// map
// filter

// foreach
// people.forEach((item,index,array) => console.log(item));
let people = ['Razan', 'Sherry', 'Abdulrahman', 'Aisha'];

people.forEach((item, index) => {
    console.log(item);
    console.log(people[index]);
    console.log(index);
});


// map
let numbers = [2, 3, 4, 5];
let squareNumbers = numbers.map((item) => {
    return item * item;
})

let squareNumbers2 = numbers.map((item) => item * item);
console.log(numbers);
console.log(squareNumbers);


let people3 = [
    { name: "Atallah", role: "Dad" },
    { name: "Messina", role: "Mom" },
    { name: "Razan", role: "Kid" },
    { name: "Zaid", role: "Kid" },
];

// let familyNames = people3.map((item)=> item.name);
let familyNames = people3.map((person) => {
    if (person.name === 'Atallah') {
        return person.name;
    } 
});

console.log(familyNames);


// filter
let numbers4= [0,1,2,6,7,8];

let evenNums=numbers4.filter(num=>{
    return num%2==0;
})

// let evenNums=numbers4.filter(num=>{
//     if(num%2==0) {return num*num}
// })

console.log(evenNums);



let family = [
  { name: 'jack', role: 'dad' },
  { name: 'alice', role: 'mum' },
  { name: 'rose', role: 'daughter' },
  { name: 'hailey', role: 'daughter' }
];

// let evenNums=numbers4.filter(num=>{
//     return num%2==0;
// })
let daughters = family.filter(person=> (person.role==='daughter'));


console.log(daughters);

// 2==2 >> true
// 2=='2' >> true 
// 2 === '2' >> false (data + type)

