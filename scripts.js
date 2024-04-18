//All questions should be printed to your Browser's console using console.log()


////////////////////////////////////////////////////////////////////////////////////////////////////
/*1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
    a. Programmatically subtract the value of the first element in the array 
       from the value in the last element of the array.
            - Do not use numbers to reference the last element, find it programmatically.
            - ages[7] - ages[0] is not allowed!
    b. Add a new age to your array and repeat the step above to ensure it is dynamic. 
       (works for arrays of different lengths).
    c. Use a loop to iterate through the array and calculate the average age.*/
// Step 1
console.log("Problem 1");
const ages = [3, 9, 23, 64, 2, 8, 28, 93]; //create the array
console.log(ages);

//ages.push(100); //Part B: uncomment
//console.log(ages);

//Part A:
let x = ages.slice(0, 1); //stores the first element of an array. index 0, only taking 1 element
console.log("first = " + x);
let y = ages[ages.length - 1]; //stores the last element of an array. 
console.log("last = " + y);
//these two methods store the values, not return them, this makes sure 
//that they stay in the array and are not pulled out.

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
/*2. Create an array called names that contains the following values: 
        'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
    a. Use a loop to iterate through the array and calculate the average number of letters per name.
    b. Use a loop to iterate through the array again and concatenate all the names together, 
    separated by spaces.*/
console.log('Problem 2');
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);

//part a
let elementLengths = [];            //created a new array to put the element lengths in
for (const element of names) {
    elementLengths.push(element.length);    //pushed to the new array the element lengths
}
console.log(elementLengths);    

let sumN = 0;                      //calculates the sum of all the lengths               
for (let i = 0; i < names.length; i++) {
    sumN += elementLengths[i];      
}
console.log(sumN);
console.log('part a: ' + sumN / names.length);  //calculates the average

/*
const lengthOfNames = names.map((x) => x.length);  //created another array using map to take x and log it's length
    console.log(lengthOfNames);       //this array has all the lengths for each element in the names array

const sumNameLengths = lengthOfNames.reduce((acc, cur) => acc + cur, 0);  //sum of all elements in nameLengths array
    console.log(sumNameLengths);

const avgNameLengths = (sumNameLengths / names.length);
    console.log('part a: ' + avgNameLengths);
*/

//part b
if (names.length > 0) {
    console.log('part b: ' + names.join(' ')); //used the join method, added ' ' to get the space between names
}

////////////////////////////////////////////////////////////////////////////////////////////////////
/*3. How do you access the last element of any array?*/
//array[array.length -1] because the length starts with the index[0] but considers it 1.

////////////////////////////////////////////////////////////////////////////////////////////////////
/*4. How do you access the first element of any array?*/
//array[0]; 
//array.at(0);
//array.slice(0, 1) //this extracts the 0 index element (first element) and only that one
//array.shift() //this removes the first element and changes the length of the array

////////////////////////////////////////////////////////////////////////////////////////////////////
/*5. Create a new array called nameLengths. Write a loop to iterate over the previously created 
names array and add the length of each name to the nameLengths array.
For example:
let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array*/
console.log("Problem 5");
let nameLengths = [];            //created a new array to put the element lengths in
for (const element of names) {
    nameLengths.push(element.length);    //pushed to the new array the element lengths
}
console.log(nameLengths);    

////////////////////////////////////////////////////////////////////////////////////////////////////
/*6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements 
in the array.*/
console.log("Problem 6");
let sumL = 0;                                     
for (let i = 0; i < nameLengths.length; i++) {
    sumL += nameLengths[i];      
}
console.log(sumL);

////////////////////////////////////////////////////////////////////////////////////////////////////
/*7. Write a function that takes two parameters, word and n, as arguments and returns the word 
     concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, 
     I would expect the function to return 'HelloHelloHello').*/
console.log("Problem 7");
function sayHi(word, n) {
    if (n > 0) {                        //making sure n = a number larger than 0
        console.log(word.repeat(n)) ;   //console logging function using repeat method
    }
}
sayHi('Hello', 3);          //values passed through function
sayHi('Ciao', 5);


