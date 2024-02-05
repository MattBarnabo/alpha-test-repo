// // -------------------------------------------Intro practice questions----------------------------------------------------

// // ----------------------------------------------💻 Challenges------------------------------------------------------------
// // ----Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// // Write the code that will log the output of 34 added to 71.
//   console.log(34 + 71);
// // Write the code that will log the output of 67 subtracted from 123.
//   console.log(123 - 67);
// // Write the code that will log the output of 56 multiplied by 23.
//   console.log(56 * 23);
// // Write the code that will log the output of 45 divided by 5.
//   console.log(45 / 5);
// // Write the code that will log the output of 5 to the power of 7.
//   console.log(5 ** 7);
// // Write the code that will log the whole number remainder of 33 divided by 6.
//   console.log(33 % 6);
// // Write the code that will log the length of a string containing your name.
//   let myName = "Matt Barnabo"
//   console.log(myName.length);
// // Write the code that will log whether your string includes the letter "e"?
// 	console.log(myName.includes("e"));
// // Write the code that will log the character at the first index of the string.
//   console.log(myName.charAt(0)); 
// // Write the code that will log the string in all uppercase letters.
//   console.log(myName.toUpperCase());

// // --------------------------------------Consider the variables:----------------------------------------------------------

// const theQuestion = "life, the universe, and everything"
// const theAnswer = 42
// // Write the code that will log theAnswer divided by 2.
//   console.log(theAnswer / 2);
// // Write the code that will log the whole number remainder of theAnswer when divided by 3.
//   console.log(theAnswer % 3);
// // Write the code that will log the length of theQuestion.
//   console.log(theQuestion.length);
// // Write the code that will log the length of theQuestion divided by 2.
//   console.log(theQuestion.length / 2);
// // Write the code that will log the length of theQuestion added to theAnswer.
//   let theQA = theQuestion + theAnswer
//   console.log(theQA.length);
// // Write the code that will log the index of the character "f" in the theQuestion.
//   console.log(theQuestion.indexOf("f"));
// // Write the code that will log the index of the second comma in the theQuestion.
//   console.log(theQuestion.lastIndexOf(","));
// // Write the code that will log the concatenation of the two variables.
//   console.log(theQuestion + "" + theAnswer);
// // Write the code that will log the character "l" from theQuestion.
//   console.log(theQuestion.charAt(0));
// // Write the code that will extract "the universe" from theQuestion.
//   console.log(theQuestion.slice(6, 19));
// // Write the code that will extract "everything" from theQuestion.
//   console.log(theQuestion.slice(24, 34));
// // Write the code that will log the last character of theQuestion without manually counting the number of characters.
// 	console.log(theQuestion.charAt(theQuestion.length-1));


// // -----------------------------------Conditionals practice questions-----------------------------------------------------

// // -------------------------------------------💻 Challenges---------------------------------------------------------------
// // ----Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// //-------------------- Write the code that will log true or false for the following:--------------------------------------

// // Is 34 divided by 3 greater than 67 divided by 2?
//   console.log(34/3>67/2);
// // Does 5 evaluate to the same as "5"?
//   console.log(5 == "5");
// // Does 5 strictly equal "5"?
//   console.log(5 === "5");
// // Does !3 strictly equal 3?
//   console.log(!3 === 3);
// // Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
//   console.log("LEARN".length === 5 && "Student".length === 7);
// // Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
//   console.log("LEARN".length === 5 || "Student".length === 10);
// // Does "LEARN" contain the subset "RN"?
// 	console.log("LEARN".includes("RN"));
// // Does "LEARN" contain the subset "rn"?
//   console.log("LEARN".includes("rn"));
// // Does "LEARN"[0] strictly equal "l"?
//   console.log("LEARN"[0] === "l");
// //Modify the code from the previous question to return true.
//   console.log("LEARN"[0] === "L");


// // -----Write a conditional statement for the following prompts. Make sure you try different options and change the variables to ensure properly working code.

// // Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
//     let item = 100
//     if(item <= 100){
//         console.log("in budget");
//     }
// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
//     let hunger = true
//     if(hunger = true){
//         console.log("eat food");
//     	} else {
//         console.log("keep coding");
//     }
// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
//     let trafficLight = "green"
//     if(trafficLight === "green"){
//         console.log("go");
//     	} else if (trafficLight === "yellow"){
//         console.log("slow down");
//     	}else if (trafficLight === "red"){
//         console.log("stop");
//     }
// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
//     let numOne = 30
//     let numTwo = 70
//     if (numOne > numTwo){
//         console.log(numOne);
//     	} else if (numOne < numTwo){
//         console.log(numTwo);
//     	}else if (numOne === numTwo){
//         console.log("the numbers are the same.");
//     }
// // Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
//------------------------------------------Stretch Goals-------------------------------------------------------------

