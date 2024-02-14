// 💻 Challenges FUNCTIONS - LOOPS - ARRAYS
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
 const testArr1 = [3, 9, 15, 4, 10]
// // output: [9, 27, 45, 12, 30]
// create a function that returns a new array
// create a new array within the function to store the data 
// create a loop that will iterate each item multiplied by 3
// output new array with answer of original array multlipied by 3
// const multi3 = (array) => {
//     let newarr = []
//     for(let i=0; i<array.length; i++){
//       newarr.push(array[i] * 3)
//     }
//     return newarr
// } 
// console.log(multi3(testArr1));





// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // output: [-7, 3, 5, 13]


// create a function that takes in an array and outputs only the odd numbers in a new array
// define a new variable that creates a new array
// create a loop to iterate each item in the array
// create an if statement that checks to see if the number is odd
// output the odd numbers to a new array
// return the new array
// const oddNumbers = (array) => {
//   let oddArray = []
//   for (let i=0; i<array.length; i++){
//       if (array[i] % 2 !== 0){
//         oddArray.push(array[i])
//       }
//     }
//     return oddArray
// }
// console.log(oddNumbers(testArr2));






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
// const stringArray = (array) => {
//   let newString = []
//   for(let i=0; i<array.length; i++){
//       if(typeof array[i] === "string"){
//         newString.push(array[i])
//       }
//     }
//     return newString.join("")
// }
// console.log(stringArray(comboArr));


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

// const addSum = (array) => {
//   let sum = []
//     for(let i=0; i<array.length; i++){
//       sum.push(array[i])
//     }
//   return sum.reduce((total, value) => total + value)
// }
// console.log(addSum(addThese1));



// Create a function that takes in an array of numbers and returns the index of the largest number.
const indexHighestNumber = [1, 4, 2, 3]
// // output: 1

// const lgNumIndex = (arrayOfNums) => {
//     let max = [0];
//     let maxIndex = 0;
//     for(let i=0; i<arrayOfNums.length; i++){
//       if(arrayOfNums[i] > max){
//         maxIndex = i;
//         max = arrayOfNums[i];
//       }
//     }
//     return maxIndex;
// }
// console.log(lgNumIndex(indexHighestNumber));

// 🏔 Stretch Goals
// Create a function that takes in two arrays and returns one array with no duplicate values.
const arr1 = [3, 7, 10, 5, 4, 3, 3]
const arr2 = [7, 8, 2, 3, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]

// const noDups = (array1, array2) => {
//   let newArray = array1.concat(array2)
//  return newArray.filter((value, index) => newArray.indexOf(value) === index )
// }
// console.log(noDups(arr1, arr2));

// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
const arrayLength = 6
const arrayValue = 0
// // output: [0, 0, 0, 0, 0, 0]

const arrayLength1 = 4
const arrayValue1 = 11
// // output: [11, 11, 11, 11]

// const weirdArray = (num1, num2) => {
//   let array = []
// for(let i = 0; i<num1; i++){
//     array.push(num2)
// }
// return array
// }
// console.log(weirdArray(arrayLength, arrayValue));
// console.log(weirdArray(arrayLength1, arrayValue1));

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
const addUp1 = 4
// // 1 + 2 + 3 + 4 = 10
// // output: 10

const addUp2 = 10
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // output: 55

const addUp3 = 600
// // output: 180300

// const addUp = (number) => {
//   let sum = 0
//   for(i=1; i<=number; i++){
//     sum = sum + i
//   }
//   return sum
  

// }
// console.log(addUp(addUp1));
// console.log(addUp(addUp2));
// console.log(addUp(addUp3));



// 🏔 Epic Goals
// Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".


// Create an HTML page and link your JavaScript file. More info here.


// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).


// As a user, I can see if my guess is too high or too low.


// As a user, if I guess the "answer" correctly I am notified that I won.


// As a user, I can continue to guess the "answer" until I am correct.


// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.



// 💻 Challenges HIGHER ORDER FUNCTIONS
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
// const arr1 = [3, 9, 15, 4, 10]
// // output: [30, 90, 150, 40, 100]

// const multiply10 = (array) => {
//   return array.map((value) => value * 10)
// }
// console.log(multiply10(arr1));



// Create a function that takes in an array of numbers and returns an array with all numbers divided by two.
// const arr1 = [3, 9, 15, 4, 10]
// // output: [1.5, 4.5, 7.5, 2, 5]
// const divided2 = (array) => {
//   return array.map((value) => value / 2)
// }
// console.log(divided2(arr1));

// Create a function that takes in an array of numbers and returns an array with only odd numbers.
// const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]
// // output: [7, 3, 5, 13, -9]

// const oddNumSorter = (array) => {
//   return array.filter((value) => value % 2 !== 0)
// }
// console.log(oddNumSorter(arr2));

// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.
const pumbaa =
  "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
// // output: ["a", "wonderful", "ain't", "passing", "craze"]

// const oddPhraseMaker = (array) => {
//   return array.split(" ").filter((value) => value.length % 2 !== 0)
// }
// console.log(oddPhraseMaker(pumbaa));
// Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr1 = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // // output: "nicework"
// const stringSorter = (array) => {
//   return array.filter((value) => typeof value === "string").join("")
    
// }
// console.log(stringSorter(comboArr1));
// // Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
// const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // // output: [58, "abcd", true]
// const arrayFilter = (array) => {
//   return array.filter((value) => value)
// }
// console.log(arrayFilter(filterArrayValues));

// Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.
 const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]
// // output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]
// const capitalizer = (array) => {
//   array.map((value) => {
// return 
//   })
// //   }
//   const lionKingMe = (array) => {
//     let newWordz = array.map((value) => {
//        let singleWord = value.split("")
//        return singleWord.map((value, index) => {
//         if(index % 2 !== 0){
//           return value.toUpperCase()
//           } else {
//             return value
//           }
//         }).join("")
//        })
//        return newWordz
//     }
  
//   console.log(lionKingMe(makesWackyWords));

// Create a function that takes in a string and returns a new string with all the vowels removed.
 const str = "javascript is awesome"
// // output: "jvscrpt s wsm"
// Create a function vowelBeGone
// Inputs a "string"
// Outputs a new "string" no vowels
// Change "string" into [array] stringToArray
// Change "string" into [array]
// Iterate through [array] 
// If? else: statement to remove vowels
// Return  [array]
// Change array into string
// log and test function

// const vowelBeGone = (string) => {
//   let stringToArray = string.split("")
//   let noVowel = stringToArray.filter((value) => {
//     if (value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u"){
//       return value
//     }
//     })
//     return noVowel.join("")
//   }

// console.log(vowelBeGone(str));

// const vowelBeGone = (string) => {
//   let stringToArray = string.split("")
//   let noVowel = stringToArray.filter((value) => {
//    if( value.includes("a", "e", "i", "o", "u") !== true){
//       return value
//     }
//     })
//     return noVowel.join("")
//   }

// console.log(vowelBeGone(str));

// const vowelBeGone = (string) => {
//   let stringToArray = string.split("")
//   return stringToArray.filter(value => !value.includes("a", "e", "i", "o", "u")).join("")
//   }

// console.log(vowelBeGone(str));




// Create a function that takes in a string containing numbers and returns an array with each number at its own index and converted to the data type of number.
const stringOfNumbers = "4574328"
// // output: [4, 5, 7, 4, 3, 2, 8]

// Create function that inputs a string of numbers
// Outputs an array of numbers
// Convert string to array of individual numbers
// iterate through array
// convert array of "strings" to Numbers
// Return array of numbers containing their own index
// const numberMaker = (stringOfNums) => {
//   return stringOfNums.split("").map(value => +value)

// }
// console.log(numberMaker(stringOfNumbers));



