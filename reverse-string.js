function getReverseSring(str){
    var reverseString = " ";
    for (let i= str.length-1; i>=0;i--){
         reverseString += str[i];
    }
    return reverseString;
}
var string = 'rinky';
var result = getReverseSring(string);
console.log(result);