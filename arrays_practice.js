// // JavaScript Arrays 
// // Q1. What is an array in JavaScript? 
// // Search online and write your own short definition. 
// // Give three real-life examples of data that could be stored in arrays. 
// An array in JavaScript is a collection of ordered elements that can store multiple values in a single variable. These elements can be of any data type, and each element has a numeric index starting from 0.

// Three real-life examples of data stored in arrays:  

// List of student names in a class
// The days of the week
// A collection of favorite movies

// // Q2. How do you create an array?
// 1. Using array literal notation
//       const cars = ["Saab", "Volvo", "BMW"];

//  2. Using the Array constructor
// const cars = [
//   "Saab",
//   "Volvo",
//   "BMW"
// ];
// 3. Creating an empty array and then adding elements
// const cars = [];
// cars[0]= "Saab";
// cars[1]= "Volvo";
// cars[2]= "BMW";

// // Q3. What data types can you store inside an array?
// You can store various data types inside an array, including:
// - Numbers (e.g., 1, 2, 3)
// - Strings (e.g., "hello", "world")
// - Booleans (e.g., true, false)
// - Objects (e.g., {name: "Alice", age: 25})
// - Arrays (e.g., [1, 2, 3])
// - Null and undefined

// // Q4. What is the difference between an array and a single variable? Explain in your own words and give one code example to support your answer. 

// Single variable: Stores only one piece of data, like a number, string, or object.
// Array: Stores multiple data items, like a list, and each item can be accessed individually using its position (index).
// // Single variable
// let age = 25;

// // Array variable
// let colors = ['red', 'blue', 'green'];

// console.log(age);        // Output: 25
// console.log(colors[0]);  // Output: 'red' (first element in the array)
// // Q5. How do you access an element in an array? 
// //  How do you change the value of an element in an array?
// You access an element in an array using its index.
//   For example, to access the first element of an array named 'fruits', you would use fruits[0].
//   const fruits = ['apple', 'banana', 'orange'];

// // Access the first element
// console.log(fruits[0]); // Output: 'apple'

// // Access the second element
// console.log(fruits[1]); // Output: 'banana'

// // Access the third element
// console.log(fruits[2]); // Output: 'orange'

// To change the value of an element in an array, you can assign a new value to the specific index.
//  For example, to change the first element of the 'fruits' array to "banana", you would use fruits[0] = "banana".
// const colors = ['red', 'green', 'blue'];

// // Change the second element (index 1) to 'yellow'
// colors[1] = 'yellow';

// console.log(colors); // Output: ['red', 'yellow', 'blue']
// // Q5. How do you find the length of an array?
// You can find the length of an array using the .length property. 
// For example, if you have an array named 'colors', you can get its length by using colors.length.

// const colors = ['red', 'green', 'blue'];
// console.log(colors.length); // Output: 3    

// // Q6. How do you change a value in an array? 
// // Change one of the elements in your array and print the new array. 
// const colors = ['red', 'green', 'blue'];

// // Change the second element (index 1) to 'yellow'
// colors[1] = 'yellow';

// console.log(colors); // Output: ['red', 'yellow', 'blue']   



// // Q7. What does .length do? 
// // Write a program that shows how many items are in your array. 
// const colors = ['red', 'green', 'blue'];
// console.log(colors.length); // Output: 3

// // Q8. How can you add a new element to the end of an array without using .push()? Use array index assignment instead. 
// const colors = ['red', 'green', 'blue'];
// colors[colors.length] = 'yellow'; // Add 'yellow' at the end of the array

// console.log(colors); // Output: ['red', 'green', 'blue', 'yellow']

// // Q9. Write a program that prints all elements in an array using three different loops: 
// // ● for loop
// // ● for...of loop 
// // ● while loop 
// const array = [1,2,3,4,5];

// // Using for loop
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// // Using for...of loop
// for (const method of array) {
//     console.log(array);
// }

// // Using while loop
// let i = 0;
// while (i < array.length) {
//     console.log(array[i]);
//     i++;
// }

// // Q10. Write a program that prints all numbers in an array multiplied by 2 using a loop.  
// const numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i] * 2);    

