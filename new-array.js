// Write a function that takes in an array of numbers and returns a new array with all the even numbers. 
function getEvenNumber(numbers){
    var evenNumber = [];
    for (i = 0; i<numbers.length; i++){
        var index = i;
        var element = numbers[index];
        if(element%2===0){
            console.log(index,element);
            evenNumber.push(element);
        }
    }
    return evenNumber;
}
var myNumber = [12,34,45,67,78,89,90];
var evenNumbers = getEvenNumber(myNumber);
console.log(evenNumbers);