////////////////////////////////////////////////////////////////////////////////////////////////////
/*8. Write a function that takes two parameters, firstName and lastName, and returns a full name. 
The full name should be the first and the last name separated by a space.*/
console.log("Problem 8");
function fullName(firstName, lastName) {
    console.log(firstName + " " + lastName);
}
fullName ('Sam', 'Lemon'); //returns Sam Lemon
//long version- two parameters and action within curly braces, 
//need to add in the space between names and pass in names separately 

const createFullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(createFullName('Sam', 'Lemon')); //returns Sam Lemon
//arrow function, shorter version of a function, still two parameters, used template literals 
//and can call names within the console.log

////////////////////////////////////////////////////////////////////////////////////////////////////
/*9. Write a function that takes an array of numbers and returns true if the sum of all the numbers 
in the array is greater than 100.*/
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
/*10. Write a function that takes an array of numbers and returns the average of all the elements 
in the array.*/
console.log("Problem 10");
const probTenNumbers = [45, 89, 3, 88, 69, 5, 3, 78, 22, 69, 120];

const sumProbTenNumbers = probTenNumbers.reduce((acc, cur) => acc + cur, 0); //reduce moves through array from left to right
    console.log(sumProbTenNumbers / probTenNumbers.length);

////////////////////////////////////////////////////////////////////////////////////////////////////
/*11. Write a function that takes two arrays of numbers and returns true if the average of the elements 
in the first array is greater than the average of the elements in the second array. */
console.log("Problem 11");

const oneArray = [10, 11, 12, 13, 14, 15]; //first array

const sumOneArray = oneArray.reduceRight((acc, cur) => acc + cur, 0); //reduce.right moves through the array from right to left
    console.log(sumOneArray); //sum of the array, 
const averageOneArray = (sumOneArray / oneArray.length);
    console.log(averageOneArray);  //average of the array


const twoArray = [20, 21, 22, 23, 24, 25]; //second array

const sumTwoArray = twoArray.reduceRight((acc, cur) => acc + cur, 0);
    console.log(sumTwoArray);  //sum of the array
const averageTwoArray = (sumTwoArray / twoArray.length);
    console.log(averageTwoArray); //average of the array

if (averageOneArray > averageTwoArray) {  //used a comparison operator to determine if the first array's average is larger
    console.log('true');
} else {
    console.log('false');
}

////////////////////////////////////////////////////////////////////////////////////////////////////
/*12. Write a function called willBuyDrink that takes a boolean isHotOutside, 
and a number moneyInPocket, and returns true if it is hot outside 
and if moneyInPocket is greater than 10.50.*/
console.log("Problem 12");

function willBuyDrink (isHotOutside, moneyInPocket) {       
    if(isHotOutside === true && moneyInPocket > 10.50) {
        console.log('true');
    } else {
        console.log('false');
    }
}

willBuyDrink(true, 20);  //returns true
willBuyDrink(true, 8);   //returns false because moneyInPocket is less than 10.50
willBuyDrink(false, 11); //returns false because isHotOutside is false


////////////////////////////////////////////////////////////////////////////////////////////////////
/*13. Create a function of your own that solves a problem. 
In comments, write what the function does and why you created it.*/
console.log("Problem 13");

/*Re-shelve the library books. Create a function that determines which section the library
book needs to be returned to using the Dewey Decimal System. This would help efficiency at
the library.*/

function returnBook (num) {
        if (num > 0 && num < 99) {
            console.log("Computer Science");
        } else if (num >= 100 && num < 199) {
            console.log("Philosophy and Psychology");
        } else if (num >= 200 && num < 299) {
            console.log("Religion");
        } else if (num >= 300 && num < 399) {
            console.log("Social Sciences");
        } else if (num >= 400 && num < 499) {
            console.log("Language");
        } else if (num >= 500 && num < 599) {
            console.log("Pure Science");
        } else if (num >= 600 && num < 699) {
            console.log("Technology"); 
        } else if (num >= 700 && num < 799) {
            console.log("Arts and recreation"); 
        } else if (num >= 800 && num < 899) {
            console.log("Literature"); 
        } else if (num >= 900 && num < 999) {
            console.log("History and geography"); 
        } 
    }

returnBook(5.36);
returnBook(125.65);
returnBook(584.63);
returnBook(989.23);
returnBook(421.51);
returnBook(735.64);
returnBook(253.66);
returnBook(654.21);
returnBook(333.44);