// // Q11. Create an array of names and print each name in uppercase using a loop. 
// const names = ['alice', 'bob', 'charlie'];
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i].toUpperCase());
// }   


// // Q12. Write a program that counts how many items are in an array without using .length. Use a loop to count them. 
// const items = ['item1', 'item2', 'item3', 'item4'];
// let count = 0;
// for (let i = 0; items[i] !== undefined; i++) {
//     count++;
// }
// console.log(count); // Output: 4


// // Q13. Create an array of numbers and use a loop to find the largest and smallest number.
// const numbers = [3, 5, 2, 8, 1];
// let largest = numbers[0];
// let smallest = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         largest = numbers[i];
//     }
//     if (numbers[i] < smallest) {
//         smallest = numbers[i];
//     }
// }
// console.log("Largest:", largest);   // Output: Largest: 8
// console.log("Smallest:", smallest); // Output: Smallest: 1

// // Q14. What do these array methods do?
// // Write code examples for each of the following:

// // push()
// // Adds one or more elements to the end of an array and returns the new length of the array.
// let fruits = ['apple', 'banana'];
// fruits.push('orange');
// console.log(fruits); // ['apple', 'banana', 'orange']

// // pop()
// // Removes the last element from an array and returns that element.

// let fruits = ['apple', 'banana', 'orange'];
// fruits.pop();
// console.log(fruits); // ['apple', 'banana'] 

// // shift()
// // Removes the first element from an array and returns that element.

// let fruits = ['apple', 'banana', 'orange'];
// fruits.shift();
// console.log(fruits); // ['banana']

// // unshift()
// // Adds one or more elements to the beginning of an array and returns the new length of the array.

// let fruits = ['banana', 'orange'];
// fruits.unshift('kiwi');
// console.log(fruits); // ['kiwi', 'banana']

// // Q15. How can you find the position of an item in an array?
// // Use .indexOf() and .includes().
// // INDEXOF
// // Returns the first index at which a given element can be found in the array, or -1 if it is not present.
// const colors = ['red', 'green', 'blue', 'green'];
// const position = colors.indexOf('green'); // 1 (first occurrence)
// console.log(position);  // Output: 1
// // INCLUDES
// // Checks if an array contains a specific element and returns true or false.
// let fruits = ['apple', 'banana', 'orange'];
// console.log(fruits.includes('banana')); // true
// console.log(fruits.includes('grape'));  // false

// // Q16. How can you remove or copy parts of an array?
// // Try using .slice() and .splice().
// // Explain the difference between them.
// // SLICE
// // Returns a shallow copy of a portion of an array into a new array object without modifying the original array.
// let fruits = ['apple', 'banana', 'orange', 'pear'];
// let slicedFruits = fruits.slice(1, 3); // from index 1 to index 3 (not inclusive)
// console.log(slicedFruits); // ['banana', 'orange']
// console.log(fruits);       // ['apple', 'banana', 'orange', 'pear']
// // SPLICE
// // Remove
// let fruits = ['apple', 'banana', 'orange', 'pear'];
// let removed = fruits.splice(1, 2); // start at index 1, remove 2 elements
// console.log(removed); // ['banana', 'orange']
// console.log(fruits);  // ['apple', 'pear']
// // Add
// let fruits = ['apple', 'banana', 'orange'];
// fruits.splice(2, 0, 'grape'); // at index 2, remove 0, add 'grape'
// console.log(fruits); // ['apple', 'banana', 'grape', 'orange']
// // Difference:
// .slice() creates a new array by copying a portion of the original array without modifying it.
//  .splice() modifies the original array by removing or replacing elements and can also add new elements.


// //  Q17. How can you combine two arrays together?
// // Search and demonstrate using .concat() or the spread operator (...).
// // contat()
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// let combinedArray = array1.concat(array2);
// console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

// // Spread operator
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// let combinedArray = [...array1, ...array2];
// console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

// // Q18. How can you check whether a variable is an array or not?
// // Use .isArray() and explain when it’s useful.
// const myArray = [1, 2, 3];
// const myObject = {a: 1, b: 2};
// console.log(Array.isArray(myArray));  // true
// console.log(Array.isArray(myObject)); // false
// // when it's useful
// // It's useful when you want to ensure that a variable is an array before performing array-specific operations,
// // preventing errors in your code.