// -------Write a conditional statement for the following prompts.

// // Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
//   let grade = 100
//   if(grade === 100){
//         console.log("perfect score");
//     } else if ( grade === 80){
//         console.log("B");
//     } else if ( grade === 70){
//   	    console.log("C");
//     }else if ( grade === 60){
//         console.log("D");
//     }  else if ( grade === 0){
//         console.log("no grade available");
//    	} else { 
//         console.log("F");
//   }
// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.
//   let mystery= 50
//   console.log(typeof(mystery));
// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.
// 	const passWord = "thisismypassword!"
// 	if(passWord.length >= 12 && passWord.includes("!")){
//     	console.log("That is a mighty strong password!");
// 		} else if ( passWord.length >= 8 || passWord.includes("!")){
//     	console.log("That password is strong enough");
// 		} else {console.log("That is not a valid password.");
// 	};


// -------------------------------------------Arrays practice questions---------------------------------------------------
// ------------------------------------------------💻 Challenges----------------------------------------------------------
// ----Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// ---------------------------------------------Consider the variable:----------------------------------------------------

// var groceryList = ["chips", "dip", "cookies"]
// Write the code that will add "soda" to the end of the original array.
//   groceryList.push("soda");
//   console.log(groceryList);
// Write the code that will add "granola" to the end of the array without altering the original array.
//   let groceryListTwo = groceryList.concat("granola");
//   console.log(groceryListTwo);
// Write the code that will return a subset of the array containing only "chips" and "dip".
// 	console.log(groceryList.slice(0, 2));
// Write the code that will add "beans" to the "chips" and "dip" array.
// let newList = groceryList.slice(0, 2).concat("beans")
// console.log(newList);
// ----------------------------------------------Consider the variable:--------------------------

// var numbers = [2, 4, 6, 8, 10]
// Write the code that will add the number 0 to the beginning of the array.
// 	numbers.unshift(0)
// 	console.log(numbers);
// Write the code that will add the number 12 to the end of the array.
// 	numbers.push(12)
// 	console.log(numbers);
// Write the code that will remove the first number from the array.
// 	numbers.shift()
// 	console.log(numbers);
// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
// 	let zero = [0]
// 	console.log(zero.concat(numbers));


//------------------------------------------Consider the variable:-------------------------------

// var numSet = [2, 13, 6, 8, 4, 2]
// // Write the code that finds the index of the first appearance of the number 2.
// 	console.log(numSet.indexOf(2));
// // Write the code that finds the index of the last appearance of the number 2.
// 	console.log(numSet.lastIndexOf(2));
// // Write the code that returns the number at the third index.
// 	console.log(numSet.slice(3,4));
//------------------------------------------ Consider the variable:------------------------------

// var characters = ["y", "a", "r", "r", "a"]
// Write the code that brings all the letters in the characters array together into a string.
// 	console.log(characters.join(""));
// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
// 	let charsReversed = characters.reverse()
// 	console.log(charsReversed);
// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
// 	console.log(charsReversed.join("*"));
// Write the code that brings all the letters in the charsReversed array together into a string without separators.
// 	console.log(charsReversed.join(""));
// Create two arrays consisting of three first names of your cohort members in each array.
// 	let groupOne =["judas", "ryan", "matt"]
// 	let groupTwo =["mark", "seth", "morgan"]
// Write the code that sorts the names in alphabetical order.
// 	console.log(groupOne.sort(), groupTwo.sort());
// Write the code that sorts the names in reverse alphabetical order.
// 	console.log(groupOne.sort().reverse(), groupTwo.sort().reverse());
// Write the code that sorts all the names in alphabetical order in a single array.

// -----------------------------Consider the variables:------------------------------------------

// var numbers = [42, 221, 71, 7, 18, 87]
// var oddIndexes = []
// // Write the code that logs the values from the numbers array that are at odd indexes.


// // Write the code that adds the values from odd indexes into the oddIndexes array.


//-----------------------------------loops practice questions------------------------------------


//------------------------------------💻 Challenges-----------------------------------------------

// // // Create a for loop that logs each number from 1 - 20.
// // for(let i=0; i<=20; i++){
// // 	console.log(i);
// }
// Create a for loop that logs every other number from 1 - 20.
//  for(let i=0; i<=20; i +=2){
//  	console.log(i);
//  }
// Create a for loop that logs the result of each number from 1 - 20 tripled.
//  for(let i=0; i<=20; i++){
//  	console.log(i *3);
//  }
// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
//  for(let i=0; i<=20; i++){
//  	if(i % 2 ===0){
// 		console.log(i);
//  	} else {
//  		console.log("ODD");
//  	}
//  }
//  Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc
//  ---------------------------------------Consider this variable:---------------------------------------------------------

