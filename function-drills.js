'use strict';

// //Functions as arguments (1)
// function repeat(fn, n) {
//   let i = 0;

//   while (i < n) {
//     fn();
//     i++;
//   }
// }

// function hello() {
//   console.log('Hello world');
// }

// function goodbye() {
//   console.log('Goodbye world');
// }

// repeat(hello, 5);
// repeat(goodbye, 5);


// //Functions as arguments (2)


// // DO NOT EDIT BETWEEN THESE LINES ----->
// // Return only names that begin with 'R'
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// const filteredNames = filter(myNames, function(name) {
//   // This is a "predicate function" - it's a function that only returns a boolean
//   return name[0] === 'R';
// });

// console.log(filteredNames) // => ['Rich', 'Ray']
// // <---- DO NOT EDIT BETWEEN THESE LINES

// // TASK: DEFINE YOUR FILTER FUNCTION BELOW:
// function filter(arr, fn) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++)
//   {
//     if(fn(arr[i])) {
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// }
  
// filter(myNames, filter);

// //Functions as return values
/*
// Create a hazardWarningCreator function which takes one argument: typeOfWarning
function hazardWarningCreator(typeOfWarning) {
  //Create a warningCounter variable that initializes at 0
  let warningCounter = 0;
  //return an anonymous function, which takes one argument: location
  return function(location) {
    //increment warningCounter
    warningCounter += 1; 
    var times = (warningCounter <= 1) ? 'time' : 'times';
    console.log(`"DANGER! There is a ${typeOfWarning} hazard at ${location}!"`);
    console.log(`"The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${times} today!`);
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road!');
const hailWarning = hazardWarningCreator('Golf ball sized hail!');
const stormWarning = hazardWarningCreator('HUGE STORM INCOMING!');

rocksWarning('Highway');
rocksWarning('Downtown');
hailWarning('Farm');
hailWarning('Everywhere');
hailWarning('Beach');
stormWarning('Mountain');
stormWarning('Downtown');
stormWarning('Beach');
stormWarning('Lake');
*/

//forEach, filter and map
// let movement = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

// function checkIfNegative(move)
// {
//   return move[0] >= 0 ? (move[1] >= 0 ? true : false) : false; 
// }

// function filterNegatives()
// {
//   return movement.filter(checkIfNegative);
// }

// function addSteps(steps)
// {
//   return Math.abs(steps[0])+Math.abs(steps[1]);
// }

// function mapping()
// {
//   return movement.map(addSteps);
// }


// console.log(filterNegatives());
// console.log(mapping());

// let x = mapping();

// x.forEach(function(element) {
//   console.log(element);
// });








//reduce