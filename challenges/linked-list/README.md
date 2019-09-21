# Linked Lists
Implement a Singly Linked List Data Structure.

## Challenge
Write a function called BinarySearch which takes in a sorted array and the search key. Without utilizing any of the built-in methods available, return the index of the array's element equal to the search key, or -1 if it doesn't exist.

## Approach & Efficiency
First I found the middle index of the array and determined if the key value was equal to the key and if so returned that index. If it was higher or lower, it searched through the first or last half of the array at a time to find a match or it returned -1.

## Solution
![UML Diagram](assets/linked-list.jpg)