// const numberMaker = (stringOfNums) => {
//   return stringOfNums.split("").map(Number)

// }
// console.log(numberMaker(stringOfNumbers));



// 🏔 Stretch Goals
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.

//  create function that inputs 2 seperate arrays
// Create var to concat arrays
// Return a filtered array comparing first instance of value to the first index location
// Output an array without duplicate values

//  const arr1 = [3, 7, 10, 5, 4, 3]
//  const arr2 = [7, 8, 2, 1, 5, 4]
// // // output: [3, 7, 10, 5, 4, 8, 2, 1]
// const noDuplicates = (array1, array2) => {
//   let twoArray = array1.concat(array2)
//   return twoArray.filter((value, index) => twoArray.indexOf(value) === index)
// } 
// console.log(noDuplicates(arr1, arr2));




// Create a function that takes in an array of mixed data types and returns the first value that is a string. HINT: look into the JavaScript .find() method.
 const allTheData = [7, null, true, 2, "yo!", false, 4, "hello!"]
// // output: "yo!"

// CREATE a function 
// INPUT a mixed data array
// FIND the first instance of a string in the array
// RETURN the string

// const stringFinder = (array) => {
// return array.find(element => typeof element === "string")
// }
// console.log(stringFinder(allTheData));








// Some Practice Problems for you! HIGHER ORDER FUNCTIONS

// you are given an array of English words. Create a function that returns an array with the words in all uppercase letters.
const wordsArray = ["bingo", "house", "mustard", "auto", "lamp"]

// Create a function 
// Input: 
// // Output: 
// const wordEnlarger = (array) => {
//   return array.map((value) => value.toUpperCase())
// }
// console.log(wordEnlarger(wordsArray));

//  A farmer has 6 chickens, 3 goats, and 2 horses. Create a function that takes in the three quantities of each animal and returns the total number of legs on the farm.
// expected output: 32

// const legCounter = (chicken, goat, horse) => {
// const chickens = 6 
// const goats = 3
// const horses = 2
// const chickenLegs= chickens *2
// const goatLegs = goats * 4
// const horseLegs = horses * 4
//   const animalLegs = chickenLegs  + goatLegs + horseLegs
// return animalLegs
// } 
// console.log(legCounter());


// Create a function that receives a number and returns a Boolean if a number is divisible by 10
//  Expected output: true

// const numberReceiver = (number) => {
//  return number % 10 === 0;
// }
// console.log(numberReceiver(10));



//  A group of friends have decided to start a secret society. The name will be the first letter of each of their names. Create a function that takes in an array of names and returns the name of the secret society.

const names = ["Lisa", "Sydney", "Jake", "Steve", "Maureen"]

// const ocCult = (array) => {
//  return array.map((value) => {
//     return value[0]
//   }).join("")
//   }
// console.log(ocCult(names));

// Expected output:  "LSJSM"

// Create a function that takes in the array and returns an array with the numbers in ascending order.




// const numsArray = [5, 42, 3, 79, 15, 36, 18]
// const arraySorter = (array) => { 
//   return array.sort((a, b) => a-b)
// }
// console.log(arraySorter(numsArray));


// Expected output: [3, 5, 15, 18, 36, 42, 79]

// Create a function that takes in a string and checks if the string is a palindrome.
const word1 = "racecar"
// Expected output: true
const word2 = "donuts"
// Expected output: false

// const palindromeChecker = (string) => {
//   let wordReversed = string.split("").reverse().join("")
// return  string === wordReversed
// }
// console.log(palindromeChecker(word1));



// Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const filterLetterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const filterLetterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// const arrayChecker = (arrayOfWords, filter) => {
//   let filter1 = filter.toUpperCase()
//   return arrayOfWords.filter((value) => value.includes(filter1) || value.includes(filter))
// }
// console.log(arrayChecker(fruitArray, filterLetterE));



// Create a function that takes in two arrays as arguments and returns one array with no duplicate values.