// const nums = [3, 57, -9, 20, 67]
// // Create the code that will log the largest number from the array.
// let max = 0
// for(let i=0; i< nums.length; i++){
// 	if (max<nums[i]){
// 		max = nums[i]
// 	} 
// } console.log(max);
// // Create the code that will log the smallest number from the array.
// let min = 0
// for(let i=0; i< nums.length; i++){
// 	if (min > nums[i]){
// 		min = nums[i]
// 	}
// } console.log(min);
// // Create the code that will log the remainder of each number when divided by 2.
// for(let i=0; i<nums.length; i++){
// 	console.log(nums[i] % 2);
// }
// Expected output: 1, 1, -1, 0, 1
// -----------------------------------------------Consider this variable:-------------------------------------------------

// const myString = "learn student beth seth"
// Create the code that will log the number of times the letter "e" occurs in the string.
// const counter = () =>{
// 	let count = 0
// let array = myString.split("")
// 	for(let i=0; i<myString.length; i++){
// 		if(myString[i].includes("e") === true){
// 			count++


	 
// 		}
// 	}console.log(count)

// Create the code that will log every other character in the string.
// for(let i=1; i<array.length; i +=2){
// 	console.log(array[i]);
// }


// -----------------------------------------------🏔 Stretch Goals--------------------------------------------------------
// Create the code that iterates from 5 to 15. For each iteration log if the current number is odd or even.
// Expected output: "5 is odd" "6 is even" "7 is odd" ...etc
// for(i=0; i<=15; i++){
// 	if (i %2 === 0){
// 	console.log(i, "is even");
// } else {console.log(i,"is odd");
// }
// }
// Fizz Buzz: Create the code that will iterate from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz.
// Expected output: 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc
// const fizzbuzz = (numbers) => {

// for(i=0; i<=100; i++){
// if( [i] % 3 === 0 && [i] % 5 === 0){
// 	console.log("fizzbuzz");
// } else if ([i] % 5 === 0){
// 	console.log("buzz");
// } else if([i] % 3 === 0){
// 	console.log("fizz");
// }else {
// 	console.log(i);
// }
// }


// }

// --------------------------------------------------------------------------------------------------------------------------------

// Function practice questions

// 💻 Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// Write a function named marco that returns "polo".
const marco = () => {
	return "polo"
}
console.log(marco());
// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (name) => {
	return `Welcome, ${name}!`
}
console.log(greeting("Matt"));
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (num1) => {
	if(num1 % 2 === 0){
		return "is even"
		} else {
		return "is odd" 
		}
}
console.log(oddOrEven(4));
// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (num1, num2) => {
	return num1 * num2
}
console.log(multiply(5, 10));
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (num1, num2) => {
	if(num1 % num2 === 0){
			return num1 + " is evenly divisible by " + num2
		} else {
			return num1 + " is not evenly divisible by " + num2
	}
}
console.log(divisibleBy(7, 2));
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
const assignGrade = (numScore) => {
if (numScore >= 97) {
		return "A+"
	} else if (numScore >=94){
			return "A"
	} else if (numScore >=90){
			return "A-"
	} else if(numScore >= 87) {
			return "B+"
	} else if (numScore >=84){
			return "B"
	} else if (numScore >=80){
			return "B-"
	} else if (numScore >= 77) {
			return "C+"
	} else if (numScore >=74){
			return "C"
	} else if (numScore >=70){
			return "C-"
	} else if (numScore >= 67) {
		return "D+"
	} else if (numScore >=64){
		return "D"
	} else if (numScore >=60){
		return "D-"
	} else {
			return "F"
	}
}
console.log(assignGrade(67));
// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
const isLonger = (name1, name2) => {
if(name1.length > name2.length){
		return name1
	} else if (name1.length < name2.length){
		return name2
	} else{
		return name1 + " is the same length as " + name2
	}
}
console.log(isLonger("Matthew", "Jeff"));
 // Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
 const greatNum = (num1, num2)=> {
		if (num1 > num2) {
			return num1
		} else if (num1 < num2){
			return num2
		} else { 
			return num1 + " and " + num2 + " are equal!"
		}
 }
console.log(greatNum(8, 8));
// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
const yelling = (string1) => {
	return string1.toUpperCase()

}
console.log(yelling("hello"));
// 🏔 Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.


// The Pluralizer

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
// pluralizer(5, "cat")
// // output: "5 cats"

// pluralizer(1, "dog")
// // output: "1 dog"

// pluralizer(9, "dog")
// // output: "9 dogs"

// pluralizer(1, "people")
// // output: "1 person"

// pluralizer(3, "people")
// // output: "3 people"