// // Q19. How can you reverse the order of items in an array?
// // Use .reverse() and print the new order.
// const numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers); // Output: [5, 4, 3, 2, 1]

// // Q20. How can you sort an array of strings alphabetically?
// // Use .sort() and print the sorted list.
// const fruits = ['banana', 'apple', 'cherry'];
// fruits.sort();
// console.log(fruits); // Output: ['apple', 'banana', 'cherry']

// // Q21. How can you sort an array of numbers correctly?
// // Search how to use a custom function inside .sort() to handle numbers.
// const numbers = [3, 1, 4, 2];
// numbers.sort((a, b) => a - b); // Sort in ascending order
// console.log(numbers); // Output: [1, 2, 3, 4]
// The expression `(a, b) => a - b` is a comparison function used in the `sort()` method to determine the order of elements.
// // ### Explanation of `(a, b) => a - b`:
// - When `sort()` compares two elements `a` and `b`, it calls the comparison function with these two values.
//  - The function returns a number that indicates their order:
//   - If the result is **negative** (`a - b < 0`), then `a` should come **before** `b`.
//   - If the result is **zero** (`a - b === 0`), then `a` and `b` are considered equal in sorting order.
//    - If the result is **positive** (`a - b > 0`), then `a` should come **after** `b`.
// // ### Why `a - b`?
//  - **For ascending order**:
//   - If `a` is less than `b`, then `a - b` is negative, so `a` comes first.
//   - If `a` is greater than `b`, then `a - b` is positive, so `b` comes first.
// // - **Example**:
//   - Comparing 3 and 1: `3 - 1 = 2` (positive), so 1 comes before 3.
//    - Comparing 2 and 4: `2 - 4 = -2` (negative), so 2 comes before 4.

// // Q22. How can you convert an array into a single string?
// // Use .toString() and compare it with .join().
// const colors = ["red", "green", "blue"];
// const str1 = colors.toString(); // "red,green,blue"
// const str2 = colors.join(" - "); // "red - green - blue"
// console.log(str1); // Output: "red,green,blue"
// console.log(str2); // Output: "red - green - blue"

// // Q23. How can you remove a specific item from an array by its name or value?
// // Use .indexOf() with .splice() to remove it.
// const fruits = ['apple', 'banana', 'orange', 'banana'];
// const index = fruits.indexOf('banana'); // Find the index of 'banana'
// if (index !== -1) { // Check if 'banana' is found   
//     fruits.splice(index, 1); // Remove 'banana' at the found index
// }
// console.log(fruits); // Output: ['apple', 'orange', 'banana']

// // Q24. How can you add multiple elements at once to an array?
// // Use .push() with multiple arguments or .concat().
// const colors = ['red', 'green'];    
// colors.push('blue', 'yellow'); // Add multiple elements using push
// console.log(colors); // Output: ['red', 'green', 'blue', 'yellow']
// const moreColors = ['purple', 'orange'];
// const allColors = colors.concat(moreColors); // Add multiple elements using concat
// console.log(allColors); // Output: ['red', 'green', 'blue', 'yellow', 'purple', 'orange']

// // Q25. How can you fill an array with the same value?
// // Use .fill() to create or update array items.
// const array = new Array(5).fill(0); // Create an array of length 5 filled with 0
// console.log(array); // Output: [0, 0, 0, 0, 0]
// const colors = ['red', 'green', 'blue'];
// colors.fill('yellow'); // Fill the existing array with 'yellow'
// console.log(colors); // Output: ['yellow', 'yellow', 'yellow']

// // Q26. How can you find the first and last positions of an element that repeats?
// // Use .indexOf() and .lastIndexOf() on an array with repeated values.
// const fruits = ['apple', 'banana', 'orange', 'banana', 'grape'];
// const firstIndex = fruits.indexOf('banana'); // Find the first index of 'banana'
// const lastIndex = fruits.lastIndexOf('banana'); // Find the last index of 'banana'
// console.log("First index of 'banana':", firstIndex); // Output: 1
// console.log("Last index of 'banana':", lastIndex);   // Output: 3

