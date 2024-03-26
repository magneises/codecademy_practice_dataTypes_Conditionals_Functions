// Code Challenge 1
/*
Create a function colorMessage() that takes 2 string arguments, favoriteColor and shirtColor.

If the value of favoriteColor is the same as the value of shirtColor return the string 'The shirt is your favorite color!'.

If not, return the string 'That is a nice color.'

Feel free to test your code under the function definition.
*/

/*
// Using else if
const colorMessage = (favoriteColor, shirtColor) => {
  if (favoriteColor === shirtColor) {
    return 'The shirt is your favorite color!';
  } else {
    return 'That is a nice color.';
  }
};
*/

// Using Ternary operator 
const colorMessage = (favoriteColor, shirtColor) => 
favoriteColor === shirtColor ? 'The shirt is your favorite color!' : 'That is a nice color.';

//console.log(colorMessage('blue', 'blue'))




// Code Challenge 2
/*
Create a function isEven() that takes a number as its only parameter. The function should return true if the number is even and false if the number is odd.
*/
const isEven = number => {
  return number % 2 === 0;
}

//console.log(isEven(1))



// Code Challenge 3
/*
Create a function numberDigits() that takes the variable x as its only parameter.

If the variable x is between 0 and 9, return the string 'One digit: N', where N is the value of x. For example, numberDigits(5) would return:

'One digit: 5'

If the variable x is between 10 and 99, return the string 'Two digits: N', where N is the value of x. For example, numberDigits(12) would output:

'Two digits: 12'

Any other value of x, including negative numbers, return the string 'The number is: N', where N is the value of x. For example, numberDigits(-202) would output:

'The number is: -202'

Feel free to test out your code below the function definition.
*/
const numberDigits = number => {
  if (number > -1 && number < 10) {
    return `One digit: ${number}`;
  } else if (number > 9 && number < 100) {
    return `Two digits: ${number}`;
  } else {
    return `The number is: ${number}`;
  }
};

//console.log(numberDigits(55));

