const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// const noDuplicateIndexes = (array1, array2) => {
// let combinedArrays = array1.concat(array2)
// return combinedArrays.filter((value, index) => combinedArrays.indexOf(value) === index )
// }
// console.log(noDuplicateIndexes(dataTypesArray1, dataTypesArray2));




// Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]
const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]
const accountTransactions3 = []
// Expected output: []


// const accumulator = (array) =>{
//   let sum = 0
//   return array.map((number) =>sum += number)
// }
// console.log(accumulator(accountTransactions1));


//Create a function that receives an array of numbers and returns an array containing only the positive numbers
const numsArray2 = [-5, 10, -3, 12, -9, 5, 90, 0, 1]
// // Expected outcome: [10, 12, 5, 90, 1]

// const onlyPostive = (array) => {
//   return array.filter((value, index) => { value[index] >= 0
//     return value >= 0
//   })
// }
// console.log(onlyPostive(numsArray2));



// Create a function that will remove the spaces found in a string
const string1 = "Hello Alpha!"
// Expected result: "HelloAlpha!"
const string2 = "The lazy fox jumps over the dog"
// Expected result: "Thelazyfoxjumpsoverthedog"


// const spaceRemover = (string) => {
//   return string.replaceAll(" ","")
// }
// console.log(spaceRemover(string1));
// console.log(spaceRemover(string2));




// Create a function that takes a string and returns the number of vowels in the string.

const string3 = "banana"
// Expected result: 3
const string4 = "I like ice cream"
// Expected result: 6

// const vowelCounter = (string) => {
//   return string.match(/[aeiou]/gi).length
// }
// console.log(vowelCounter(string3));
// console.log(vowelCounter(string4));




// 💻 Challenges OBJECTS
// Consider this variable:

const person = {
  firstName: "Arthur",
  lastName: "Dent",
  getData : function () {
    return `${this.firstName} ${this.lastName} is from ${this.homePlanet}`
  }
}
// 1. Write the code that accesses the first name of the person object.
console.log(person.firstName);



// 2. Write the code that accesses the last name of the person object.
console.log(person.lastName);

// 3. Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
person.homePlanet = "Earth"
console.log(person.homePlanet);
// 4. Update the person object with a method that logs "Arthur Dent is from planet Earth".

console.log(person.getData());


// Consider this variable:

const product = {
  name: "chair",
  price: 24.99
}
// 5. Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
const describeProduct = (product) => {
return `The produce is a ${product.name}. It costs $${product.price}`
}
console.log(describeProduct(product));

// 6. Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
const totalWithTax = (product) => {
  let tax  = product.price * .07 
  let withTax = product.price + tax
  let total = Math.round( withTax * 100) / 100
  return `$${total}`
}
console.log(totalWithTax(product));
// Consider this variable:

const lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"]
}
// 7.Write the code that accesses the ingredients property.
console.log(lunch.ingredients);

// 8.Write the code that access the third ingredient of the lunch object.
const banana = lunch.ingredients.filter(value => value === "banana")
console.log(banana);

//9. Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
const pbb = (lunch) => {
  return `The ingredients for a ${lunch.name} ${lunch.type} are ${lunch.ingredients.join(", ")}` 
}
console.log(pbb(lunch));
// 10.Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."


// Consider this variable:

const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 }
]
// 11.Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
const cat = (animals) => {
  return animals.filter(value => value.type === "cat")
}
console.log(cat(animals));
// 12. Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
const animalNames = (animals) => {
  return animals.map(value => value.name)
}
console.log(animalNames(animals));
// 13.Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
const animalAge = (animals) => {
  return animals.filter(obj => obj.age > 10).map(value => `${value.name}`)
  }
console.log(animalAge(animals));

// 14. Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
const sentenceMaker = (animals) => {
  return animals.map(value => `${value.name} is a ${value.type} and is ${value.age} years old!`)
}
console.log(sentenceMaker(animals));
// Consider this variable:

