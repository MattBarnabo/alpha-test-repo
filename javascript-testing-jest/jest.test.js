// // // // function you are testing
// const functionName = () => {
//   return 'output'
// }


// // // // test function syntax
// describe("functionName", () => {
//   it("short description of what function should return", () => {
//     expect(functionName()).toEqual("output")
//   })
// })


// // // // function test results from terminal
// yarn run v1.22.21
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/alpha-test-repo/javascript-testing-jest/node_modules/.bin/jest
//  PASS  ./jest.test.js
//   functionName
//     ✓ returns 'output' (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.19 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.00s.


// // // // Example
// CREATE  a function called makeCoffee that returns "coffee is made"


// // // // function to be tested
// const makeCoffee = () => {
// return "coffee is made"
// }
// input: nothing
// output: "coffee is made"

// // // // test syntax
// describe("makeCoffee", () => {
//   it("returns 'coffee is made'", () => {
//     expect(makeCoffee()).toEqual("coffee is made")
//   })
// })

// // // // test results
// // yarn run v1.22.21
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/alpha-test-repo/javascript-testing-jest/node_modules/.bin/jest
//  PASS  ./jest.test.js
//   makeCoffee
//     ✓ returns 'coffee is made' (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.204 s
// Ran all test suites.
// ✨  Done in 0.75s.



// // // // Example 2

// Pseudo: Create a function called makeCoffee that takes in a coffeeType and returns `${coffeeType} is made`


// // // // // function to be tested
// const makeCoffee = (coffeeType) => {
// return `${coffeeType} is made`
// }
// input: coffeeType
// output: `${coffeeType} is made`

// // // // // test syntax
// describe("makeCoffee", () => {
//   it("returns 'coffeeType is made'", () => {
//     expect(makeCoffee("mocha")).toEqual("mocha is made")
//   })
// })


// 💻 Challenges JEST
// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
describe("areYouTired", () => {
  it("returns 'drink coffee' or 'keep working'", () => {
    expect(areYouTired("yes")).toEqual("drink coffee")
    expect(areYouTired("no")).toEqual("keep working")
  })
})
// 1. ran test to see if test failed properly
// ---> syntax error 
// 2. adds proper syntax to it statement 
// ----> ReferenceError: areYouTired is not defined - good fail
// 3. adds function to be tested
// ---> wrong expected output Expected: "keep working" Received: "drink coffee"
// 4. adds fixed syntax to functions if statement
// ----> returns passed


// Create the function that will make the test pass.
const areYouTired = (answer) => {
  if(answer === "yes"){
    return "drink coffee"
  } else if (answer === "no"){return "keep working"
} else{ return "error"
}
}


// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
describe("areYouStressed", () => {
  it("returns 'relax' or 'keeping going'", () => {
    expect(areYouStressed("yes")).toEqual("relax")
    expect(areYouStressed("no")).toEqual("keep going")
  })
})
// 1.runs test to see if test is functioning
// ----->     ReferenceError: areYouStressed is not defined // good fail
// 2. adds function to be tested
// ---->


// Create the function that will make the test pass.
const areYouStressed = (answer) => {
  if(answer === "yes"){
      return "relax"
  } else if(answer === "no"){
      return "keep going"
  } else {
      return "error"
  }
}

// Write the test for a function that returns "in budget" if a price is lower than $300.
describe("isThisInBudget", () => {
  it("returns if an item is less than or equal to 300", () => {
    expect(isThisInBudget(true)).toEqual("in budget")
  })
})

// Create the function that will make the test pass.
const isThisInBudget = (number) => {
  return number <= 300 ? "in budget" : "not in budget"
}

// Write the test for a function that takes in two numbers and returns the smaller number.
describe("whichIsSmaller", () => {
  it("returns the smaller number of 2 values", () => {
    const number1 = 5
    const number2 = 59
    expect(whichIsSmaller(number1, number2)).toEqual(`${number1} is smaller`)
  })
})
// Create the function that will make the test pass.
const whichIsSmaller = (number1, number2) => {
  if(number1 < number2) {
    return  `${number1} is smaller`
  } else if(number1 > number2) {
    return `${number2} is smaller`
  } else{ "error"}
}
// Write the test for a function that takes in one numbers and returns whether the number is odd.
describe("amIOdd", () => {
  it("returns if a number is odd", () => {
    const number = 5
    expect(amIOdd(number)).toEqual(`${number} is odd`)
  })
})
// Create the function that will make the test pass.

const amIOdd = (number) => {
  return number % 2 !== 0 ? `${number} is odd` : `${number} is even`
} 
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Create the function that will make the test pass.
describe("fruitColor")


// Write the test for a function called rick that returns "Morty".
// Create the function that will make the test pass.



// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Create the function that will make the test pass.



// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Create the function that will make the test pass.



// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Create the function that will make the test pass.



// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Create the function that will make the test pass.



// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Create the function that will make the test pass.



// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
// Create the function that will make the test pass.
