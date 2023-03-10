// farenheight to celcius 
function farnToCels (fahrenheit){
    var celsius = (fahrenheit - 32)*5/9;
    return celsius;
}
var ans = farnToCels(90);
console.log(ans);