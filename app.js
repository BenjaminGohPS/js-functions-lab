/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
};

console.log("Exercise 1 Result:", maxOfTwoNumbers(3, 9));

/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

const isAdult = (age) => {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
};

console.log("Exercise 2 Result:", isAdult(21));

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

const isCharAVowel = (vowel) => {
 const v = vowel.toLowerCase();
  if (v === "a" || v === "e" || v === "i" || v === "o" || v === "u") {
    return true;
  } else {
    return false;
  }
};

console.log("Exercise 3 Result:", isCharAVowel("a"));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

const generateEmail = (name, domain) => {
  return `${name}@${domain}`;
};

console.log("Exercise 4 Result:", generateEmail("johnsmith", "example.com"));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

const greetUser = (name, time) => {
  return `Good ${time}, ${name}!`;
};

console.log("Exercise 5 Result:", greetUser("Sam", "morning"));

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

/*
list of scenerios

in order for a to be chosen:
a >= b, a >= c

in order for b to be chosen:
b >= a, b >= c

in order for c to be chosen:
c >= a, c >= b

*/

const maxOfThree = (a, b, c) => {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
};

console.log("Exercise 6 Result:", maxOfThree(5, 10, 8));

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

const calculateTip = (bill, tip) => {
  const amtTip = bill * (Math.round(tip) / 100);
  return amtTip;
};

console.log("Exercise 7 Result:", calculateTip(50, 20));

/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

// formula for  °F = (9/5) * °C+32
// formual for  °C = (°F-32) * (5/9)

const convertTemperature = (temp, symbol) => {
  const s = symbol.toUpperCase();
  if (s === "C") {
    return (9 / 5) * temp + 32;
  } else if (s === "F") {
    return ((temp - 32) * 5) / 9;
  }
};

console.log("Exercise 8 Result:", convertTemperature(32, "C"));

/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

const basicCalculator = (x, y, operator) => {
  const o = operator.toLowerCase();
  switch (o) {
    case "add":
      return x + y;
      break;
    case "subtract":
      return x - y;
      break;
    case "multiply":
      return x * y;
      break;
    case "divide":
      return x / y;
      break;
    default:
      return "Please key in values";
  }
};

console.log("Exercise 9 Result:", basicCalculator(10, 5, "subtract"));

/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/

const calculateGrade = (score) => {
  if (score >= 90) {
    return `Your grade is A`;
  } else if (score >= 80) {
    return `Your grade is B`;
  } else if (score >= 70) {
    return `Your grade is C`;
  } else if (score >= 60) {
    return `Your grade is D`;
  } else {
    return `Your grade is F`;
  }
};

console.log("Exercise 10 Result:", calculateGrade(85));

/*
Exercise 11: createUsername()

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre13'.

Complete the exercise in the space below:
*/

/* const text = "samantha".substr(0,3)
console.log(text);; */
/*
the last part is to return
name1.length
name2.length
*/

const createUsername = (name1, name2) => {
  const n1 = name1.substr(0, 3);
  const n2 = name2.substr(0, 3);

  const n1Length = name1.length;
  const n2Length = name2.length;
  const nameLength = n1Length + n2Length;

  return `Your Username is: ${n1}${n2}${nameLength}`;
};

console.log("Exercise 11 Result:", createUsername("Samantha", "Green"));

/*
Exercise 12: numArgs()

Challenge yourself with numArgs. 
This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
*/

function numArgs(...arguments) {
  return arguments.length;
}

const numArgs2 = (...arguments) => {
  return arguments.length;
};

console.log("Exercise 12 Result:", numArgs(1, 2, 3, 4));
console.log("Exercise 12 Result:", numArgs2(1, 2, 3, 4));
