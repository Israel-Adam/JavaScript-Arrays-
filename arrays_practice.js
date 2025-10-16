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

// Q4. How do you access an element in an array? 
// How do you change the value of an element in an array?
You access an element in an array using its index.
 For example, to access the first element of an array named 'fruits', you would use fruits[0].

To change the value of an element in an array, you can assign a new value to the specific index.
 For example, to change the first element of the 'fruits' array to "banana", you would use fruits[0] = "banana".

// Q5. How do you find the length of an array?
You can find the length of an array using the .length property. 
For example, if you have an array named 'colors', you can get its length by using colors.length.

// Q6. How do you add an element to the end of an array? 
// How do you remove the last element from an array?
To add an element to the end of an array, you can use the .push() method. 
For example, to add "blue" to the 'colors' array, you would use colors.push("blue").

To remove the last element from an array, you can use the .pop() method. 
For example, to remove the last element from the 'colors' array, you would use colors.pop().

// Q7. How do you add an element to the beginning of an array? 
// How do you remove the first element from an array?
To add an element to the beginning of an array, you can use the .unshift() method. 
For example, to add "red" to the beginning of the 'colors' array, you would use colors.unshift("red").

To remove the first element from an array, you can use the .shift() method. 
For example, to remove the first element from the 'colors' array, you would use colors.shift().

// Q8. How do you find the index of an element in an array?
You can find the index of an element in an array using the .indexOf() method. 
For example, if you want to find the index of "green" in the 'colors' array, you would use colors.indexOf("green"). If the element is not found, it returns -1.

// Q9. How do you check if a variable is an array?
You can check if a variable is an array using the Array.isArray() method. 
For example, if you have a variable named 'myVar', you can check if it's an array by using Array.isArray(myVar).

// Q10. How do you loop through the elements of an array? 
// Write a code snippet that demonstrates this.
You can loop through the elements of an array using a for loop, for...of loop, or forEach method. Here’s a code snippet demonstrating a for loop:

const cars = ["Saab", "Volvo", "BMW"];
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
// Output:
// Saab
// Volvo
// BMW  

// or using for...of loop
for (const car of cars) {
    console.log(car);
}

// or using forEach method
cars.forEach(car => {
    console.log(car);
}); 

// Q11. How do you sort the elements of an array?
You can sort the elements of an array using the .sort() method.
 For example, to sort an array of numbers in ascending order, you would use:

const numbers = [3, 1, 4, 2];
numbers.sort((a, b) => a - b); // [1, 2, 3, 4]
//  The expression `(a, b) => a - b` is a comparison function used in the `sort()` method to determine the order of elements.
// ### Explanation of `(a, b) => a - b`:


// - When `sort()` compares two elements `a` and `b`, it calls the comparison function with these two values.
// - The function returns a number that indicates their order:
//   - If the result is **negative** (`a - b < 0`), then `a` should come **before** `b`.
//   - If the result is **zero** (`a - b === 0`), then `a` and `b` are considered equal in sorting order.
//   - If the result is **positive** (`a - b > 0`), then `a` should come **after** `b`.

// ### Why `a - b`?

// - **For ascending order**: 
//   - If `a` is less than `b`, then `a - b` is negative, so `a` comes first.
//   - If `a` is greater than `b`, then `a - b` is positive, so `b` comes first.
// - **Example**:
//   - Comparing 3 and 1: `3 - 1 = 2` (positive), so 1 comes before 3.
//   - Comparing 2 and 4: `2 - 4 = -2` (negative), so 2 comes before 4.

// // For sorting strings, you can simply use: alphabetically
// const fruits = ["banana", "apple", "cherry"];
// fruits.sort(); // ["apple", "banana", "cherry"]         

// Q12. How do you convert an array to a string?
You can convert an array to a string using the .toString() method or the .join() method. The .toString() method converts the array elements to a comma-separated string, while the .join() method allows you to specify a custom separator.
const colors = ["red", "green", "blue"];
const str1 = colors.toString(); // "red,green,blue"
const str2 = colors.join(" - "); // "red - green - blue"    
// Q13. How do you create a multi-dimensional array?
You can create a multi-dimensional array by nesting arrays within an array. 
For example, a 2D array (array of arrays) can be created as follows:

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Q14. How do you access an element in a multi-dimensional array?
You access an element in a multi-dimensional array by specifying the indices for each dimension. 
For example, to access the element '5' in the 'matrix' array above, you would use:

const element = matrix[1][1]; // 5 (row index 1, column index 1)

// Q15. How do you add or remove elements in a multi-dimensional array?
To add or remove elements in a multi-dimensional array, you can use the same methods as with single-dimensional arrays, but you need to specify the correct sub-array.

To add an element to a sub-array:
matrix[0].push(4); // Adds 4 to the first row

To remove the last element from a sub-array:
matrix[1].pop(); // Removes the last element from the second row

To add a new sub-array:
matrix.push([10, 11, 12]); // Adds a new row at the end

To remove a sub-array:
matrix.splice(2, 1); // Removes the third row (index 2) 