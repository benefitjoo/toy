// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.
//
// For example, given:
//
//  [1, 7, 3, 4]
//
// your function would return:
//
//  [84, 12, 28, 21]
//
// by calculating:
//
//  [7*3*4, 1*3*4, 1*7*4, 1*7*3]
//
// Do not use division in your solution.
//
// Gotchas
// Does your function work if the input array contains zeroes? Remember—no division.
//
// We can do this in O(n) time and O(n) space!
// 
// We only need to allocate one new array of size n.