// // Q27. How can you combine all array elements into one string?
// // Use .join() to display them in one line separated by commas or spaces.
// const words = ['Hello', 'world', 'this', 'is', 'JavaScript'];
// const sentence = words.join(' '); // Join with space
// console.log(sentence); // Output: "Hello world this is JavaScript"
// const csv = words.join(', '); // Join with comma and space
// console.log(csv); // Output: "Hello, world, this, is, JavaScript"

// // // Q28. Create an array of five numbers.
// // Add 10 to each number using a loop or .map() and store the results in a new array.
// const numbers = [1, 2, 3, 4, 5];
// const newNumbers = numbers.map(num => num + 10);
// console.log(newNumbers); // Output: [11, 12, 13, 14, 15]
// loop version
// const numbers = [1, 2, 3, 4, 5];
// const newNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//     newNumbers.push(numbers[i] + 10);
// }
// console.log(newNumbers); // Output: [11, 12, 13, 14, 15]

// // Q29. Explain in your own words what .map(), .filter(), and .reduce() do.
// // Write one sentence and one simple example for each method.
// // .map(): Creates a new array by applying a function to each element of the original array.
// // Example:
// const numbers = [1, 2, 3];
// const doubled = numbers.map(num => num * 2); // [2, 4, 6]
// console.log(doubled); // Output: [2, 4, 6]
// // .filter(): Creates a new array with all elements that pass a test implemented by a provided function.
// // Example:
// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter(num => num % 2 === 0); // [2, 4]
// console.log(evenNumbers); // Output: [2, 4]
// // .reduce(): Executes a reducer function on each element of the array, resulting in a single output value.
// // Example:
// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((accumulator, current) => accumulator + current, 0); // 10
// console.log(sum); // Output: 10

// // Q30. Create an array of ages and use .filter() to find only the ages above 18.
// const ages = [15, 22, 18, 30, 16, 25];
// const adults = ages.filter(age => age > 18);
// console.log(adults); // Output: [22, 30, 25]

// // Q31. Create an array of prices and use .reduce() to calculate the total sum.
// const prices = [10, 20, 30, 40];
// const total = prices.reduce((sum, price) => sum + price, 0);
// console.log(total); // Output: 100

// // Q32. How can you find the first value in an array that meets a condition?
// // Use .find() and explain how it differs from .filter().
// const numbers = [1, 2, 3, 4, 5];
// const firstEven = numbers.find(num => num % 2 === 0);
// console.log(firstEven); // Output: 2
// // .find() returns the first element that satisfies the condition, while .filter() returns all elements that satisfy the condition in a new array.

// // Q33. How can you find the index of the first value that meets a condition?
// // Use .findIndex() and explain what it returns.
// const numbers = [1, 2, 3, 4, 5];
// const firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
// console.log(firstEvenIndex); // Output: 1
// // .findIndex() returns the index of the first element that satisfies the condition, or -1 if no elements satisfy the condition.

// // Q34. How can you test whether all items in an array pass a condition?
// // Use .every() and give an example.
// const numbers = [2, 4, 6, 8];
// const allEven = numbers.every(num => num % 2 === 0);
// console.log(allEven); // Output: true

// // // Q35. How can you test whether at least one item in an array passes a condition?
// // Use .every() and give an example.
// const numbers = [1, 3, 5, 8];
// const hasEven = numbers.every(num => num % 2 === 0);
// console.log(hasEven); // Output: true

// //  Q36 How can you test whether at least one item in an array passes a condition?
// // Use .some() and give an example.
// const numbers = [1, 3, 5, 7];
// const hasEven = numbers.some(num => num % 2 === 0);
// console.log(hasEven); // Output: false

// // Q36. How can you flatten an array that has nested arrays inside it?
// // Search and use .flat() to create a single-level array.
// const nestedArray = [1, [2, 3], [4, [5, 6]]];
// const flatArray = nestedArray.flat(2); // Flatten to a depth of 2
// console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]

