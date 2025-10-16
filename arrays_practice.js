// JavaScript Arrays 
// Q1. What is an array in JavaScript? 
// Search online and write your own short definition. 
// Give three real-life examples of data that could be stored in arrays. 
An array in JavaScript is a collection of ordered elements that can store multiple values in a single variable. These elements can be of any data type, and each element has a numeric index starting from 0.

Three real-life examples of data stored in arrays:  

List of student names in a class
The days of the week
A collection of favorite movies

// Q2. How do you create an array?
1. Using array literal notation
      const cars = ["Saab", "Volvo", "BMW"];

 2. Using the Array constructor
const cars = [
  "Saab",
  "Volvo",
  "BMW"
];
3. Creating an empty array and then adding elements
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

// Q3. What data types can you store inside an array?
You can store various data types inside an array, including:
- Numbers (e.g., 1, 2, 3)
- Strings (e.g., "hello", "world")
- Booleans (e.g., true, false)
- Objects (e.g., {name: "Alice", age: 25})
- Arrays (e.g., [1, 2, 3])
- Null and undefined

// Q4. What is the difference between an array and a single variable? Explain in your own words and give one code example to support your answer. 

Single variable: Stores only one piece of data, like a number, string, or object.
Array: Stores multiple data items, like a list, and each item can be accessed individually using its position (index).
// Single variable
let age = 25;

// Array variable
let colors = ['red', 'blue', 'green'];

console.log(age);        // Output: 25
console.log(colors[0]);  // Output: 'red' (first element in the array)
// Q5. How do you access an element in an array? 
//  How do you change the value of an element in an array?
You access an element in an array using its index.
  For example, to access the first element of an array named 'fruits', you would use fruits[0].
  const fruits = ['apple', 'banana', 'orange'];

// Access the first element
console.log(fruits[0]); // Output: 'apple'

// Access the second element
console.log(fruits[1]); // Output: 'banana'

// Access the third element
console.log(fruits[2]); // Output: 'orange'

To change the value of an element in an array, you can assign a new value to the specific index.
 For example, to change the first element of the 'fruits' array to "banana", you would use fruits[0] = "banana".
const colors = ['red', 'green', 'blue'];

// Change the second element (index 1) to 'yellow'
colors[1] = 'yellow';

console.log(colors); // Output: ['red', 'yellow', 'blue']
// Q5. How do you find the length of an array?
You can find the length of an array using the .length property. 
For example, if you have an array named 'colors', you can get its length by using colors.length.

const colors = ['red', 'green', 'blue'];
console.log(colors.length); // Output: 3    

// Q6. How do you change a value in an array? 
// Change one of the elements in your array and print the new array. 
const colors = ['red', 'green', 'blue'];

// Change the second element (index 1) to 'yellow'
colors[1] = 'yellow';

console.log(colors); // Output: ['red', 'yellow', 'blue']   



// Q7. What does .length do? 
// Write a program that shows how many items are in your array. 
const colors = ['red', 'green', 'blue'];
console.log(colors.length); // Output: 3

// Q8. How can you add a new element to the end of an array without using .push()? Use array index assignment instead. 
const colors = ['red', 'green', 'blue'];
colors[colors.length] = 'yellow'; // Add 'yellow' at the end of the array

console.log(colors); // Output: ['red', 'green', 'blue', 'yellow']

// Q9. Write a program that prints all elements in an array using three different loops: 
// ● for loop
// ● for...of loop 
// ● while loop 
const array = [1,2,3,4,5];

// Using for loop
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Using for...of loop
for (const method of array) {
    console.log(array);
}

// Using while loop
let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}

// Q10. Write a program that prints all numbers in an array multiplied by 2 using a loop.  
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * 2);    

// Q11. Create an array of names and print each name in uppercase using a loop. 
const names = ['alice', 'bob', 'charlie'];
for (let i = 0; i < names.length; i++) {
    console.log(names[i].toUpperCase());
}   


// Q12. Write a program that counts how many items are in an array without using .length. Use a loop to count them. 
const items = ['item1', 'item2', 'item3', 'item4'];
let count = 0;
for (let i = 0; items[i] !== undefined; i++) {
    count++;
}
console.log(count); // Output: 4

// Q13. Create an array of numbers and use a loop to find the largest and smallest number.
const numbers = [3, 5, 2, 8, 1];
let largest = numbers[0];
let smallest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}
console.log("Largest:", largest);   // Output: Largest: 8
console.log("Smallest:", smallest); // Output: Smallest: 1

// // Q13. Create an array of numbers and print the sum of all numbers using a loop. 
// // const numbers = [1, 2, 3, 4, 5];
// // let sum = 0;
// // for (let i = 0; i < numbers.length; i++) {
// //     sum += numbers[i];
// // }
// // console.log(sum); // Output: 15

// // // Q14. Write a program that finds the largest number in an array using a loop. 
// // const numbers = [3, 5, 2, 8, 1];
// // let largest = numbers[0];

// // for (let i = 1; i < numbers.length; i++) {
// //     if (numbers[i] > largest) {
// //         largest = numbers[i];
// //     }
// // }
// // console.log(largest); // Output: 8

// // // Q15. Create an array of words and print the total number of characters in all words using a loop. 
// // const words = ['hello', 'world', 'JavaScript'];
// // let totalChars = 0;

// // for (let i = 0; i < words.length; i++) {
// //     totalChars += words[i].length;
// // }
// // console.log(totalChars);        // Output: 20

// // // Advanced Array Questions
// // // Q1. How do you create an array with specific values?
// // You can create an array with specific values using array literal notation or the Array constructor.
// // // Using array literal notation
// // const fruits = ['apple', 'banana', 'orange'];

