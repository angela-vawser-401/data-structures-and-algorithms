# Linked List Merge
Write a function which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list.

## Challenge
Merges two linked lists.

## Approach & Efficiency
Used a while loop for lists with the same length that keeps adding one from each list and moving to the next item as long as there is a next value. The longer list's remaining values are then added to the shorter list, then the head of the new list is returned.

## Solution
![UML Diagram](assets/ll-merge.jpg)