const author = {
  name: "H. G. Wells",
  genre: "science fiction"
}
//15.  Write the code that destructures the author object so that the following code snippet will run successfully:

const { name, genre } = author

console.log(`${name} is a ${genre} author`)
// // output: "H. G. Wells is a science fiction author"


// Consider this variable:

const pokeOne = {
  species: "Charmandar",
  pokemon_type: "Fire"
}

const pokeTwo = {
  species: "Magikarp",
  pokemon_type: "Water"
}

//16.  Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:
const describePokemon = (object) => {
  const { species, pokemon_type } = object
  return `${species} is a ${pokemon_type} pokemon`
}


console.log(describePokemon(pokeOne))
// // output: "Charmandar is a Fire pokemon"
// console.log(describePokemon(pokeTwo))
// // output: "Magikarp is a Water pokemon"


// Consider this variable:

const triangleDimensions = {
  base: 2,
  height: 5,
  area: function () {
    return .5 * this.base * this.height
  }
}
// 17. Modify the triangleDimensions object to have a method that returns the area of the triangle.
console.log(triangleDimensions.area());

// 18. Write the code that will update the base to be the value of 6.
triangleDimensions.base = 6
console.log(triangleDimensions.base);

// 🏔 Stretch Goals
// Consider this variable:

const learn = {
  cohorts: {
    2022: [
      "Alpha",
      "Bravo",
      "Charlie",
      "Delta",
      "Echo",
      "Foxtrot",
      "Golf",
      "Hotel"
    ],
    2023: [
      "Alpha",
      "Bravo",
      "Charlie",
      "Delta",
      "Echo",
      "Foxtrot",
      "Golf",
      "Hotel",
      "India",
      "Juliet"
    ]
  }
}
// 19. Write the code that logs the name of your cohort.

// console.log(learn.cohorts[2022][0]);
console.log(Object.values(learn.cohorts)[1] [0]);


//20.  Write the code that uses destructuring to log the name of your cohort.
// const { cohorts: { 2022: myCohorts } } = learn
// const yourCohortName = myCohorts[0]
// console.log(yourCohortName);
//  const { cohorts: {2022: { Alpha = "Alpha"} } } = learn 
// console.log(Alpha);
// 21. Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.
// output: ["2022 Alpha", "2022 Bravo", "2022 Charlie", "2022 Delta", "2022 Echo", "2022 Foxtrot", "2022 Golf", "2022 Hotel", "2023 Alpha", "2023 Bravo", "2023 Charlie", "2023 Delta", "2023 Echo", "2023 Foxtrot", "2023 Golf", "2023 Hotel", "2023 India", "2023 Juliet"]




class Coffee {
  constructor(type, cream, sugar) {
    this.type = type.toLowerCase()
    this.cream = cream
    this.sugar = sugar
  }

  coffeeProfile() {
    return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
  }

  creams() {
    if (this.cream > 1) {
      return `${this.cream} creams`
    } else {
      return `${this.cream} cream`
    }
  }

  sugars() {
    if (this.sugar > 1) {
      return `${this.sugar} sugars`
    } else {
      return `${this.sugar} sugar`
    }
  }
}

// 💻 Challenges CLASSES
// Coffee Maker: copy the given Coffee class into a text editor
//1.  Write the code that makes a black coffee object
let blackCoffee = new Coffee("black", "no", "no")

//2.  Write the code that outputs the black coffee's profile
console.log(blackCoffee.coffeeProfile());

//3.  Write the code that makes a coffee object with 1 cream and 2 sugars
let oneCreamTwoSugar = new Coffee("House Coffee", 1, 2)

// 4. Write the code that outputs the 1 cream and 2 sugars coffee profile
console.log(oneCreamTwoSugar.coffeeProfile());
// class Coffee {
//   constructor(type, cream, sugar) {
//     this.type = type.toLowerCase()
//     this.cream = cream
//     this.sugar = sugar
//   }

