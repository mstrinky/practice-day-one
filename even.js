// Write a function that takes in a number and returns true if the number is even, and false otherwise. 
function isEven(number){
    if(number%2 === 0){
        return true;
    }
    else{
        return false;
    }
}
var theNumber = isEven(50);
console.log(theNumber);