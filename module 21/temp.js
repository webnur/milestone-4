

// Swap variable, swap without temp, destructing

let first = 5;
let second = 7;

// console.log(first, second);
// this is wrong approach 
// first = second;
// second = first;

// approach 1
let temp = first;
first = second;
second = temp
// console.log(first, second);

//approach 2


[first, second] = [second, first]
console.log(first, second)