//All questions should be printed to your Browser's console using console.log()

/*
1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
    a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
            - Do not use numbers to reference the last element, find it programmatically.
            - ages[7] - ages[0] is not allowed!
    b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
    c. Use a loop to iterate through the array and calculate the average age.
*/

// Step 1
console.log("Step 1");
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

//Part A:
let x = ages.slice(0, 1); //stores the first element of an array. index 0, only taking 1 element
console.log("x = " + x);
let y = ages[ages.length - 1]; //stores the last element of an array
console.log("y = " + y);
//these two methods (idk if that's the right word) store the values, not return them.
//this makes sure that they stay in the array and are not pulled out.

function subElements(x, y) {
    return y - x; //stores the value remaining 
} //create function to do the subtraction. parameters x and y, return to give a value
console.log("Part A: " + subElements(x, y)); // console logged the function

ages.push(45); //adds the new element to the end of the array
console.log(ages);

console.log(subElements(x, y));



/*
let x = ages.shift(); //pulls the first element of the array
let y = ages.pop(); //pulls the last element of the array
function subElements(x, y) {
    return y - x;
} //create function to do the subtraction. parameters x and y, return to give a value
console.log("Step a: " + subElements(x, y)); // console logged the function
*/

//Part B: 

//ages.push(45); //pushes a new element into the last position of the array

/*
ages.push(45);
console.log(ages);
let x = ages.shift();
let y = ages.pop();
function subElements(x, y) {
    return y - x;
}
console.log("Step b: " + subElements(x, y));
*/


//Part C:
/*
let sum = 0;  //I don't know why sum needs to equal 0
for (let i = 0; i < ages.length; i++) { 
    sum += ages[i];
}
let average = sum / ages.length;
console.log("Step c: " + average); 


/*
2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
    a. Use a loop to iterate through the array and calculate the average number of letters per name.
    b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
*/
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
    



//3. How do you access the last element of any array?
/*
Array.length - 1
ex: console.log(winningLotteryNums[winningLotteryNums.length - 1])
*/

//4. How do you access the first element of any array?
/*
Array.shift()
ex: let t = array.shift();
*/

/*5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array 
and add the length of each name to the nameLengths array.
For example:

let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array*/



//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

/*7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
(i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').*/

/*8. Write a function that takes two parameters, firstName and lastName, and returns a full name. 
The full name should be the first and the last name separated by a space.*/



//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

//13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.








