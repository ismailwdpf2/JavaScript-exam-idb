var num1 = Number(prompt('value1'));
var num2 = Number(prompt('value2'));
var num3 = Number(prompt('value3'));
var largest = null;
var smallest = null;
// check the condition
if (num1 <= num2 && num1 <= num3) {
    smallest = num1;
}
else if (num2 <= num1 && num2 <= num3) {
    smallest = num2;
}
else {
    smallest = num3;
}
// check the condition
if (num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}
document.write("max" + largest)
document.write("<br>")
document.write("min" + smallest)