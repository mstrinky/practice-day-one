// farenheight to celcius 
function farnToCels (fahrenheit){
    var celsius = (fahrenheit - 32)*5/9;
    return celsius;
}
var ans = farnToCels(90);
console.log(ans);

// celsius to fahrenheit 
function celToFarn (celsius){
    var fahrenheit = celsius*9/5+32;
    return fahrenheit;
}
var ans =celToFarn(90);
console.log(ans);