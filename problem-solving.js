// problem number 1: 
// Write a function that takes in two numbers and returns the sum of the two numbers. 
function numbers(a,b){
    return a+b;
}
var additon = numbers(2,3);
console.log(additon);

// problem number 2: 
// Write a function that takes in a string and returns the length of the string. 
var myName = 'mstrinkyakter';
var length = myName.length;
console.log(length);

// problem number 3: 
// Write a function that takes in an array of numbers and returns the largest number in the array. 
var numbers = [1,2,3,4,5,6];
var largestNumber =numbers [0];
for( let i=0; i<numbers.length; i++){
if(largestNumber < numbers[i]){
    largestNumber = numbers[i];
}
}
console.log(largestNumber);