// // Q37. How can you transform all array elements to uppercase or lowercase?
// // Use .map() with a string method.
// const words = ['hello', 'world', 'JavaScript'];
// const uppercased = words.map(word => word.toUpperCase());
// console.log(uppercased); // Output: ['HELLO', 'WORLD', 'JAVASCRIPT']
// const lowercased = words.map(word => word.toLowerCase());
// console.log(lowercased); // Output: ['hello', 'world', 'javascript']

// // Q38. How can you remove all duplicate values from an array?
// // Search and demonstrate using new Set() or .filter().
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers = [...new Set(numbers)];
// console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
// const uniqueNumbersFilter = numbers.filter((num, index) => numbers.indexOf(num) === index);
// console.log(uniqueNumbersFilter); // Output: [1, 2, 3, 4, 5]

// // Q39. How can you create a copy of an array without changing the original?
// // Use .slice() or the spread operator (...) and explain the difference.
// const originalArray = [1, 2, 3];
// const copy1 = originalArray.slice(); // Using slice()
// const copy2 = [...originalArray]; // Using spread operator
// console.log(copy1); // Output: [1, 2, 3]
// console.log(copy2); // Output: [1, 2, 3]
// // The difference is that .slice() creates a shallow copy of the array, while the spread operator also creates a shallow copy but can be more concise and flexible in certain situations.

// // Q40. How can you use .reduce() to find both the total and average of numbers in an array?
// const numbers = [10, 20, 30, 40];
// const total = numbers.reduce((sum, num) => sum + num, 0);
// const average = total / numbers.length;
// console.log("Total:", total);       // Output: Total: 100
// console.log("Average:", average);   // Output: Average: 25

// // Q41. How can you use .map() and .filter() together to process data?
// // Create an array of numbers, filter out odd numbers, and then double the even ones.
// const numbers = [1, 2, 3, 4, 5, 6];
// const processed = numbers
//     .filter(num => num % 2 === 0) // Filter out odd numbers 
//     .map(num => num * 2);         // Double the even numbers
// console.log(processed); // Output: [4, 8, 12]

// // Q42. How can you check if a specific word exists in a list of words, ignoring case sensitivity?
// // Use .some() and string methods to compare.
// const words = ['Hello', 'world', 'JavaScript'];
// const searchWord = 'javascript';
// const exists = words.some(word => word.toLowerCase() === searchWord.toLowerCase());
// console.log(exists); // Output: true

// // Q43. How can you use .reduce() to turn an array of words into a sentence (a single string)?
// const words = ['Hello', 'world', 'this', 'is', 'JavaScript'];
// const sentence = words.reduce((acc, word) => acc + ' ' + word);
// console.log(sentence.trim()); // Output: "Hello world this is JavaScript"

let num=[1,2,3,]
num.fill(5)
console.log("",num);
output  // [5,5,5]

let num= newArray(6).fill(6);
console.log("",num);
output  // [6,6,6,6,6,6]

let letters=['a','b','c','b', 'd', 'b'];
console.log(letters.indexOf('b')); // 1
console.log(letters.lastIndexOf('b')); // 4
console.log(letters.middleIndexOf('b')); // -1




// Level 1: Understanding Objects (The Basics)
// Instructions:
// Read each question carefully and write a short JavaScript code example for each.

// Q1. What is an object in JavaScript?
// Write your own definition in your words and give one simple code example.
answer: 
A JavaScript object is a collection of key-value pairs that can store various types of data and functions. It allows you to group related data and functionality together in a structured way.
Example:
let person = {
    name: "John",
    age: 30,
    country: "USA"
}; 
output: person = {name: "John", age: 30, country: "USA"}     

// Q2. How do you create an object in JavaScript?
// // Write two ways to create an object: using object literal {} and using the new Object()
// method.
// Using object literal
let car = {
    make: "Toyota",
    model: "Camry",     
    year: 2020
};
output: car = {make: "Toyota", model: "Camry", year: 2020}

// Using new Object() method
let bike = new Object();
bike.brand = "Honda";
bike.type = "Sport";
bike.year = 2021;
output: bike = {brand: "Honda", type: "Sport", year: 2021}

