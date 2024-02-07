// 💻 Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
 const testArr1 = [3, 9, 15, 4, 10]
// // output: [9, 27, 45, 12, 30]
// create a function that returns a new array
// create a new array within the function to store the data 
// create a loop that will iterate each item multiplied by 3
// output new array with answer of original array multlipied by 3
const multi3 = (array) => {
    let newarr = []
    for(let i=0; i<array.length; i++){
      newarr.push(array[i] * 3)
    }
    return newarr
} 
console.log(multi3(testArr1));





// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // output: [-7, 3, 5, 13]


// create a function that takes in an array and outputs only the odd numbers in a new array
// define a new variable that creates a new array
// create a loop to iterate each item in the array
// create an if statement that checks to see if the number is odd
// output the odd numbers to a new array
// return the new array
const oddNumbers = (array) => {
  let oddArray = []
  for (let i=0; i<array.length; i++){
      if (array[i] % 2 !== 0){
        oddArray.push(array[i])
      }
    }
    return oddArray
}
console.log(oddNumbers(testArr2));






// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
const comboArr = [
  7,
  "n",
  true,
  "i",
  "c",
  10,
  "e",
  -388,
  "w",
  3,
  "o",
  0,
  "r",
  false,
  "k"
]
// // output: "nicework"

//create function that takes in a comboArray and outputs a string
// create a varible that stores the string (empty array)
// create a for loop to iterate each item in array
// create an if statement searching for type of element in array
// output only the the strings from the combo array to the new array
// return newstring and join the array into a string
const stringArray = (array) => {
  let newString = []
  for(let i=0; i<array.length; i++){
      if(typeof array[i] === "string"){
        newString.push(array[i])
      }
    }
    return newString.join("")
}
console.log(stringArray(comboArr));


// Create a function that takes in an array of numbers and returns the sum.
const addThese1 = [1, 2, 3, 4]
// // output: 10

const addThese2 = []
// // output: 0

// create a function that inputs an array of numbers and returns a sum
// create empty array for storage
// iterate each element in the array
// output each value of the array added together using .reduce
// return new array
// log the function for testing

const addSum = (array) => {
  let sum = []
    for(let i=0; i<array.length; i++){
      sum.push(array[i])
    }
  return sum.reduce((total, value) => total + value)
}
console.log(addSum(addThese1));



// Create a function that takes in an array of numbers and returns the index of the largest number.
const indexHighestNumber = [1, 4, 2, 3]
// // output: 1

const lgNumIndex = (arrayOfNums) => {
    let max = [0];
    let maxIndex = 0;
    for(let i=0; i<arrayOfNums.length; i++){
      if(arrayOfNums[i] > max){
        maxIndex = i;
        max = arrayOfNums[i];
      }
    }
    return maxIndex;
}
console.log(lgNumIndex(indexHighestNumber));

// 🏔 Stretch Goals
// Create a function that takes in two arrays and returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3, 3]
// const arr2 = [7, 8, 2, 3, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]



// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// const arrayLength = 6
// const arrayValue = 0
// // output: [0, 0, 0, 0, 0, 0]

// const arrayLength = 4
// const arrayValue = 11
// // output: [11, 11, 11, 11]



// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// const addUp1 = 4
// // 1 + 2 + 3 + 4 = 10
// // output: 10

// const addUp2 = 10
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // output: 55

// const addUp3 = 600
// // output: 180300





// 🏔 Epic Goals
// Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".


// Create an HTML page and link your JavaScript file. More info here.


// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).


// As a user, I can see if my guess is too high or too low.


// As a user, if I guess the "answer" correctly I am notified that I won.


// As a user, I can continue to guess the "answer" until I am correct.


// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.



// 💻 Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
// const arr1 = [3, 9, 15, 4, 10]
// // output: [30, 90, 150, 40, 100]
// Create a function that takes in an array of numbers and returns an array with all numbers divided by two.
// const arr1 = [3, 9, 15, 4, 10]
// // output: [1.5, 4.5, 7.5, 2, 5]
// Create a function that takes in an array of numbers and returns an array with only odd numbers.
// const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]
// // output: [7, 3, 5, 13, -9]
// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.
// const pumbaa =
//   "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
// // output: ["a", "wonderful", "ain't", "passing", "craze"]
// Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"
// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
// const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // output: [58, "abcd", true]
// Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.
// const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]
// // output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]
// Create a function that takes in a string and returns a new string with all the vowels removed.
// const str = "javascript is awesome"
// // output: "jvscrpt s wsm"
// Create a function that takes in a string containing numbers and returns an array with each number at its own index and converted to the data type of number.
// const stringOfNumbers = "4574328"
// // output: [4, 5, 7, 4, 3, 2, 8]
// 🏔 Stretch Goals
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3]
// const arr2 = [7, 8, 2, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]
// Create a function that takes in an array of mixed data types and returns the first value that is a string. HINT: look into the JavaScript .find() method.
// const allTheData = [7, null, true, 2, "yo!", false, 4, "hello!"]
// // output: "yo!"