//   coffeeProfile() {
//     return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
//   }

//   creams() {
//     if (this.cream > 1) {
//       return `${this.cream} creams`
//     } else {
//       return `${this.cream} cream`
//     }
//   }

//   sugars() {
//     if (this.sugar > 1) {
//       return `${this.sugar} sugars`
//     } else {
//       return `${this.sugar} sugar`
//     }
//   }
// }




// Latte Maker: create a class for Latte
// 5. Write a Latte class that takes a flavor, a milk type, and a number of shots
class LatteMaker {
  constructor(latteFlavor, latteMilkType, latteEspressoShots){
    this.flavor = latteFlavor
    this. milkType = latteMilkType
    this.espressoShot = latteEspressoShots
  }
  // 6. Write a method for your Latte class that outputs the latte's profile

  latteProfile () {
    return `A ${this.flavor} latte with ${this.milkType} & ${this.espressoShot} shot of espresso`
  }
}


// 7. Write the code that makes a regular, single shot latte
let regularLatte = new LatteMaker( "plain", "Whole Milk", 1)

// 8. Log the regular, single shot latte's profile
console.log(regularLatte.latteProfile());

// 9. Write the code that makes a double shot, hazelnut latte with almond milk.
let hazelnutLatte = new LatteMaker("hazelnut", "almond milk", 2 )

//10.  Log the double shot, hazelnut latte with almond milk's profile.
console.log(hazelnutLatte.latteProfile());

// 11. Volume of a Cylinder: create a class for Cylinder
class Cylinder {
  constructor(cylinderRadius, cylinderHeight) {
    this.radius = cylinderRadius
    this. height = cylinderHeight
  }
  // 12. Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
  cylinderVolume() {
    // 13. Write the code that rounds the volume of the cylinder to four decimal places
    return (((3.14 * `${this.radius}`) ** 2) * `${this.height}`).toFixed(4)
  }
}

// 14. Write the code that creates three unique cylinder objects
let cyl1 = new Cylinder(4, 2)
let cyl2 = new Cylinder(7, 9)
let cyl3 = new Cylinder(3, 6)
console.log(cyl1.cylinderVolume());
console.log(cyl2.cylinderVolume());
console.log(cyl3.cylinderVolume());



// 💻 Challenges SPREAD OPERATORS
// Consider this function:

// const combineArrays = (arrOne, arrTwo) => {
//   return arrOne.concat(arrTwo)
// }

// console.log(combineArrays([2, 4, 2], [4, 6, 11]))
// 1. Refactor this function to use the spread operator to combine the arrays.
const combineArrays = (arrOne, arrTwo) => {
  return [...arrOne, ...arrTwo]
}

console.log(combineArrays([2, 4, 2], [4, 6, 11]))
// Consider this function:

// const combineAndFilterOdd = (arrOne, arrTwo, arrThree) => {
//   return arrOne
//     .concat(arrTwo)
//     .concat(arrThree)
//     .filter((num) => num % 2 !== 0)
// }

// console.log(combineAndFilterOdd([3, 2, 5], [5, 8, 7], [4, 5, 6]))
// 2. Refactor this function to use the spread operator to combine the array arguments.
// const combineAndFilterOdd = (arrOne, arrTwo, arrThree) => {
//   return [...arrOne, ...arrTwo, ...arrThree]
//     .filter((num) => num % 2 !== 0)
// }

// console.log(combineAndFilterOdd([3, 2, 5], [5, 8, 7], [4, 5, 6]))

// 🏔 Stretch Goals
// 3. Recall the combineAndFilterOdd() function from the previous exercise. Refactor the function to take any number of arguments.

const combineAndFilterOdd = (...arrays) => {
  return arrays
    .filter((num) => num % 2 !== 0)
}

console.log(combineAndFilterOdd([3, 2, 5], [5, 8, 7], [4, 5, 6], [5, 3, 2]))
