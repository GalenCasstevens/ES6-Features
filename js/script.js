// 1) "let" and "const"
//     const - reserved for constant values - assign once and do not change
//         • TypeError will occur if you try to change the value of a const

const daysInAWeek = 7;
//daysInAWeek = 5; - throws TypeError

// let is used for everything else - use for variable values

let thisCouldChange = "couldChange";
thisCouldChange = "changed"; // doesn't throw TypeError

// 2) Arrow functions
//     • more concise way to declare a function - can omit function keyword
//     • if the function only consists of a return statement,
//       the function can be condensed into one line

const regularFunction = function(input) {
    //console.log(`incoming from regular function: ${input}`);
};

const es6Function = (input) => {
    //console.log(`incoming from ES6 function: ${input}`);
};

regularFunction('someText');

es6Function('someText2');

const multiplyByTwo = number => number * 2;

//console.log(multiplyByTwo(2)); // prints 4


// 4) Classes
//     • blueprint for an object

class Cat {
    meow = () => {
        console.log(this.name + ': nyao');
    }
}

class HouseCat extends Cat {
    constructor() {
        super();
        this.name = 'Smokey'; // assigning a property with the constructor
    }

    color = 'grey'; // assigning a property directly inside the class
}

const myCat = new HouseCat()

//console.log('*you pull a plate of food out of the refrigerator*');
//myCat.meow();


// 5) The Spread Operator

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

//console.log(newNumbers);

// const person = {
//     name: 'Galen'
// };

// const newPerson = {
//     ...person,
//     age: 26  
// };

//console.log(`name: ${newPerson.name}\nage: ${newPerson.age}`);


// 6) The Rest Operator

const filter = (...args) => {
    return args.filter(el => el === 'apples');
};

//console.log(filter('oranges', 'apples', 'bananas')); // prints apples


// 7) Destructuring
//     • easily extract array elements or object properties and store 
//       them in variables

const nums = [1, 2, 3];

[num1, num2] = nums;

//console.log(num1, num2); // prints 1, 2

[, num2, num3] = nums;

//console.log(num2, num3); // prints 2, 3


// 8) Reference and Primitive Types

const number = 1;
const number2 = number;

console.log(number2); // 1 gets copied into number2 

const person = {
    name: 'Lucy'
};

const secondPerson = {
    ...person
};

console.log(secondPerson.name);

person.name = 'Galen';

console.log(secondPerson.name);


// Array Functions
const numbers = [1, 2, 3];

const doubleNumArray = numbers.map((num) => {
    return num * 2;
});