// Q3. What are object properties?
// Explain in your own words and give an example.
Object properties are key-value pairs that define the characteristics or attributes of an object.
// Create an object with at least three properties (like name, age, and country).
let student = {
    name: "Alice",
    age: 22,
    country: "Canada"
};
output: student = {name: "Alice", age: 22, country: "Canada"}

// Level 2: Working with Object Methods
// Instructions:
// Write your answers and include a working code example for each question.

// Q4. How can you access object properties?
You can access object properties using dot notation or bracket notation.
// Show examples of dot notation and bracket notation.
let book = {
    title: "JavaScript Basics",
    console.log(book.title); // Dot notation
    console.log(book["title"]); // Bracket notation
};
output: book = {title: "JavaScript Basics"} 

// Q5. How can you change or update a property value in an object?
answer:
You can change or update a property value in an object by assigning a new value to the property using either dot notation or bracket notation.

// Write a code example that changes one of the properties.
let laptop = {
    brand: "Dell",
    model: "XPS 13",
    year: 2021
};
laptop.year = 2022; // Using dot notation to update the year
laptop["model"] = "XPS 15"; // Using bracket notation to update the model
output: laptop = {brand: "Dell", model: "XPS 15", year: 2022}


// Q6. How can you add a new property to an existing object?
answer:
You can add a new property to an existing object by assigning a value to a new key using either dot notation or bracket notation.
//
// Write a short example where you add one more key and value to an existing object.
let phone = {
    brand: "Apple",
    model: "iPhone 12"
};
phone.color = "Black"; // Using dot notation to add a new property
phone["storage"] = "128GB"; // Using bracket notation to add another new property
output: phone = {brand: "Apple", model: "iPhone 12", color: "Black", storage: "128GB"}

// Q7. How can you delete a property from an object?
answer:
You can delete a property from an object using the delete keyword followed by the object property you want to remove.
//
// Use the delete keyword and demonstrate how it works.
let user = {
    username: "user123",
    password: "pass123",
    email: "user@example.com"
};

// Delete the email property
delete user.email;

console.log(user);

//

// Level 2: Working with Object Methods
// Instructions:
// Write your answers and include a working code example for each question.

// Q8. What is a method in a JavaScript object?
answer: 
A method in a JavaScript object is a function that is defined as a property of that object. It allows the object to perform actions or operations related to its data.
// Create an object with one method that prints a message or returns a value.
let calculator = {
    add: function(a, b) {
        return a + b;
    }
};
console.log(calculator.add(5, 3)); // Output: 8
//
// Q9. How can you use this inside an object method?
answer:
You can use the this keyword inside an object method to refer to the current object itself. This allows you to access other properties or methods of the same object.
//
// Write a code example that shows how this refers to the current object.
let rectangle = {
    width: 10,
    height: 5,
    area: function() {
        return this.width * this.height; // 'this' refers to the rectangle object
    }
};
console.log(rectangle.area()); // Output: 50


// Q10. How can you loop through all properties of an object?
answer:
You can loop through all properties of an object using a for...in loop.
//
// Use the for...in loop to display all keys and values.
let person = {
    name: "Emma",
    age: 28,
    city: "New York"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
} 
// Output:
// name: Emma
// age: 28
// city: New York


// Q11. How can you check if a property exists in an object?
answer:
You can check if a property exists in an object using the in keyword or the .hasOwnProperty()

// Use the in keyword or .hasOwnProperty() and demonstrate both.
let car = {     
    make: "Ford",
    model: "Mustang",
    year: 2021
};

// Using 'in' keyword
console.log("model" in car); // Output: true
console.log("color" in car); // Output: false

// Using .hasOwnProperty()
console.log(car.hasOwnProperty("year")); // Output: true
console.log(car.hasOwnProperty("color")); // Output: false    


// Q12. How can you get all keys and values from an object?
answer:
You can get all keys from an object using Object.keys() and all values using Object.values().
//
/
// Use Object.keys() and Object.values() and print the results.
let fruit = {
    name: "Apple",
    color: "Red",
    weight: "200g"
};

let keys = Object.keys(fruit);
let values = Object.values(fruit);

