// 1) "let" and "const"
//     const - reserved for constant values - assign once and do not change
//         • TypeError will occur if you try to change the value of a const

const daysInAWeek = 7;
//daysInAWeek = 5; - throws TypeError

// let is used for everything else - use for variable values

let thisCouldChange = "couldChange";


// 2) Arrow functions
//     • more concise way to declare a function - can omit function keyword
//     • if the function only consists of a return statement,
//       the function can be condensed into one line

const regularFunction = function(input) {
    console.log(`incoming from regular function: ${input}`);
};

const es6Function = (input) => {
    console.log(`incoming from ES6 function: ${input}`);
};

regularFunction('someText');

es6Function('someText2');

const multiplyByTwo = number => number * 2;

console.log(multiplyByTwo(2)); // prints 4