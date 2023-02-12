//2**3
var base = prompt("value of base?")
var power = prompt("value of power?")
// document.write(base + " to the power " + power + " is : " + base**power);
let result = base;
for (let i = 1; i < power; i++) {
    result = result * base;
}
document.write(base + " to the power " + power + " is : " + result);