console.log("Keys:", keys);     // Output: Keys: [ 'name', 'color', 'weight' ]
console.log("Values:", values); // Output: Values: [ 'Apple', 'Red', '200g' ]   


// Q13. How can you get both keys and values together from an object?
answer:
You can get both keys and values together from an object using Object.entries().
//
// Use Object.entries() and loop through them.
let animal = {
    species: "Dog",
    breed: "Labrador",
    age: 3
};

let entries = Object.entries(animal);

for (let [key, value] of entries) {
    console.log(key + ": " + value);
}
// Output:
// species: Dog
// breed: Labrador
// age: 3   


// Level 3: Object Operations and Manipulation
// Instructions:
// Write one working code example for each question.

// Q14. How can you copy an object without changing the original one?
answer:
You can copy an object using Object.assign() or the spread operator.
//
//
// Use Object.assign() and the spread operator { ...obj }.
let original = {
    name: "Original",
    value: 100
};

// Using Object.assign()
let copy1 = Object.assign({}, original);
console.log(copy1); // Output: { name: 'Original', value: 100 }

// Using spread operator
let copy2 = { ...original };
console.log(copy2); // Output: { name: 'Original', value: 100 } 


// Q15. How can you merge two or more objects together?
answer:
You can merge two or more objects together using Object.assign() or the spread operator.
//
// Use Object.assign() or the spread operator and show examples.
let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 3,
    c: 4
};  
// Using Object.assign()
let merged1 = Object.assign({}, obj1, obj2);
console.log(merged1); // Output: { a: 1, b: 3, c: 4 }

// Using spread operator
let merged2 = { ...obj1, ...obj2 };
console.log(merged2); // Output: { a: 1, b: 3, c: 4 }   


// Q16. How can you freeze an object to prevent changes?
answer:
You can freeze an object using Object.freeze() to prevent any modifications to its properties.
//

// Use Object.freeze() and demonstrate how it stops modifications.
let settings = {
    theme: "dark",
    notifications: true
};      
Object.freeze(settings);

settings.theme = "light";
settings.newProperty = "newValue";

console.log(settings); // Output: { theme: 'dark', notifications: true } (no changes made)


// Q17. How can you seal an object?
answer:
You can seal an object using Object.seal() to prevent adding or removing properties, but you can still modify existing properties.
//
//
// Use Object.seal() and explain the difference between sealing and freezing.
let config = {
    version: 1.0,
    debug: false
};      
Object.seal(config);

config.debug = true;
config.newSetting = "enabled"; // This will not be added
console.log(config); // Output: { version: 1, debug: true } (debug modified, newSetting not added)
// Difference: Sealing an object prevents adding or removing properties, while freezing an object prevents any changes to the properties.


// Q18. How can you find the number of properties in an object?
answer:
You can find the number of properties in an object by using Object.keys() to get an array of the object's keys and then checking the length of that array.
//
// Use Object.keys().length to count properties.
let profile = {
    username: "user456",
    email: "userexample.com",
    age: 25
};

let propertyCount = Object.keys(profile).length;
console.log("Number of properties:", propertyCount); // Output: Number of properties: 3

// Q19. How can you convert an object into an array?
answer:
You can convert an object into an array using Object.entries(), which returns an array of the object's key-value pairs.
//
// Use Object.entries() and explain the result.
let car = {
    make: "Tesla",
    model: "Model 3",
    year: 2021
};

let entriesArray = Object.entries(car);
console.log(entriesArray); 
// Output: [ ['make', 'Tesla'], ['model', 'Model 3'], ['year', 2021] ]
// Explanation: The result is an array of arrays, where each inner array contains a key-value pair from the object.


// Q20. How can you convert an array of pairs back into an object?
answer:
You can convert an array of pairs back into an object using Object.fromEntries().
//
// Use Object.fromEntries() and show an example.
let pairsArray = [
    ['name', 'Bob'],
    ['age', 30],
    ['city', 'Chicago']
];

let objFromPairs = Object.fromEntries(pairsArray);
console.log(objFromPairs); 
// Output: { name: 'Bob', age: 30, city: 'Chicago' }    




