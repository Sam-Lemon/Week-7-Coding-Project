//All questions should be printed to your Browser's console using console.log()


////////////////////////////////////////////////////////////////////////////////////////////////////
/*
1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
    a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
            - Do not use numbers to reference the last element, find it programmatically.
            - ages[7] - ages[0] is not allowed!
    b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
    c. Use a loop to iterate through the array and calculate the average age.
*/
// Step 1
console.log("Problem 1");
let ages = [3, 9, 23, 64, 2, 8, 28, 93]; //create the array
console.log(ages);
/*
ages.push(100); //Part B: uncomment
console.log(ages);*/

//Part A:
let x = ages.slice(0, 1); //stores the first element of an array. index 0, only taking 1 element
console.log("x = " + x);
let y = ages[ages.length - 1]; //stores the last element of an array. 
console.log("y = " + y);
//these two methods (idk if that's the right word) store the values, not return them, this makes sure that they stay in the array and are not pulled out.

function subElements(x, y) {
    return y - x; //returns the value remaining 
} //function that takes two parameters (x, y) and returns the value of y - x
console.log("part a: " + subElements(x, y)); // console logged the function

//Part C:
let sum = 0;  
for (let i = 0; i < ages.length; i++) { 
    sum += ages[i];
}
let average = sum / ages.length;
console.log("part c: " + average); 
////////////////////////////////////////////////////////////////////////////////////////////////////
/*
2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
    a. Use a loop to iterate through the array and calculate the average number of letters per name.
    b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
*/
console.log('Problem 2');
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];


////////////////////////////////////////////////////////////////////////////////////////////////////
//3. How do you access the last element of any array?
//array[array.length -1]

////////////////////////////////////////////////////////////////////////////////////////////////////
//4. How do you access the first element of any array?
//array[0]; 
//array.at(0);
//array.slice(0, 1) //this extracts the 0 index element (first element) and only that one
//array.shift() //this removes the first element and changes the length of the array

////////////////////////////////////////////////////////////////////////////////////////////////////
/*5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array 
and add the length of each name to the nameLengths array.
For example:

let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array*/

console.log("Problem 5");


////////////////////////////////////////////////////////////////////////////////////////////////////
//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
console.log("Problem 6");




////////////////////////////////////////////////////////////////////////////////////////////////////
/*7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
(i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').*/
console.log("Problem 7");



////////////////////////////////////////////////////////////////////////////////////////////////////
/*8. Write a function that takes two parameters, firstName and lastName, and returns a full name. 
The full name should be the first and the last name separated by a space.*/
console.log("Problem 8");
function fullName(firstName, lastName) {
    console.log(firstName + " " + lastName);
}
fullName ('Sam', 'Lemon'); //returns Sam Lemon
//long version- two parameters and action within curly braces, need to add in the space between names and pass in names separately 


const createFullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(createFullName('Sam', 'Lemon')); //returns Sam Lemon
//arrow function, shorter version of a function, still two parameters, used template literals and can call names within the console.log

////////////////////////////////////////////////////////////////////////////////////////////////////
//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
console.log("Problem 9");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; //create the array

const sumNumbers = numbers.reduce((acc, cur) => acc + cur, 0); //reduce moves through the array from left to right
    console.log(sumNumbers); 
if (sumNumbers > 100) {
    console.log('true');
} else {
    console.log('false');
}

////////////////////////////////////////////////////////////////////////////////////////////////////
//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
console.log("Problem 10");
const probTenNumbers = [45, 89, 3, 88, 69, 5, 3, 78, 22, 69, 120];

const sumProbTenNumbers = probTenNumbers.reduce((acc, cur) => acc + cur, 0);
    console.log(sumProbTenNumbers / probTenNumbers.length);

////////////////////////////////////////////////////////////////////////////////////////////////////
//11. Write a function that takes two arrays of numbers and returns true if the average of the elements 
//in the first array is greater than the average of the elements in the second array.
console.log("Problem 11");

const oneArray = [10, 11, 12, 13, 14, 15]; //first array

const sumOneArray = oneArray.reduceRight((acc, cur) => acc + cur, 0); //reduce.right moves through the array from right to left
    console.log(sumOneArray); //sum of the array, 

const averageOneArray = (sumOneArray / oneArray.length);
console.log(averageOneArray);


const twoArray = [20, 21, 22, 23, 24, 25]; //second array

const sumTwoArray = twoArray.reduceRight((acc, cur) => acc + cur, 0);
    console.log(sumTwoArray);

const averageTwoArray = (sumTwoArray / twoArray.length);
console.log(averageTwoArray); //average should be 22.5

if (averageOneArray > averageTwoArray) {
    console.log('true');
} else {
    console.log('false');
}

////////////////////////////////////////////////////////////////////////////////////////////////////
//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside 
//and if moneyInPocket is greater than 10.50.
console.log("Problem 12");



////////////////////////////////////////////////////////////////////////////////////////////////////
//13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
console.log("Problem 13");