// // // Using the Array constructor
// // const fruits = new Array('apple', 'banana', 'orange');

// // // Q2. How do you access the first and last elements of an array?
// // You can access the first element of an array using index 0 (array[0]) and the last element using index array.length - 1 (array[array.length - 1]).
// // const fruits = ['apple', 'banana', 'orange'];
// // const firstFruit = fruits[0]; // 'apple'
// // const lastFruit = fruits[fruits.length - 1]; // 'orange'                                
// // // Q6. How do you add an element to the end of an array? 
// // // How do you remove the last element from an array?
// // To add an element to the end of an array, you can use the .push() method. 
// // For example, to add "blue" to the 'colors' array, you would use colors.push("blue").
// // const fruits = ['apple', 'banana', 'orange'];

// // // Add 'grape' to the end of the array
// // fruits.push('grape');

// // console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']
// // To remove the last element from an array, you can use the .pop() method. 
// // For example, to remove the last element from the 'colors' array, you would use colors.pop().
// // const fruits = ['apple', 'banana', 'orange'];

// // // Remove the last element
// // const removedFruit = fruits.pop();

// // console.log(removedFruit); // Output: 'orange'
// // console.log(fruits); // Output: ['apple', 'banana']
// // Q7. How do you add an element to the beginning of an array? 
// // How do you remove the first element from an array?
// To add an element to the beginning of an array, you can use the .unshift() method. 
// For example, to add "red" to the beginning of the 'colors' array, you would use colors.unshift("red").

// To remove the first element from an array, you can use the .shift() method. 
// For example, to remove the first element from the 'colors' array, you would use colors.shift().

// // Q8. How do you find the index of an element in an array?
// You can find the index of an element in an array using the .indexOf() method. 
// For example, if you want to find the index of "green" in the 'colors' array, you would use colors.indexOf("green"). If the element is not found, it returns -1.

// // Q9. How do you check if a variable is an array?
// You can check if a variable is an array using the Array.isArray() method. 
// For example, if you have a variable named 'myVar', you can check if it's an array by using Array.isArray(myVar).

// // Q10. How do you loop through the elements of an array? 
// // Write a code snippet that demonstrates this.
// You can loop through the elements of an array using a for loop, for...of loop, or forEach method. Here’s a code snippet demonstrating a for loop:

// const cars = ["Saab", "Volvo", "BMW"];
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }
// // Output:
// // Saab
// // Volvo
// // BMW  

// // or using for...of loop
// for (const car of cars) {
//     console.log(car);
// }

// // or using forEach method
// cars.forEach(car => {
//     console.log(car);
// }); 

// // Q11. How do you sort the elements of an array?
// You can sort the elements of an array using the .sort() method.
//  For example, to sort an array of numbers in ascending order, you would use:

// const numbers = [3, 1, 4, 2];
// numbers.sort((a, b) => a - b); // [1, 2, 3, 4]
// //  The expression `(a, b) => a - b` is a comparison function used in the `sort()` method to determine the order of elements.
// // ### Explanation of `(a, b) => a - b`:


// // - When `sort()` compares two elements `a` and `b`, it calls the comparison function with these two values.
// // - The function returns a number that indicates their order:
// //   - If the result is **negative** (`a - b < 0`), then `a` should come **before** `b`.
// //   - If the result is **zero** (`a - b === 0`), then `a` and `b` are considered equal in sorting order.
// //   - If the result is **positive** (`a - b > 0`), then `a` should come **after** `b`.

// // ### Why `a - b`?

// // - **For ascending order**: 
// //   - If `a` is less than `b`, then `a - b` is negative, so `a` comes first.
// //   - If `a` is greater than `b`, then `a - b` is positive, so `b` comes first.
// // - **Example**:
// //   - Comparing 3 and 1: `3 - 1 = 2` (positive), so 1 comes before 3.
// //   - Comparing 2 and 4: `2 - 4 = -2` (negative), so 2 comes before 4.

// // // For sorting strings, you can simply use: alphabetically
// // const fruits = ["banana", "apple", "cherry"];
// // fruits.sort(); // ["apple", "banana", "cherry"]         

// // Q12. How do you convert an array to a string?
// You can convert an array to a string using the .toString() method or the .join() method. The .toString() method converts the array elements to a comma-separated string, while the .join() method allows you to specify a custom separator.
// const colors = ["red", "green", "blue"];
// const str1 = colors.toString(); // "red,green,blue"
// const str2 = colors.join(" - "); // "red - green - blue"    
// // Q13. How do you create a multi-dimensional array?
// You can create a multi-dimensional array by nesting arrays within an array. 
// For example, a 2D array (array of arrays) can be created as follows:

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// // Q14. How do you access an element in a multi-dimensional array?
// You access an element in a multi-dimensional array by specifying the indices for each dimension. 
// For example, to access the element '5' in the 'matrix' array above, you would use:

// const element = matrix[1][1]; // 5 (row index 1, column index 1)

// // Q15. How do you add or remove elements in a multi-dimensional array?
// To add or remove elements in a multi-dimensional array, you can use the same methods as with single-dimensional arrays, but you need to specify the correct sub-array.

// To add an element to a sub-array:
// matrix[0].push(4); // Adds 4 to the first row

// To remove the last element from a sub-array:
// matrix[1].pop(); // Removes the last element from the second row

// To add a new sub-array:
// matrix.push([10, 11, 12]); // Adds a new row at the end

// To remove a sub-array:
// matrix.splice(2, 1); // Removes the third row (index 2) 