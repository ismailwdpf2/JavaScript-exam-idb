var num1 = Number(prompt('value1'));
var num2 = Number(prompt('value2'));
var num3 = Number(prompt('value3'));
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
document.write(smallest)