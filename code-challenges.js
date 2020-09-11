// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js
// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35;
var temp2 = 350;
var temp3 = 212;

const amIBoiling = (temperature) => {
  //check input vs boiling point
  if (temperature < 212) {
    //return statement of status re: boiling
    return `${temperature} is below boiling point`;
  } else if (temperature > 212) {
    return `${temperature} is above boiling point`;
  } else if (temperature === 212) {
    return `${temperature} is at boiling point`;
  } else {
    return 'Please give a valid temperature.';
  }
}

console.log(amIBoiling(temp1)); //expect "35 is below boiling point"
console.log(amIBoiling(temp2)); //expect "350 is above boiling point"
console.log(amIBoiling(temp3)); //expect "212 is at boiling point"

// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9];

const forTimesFiveArray = (array1) => {
  // use a for loop
  for (var i = 0; i < array1.length; i++) {
    // multiply each item in the input array by 5
    array1[i] *= 5;
  }
  // return the array
  return array1;
}

console.log(forTimesFiveArray(myNumbers1)); // expect [15, 35, 0, 30, -45]



// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2];

const mapTimesFiveArray = (array2) => {
  //multiply all numbers in the input array by 5 using map and return result
  return array2.map(value => value * 5);
}

console.log(mapTimesFiveArray(myNumbers2)); // expect [40, -35, 0, 30, 10]

// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent";
var stringWithVowels2 = "ILoveJavaScript";

const removeVowels = (string1) => {
  // remove all vowels from input string
  // return voweless string
  return string1.split("").filter(value => {
    return value.toLowerCase() !== "a" && value.toLowerCase() !== "e" &&
    value.toLowerCase() !== "i" && value.toLowerCase() !== "o" &&
    value.toLowerCase() !== "u"
  }).join("");
}

console.log(removeVowels(stringWithVowels1));// expect "HyThrLrnStdnt"
console.log(removeVowels(stringWithVowels2));// expect "LvJvScrpt"

// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string"

var notAString1 = true;
var notAString2 = 42;

const removeStringVowels = (string1) => {
  // check if string
  if (typeof string1 !== "string") {
    // inform user that input is not a string
    return `${string1} is not a string`;
  } else {
    // remove all vowels from input string
    // return voweless string
    return string1.split("").filter(value => {
      return value.toLowerCase() !== "a" && value.toLowerCase() !== "e" &&
      value.toLowerCase() !== "i" && value.toLowerCase() !== "o" &&
      value.toLowerCase() !== "u"
    }).join("");
  }
}

console.log(removeStringVowels(notAString1));//expect "true is not a string"
console.log(removeStringVowels(notAString2));//expect "42 is not a string"

// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

var toonimals = [ { name: "Itchy", animal: "mouse" }, { name: "Stimpy", animal: "cat" }, { name: "Daffy", animal: "duck" }, { name: "Scratchy", animal: "cat" }, { name: "Ren", animal: "dog" }, { name: "Felix", animal: "cat" }];

const catFilter = (array3) => {
  // return array of cats
  return array3.filter(value => {
    //filter for cats
    return value.animal === "cat";
  });
}

console.log(catFilter(toonimals));//expect [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

const allNamesNoCats = (array4) => {
  return array4.filter(value => {
    //get non-cat array
    return value.animal !== "cat"
  }).map(value => {
    //get non-cat names
    return value.name;
    //join them, ready to send
  }).join(" ");
}

console.log(allNamesNoCats(toonimals));//expect "Itchy" "Daffy" "Ren"
