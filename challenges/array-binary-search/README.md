# Returns index of an Array's Element equal to the search key, or -1 if n/a
A function called BinarySearch which takes in 2 parameters: a sorted array and the search key, and returns the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## Challenge
Write a function called BinarySearch which takes in a sorted array and the search key. Without utilizing any of the built-in methods available, return the index of the array's element equal to the search key, or -1 if it doesn't exist.

## Approach & Efficiency
First I found the middle index of the array and determined if the key value was equal to the key and if so returned that index. If it was higher or lower, it searched through the first or last half of the array at a time to find a match or it returned -1.

## Solution
![UML Diagram](assets/array-binary-search.jpg)