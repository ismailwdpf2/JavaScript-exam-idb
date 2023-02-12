function factorial(n) {
    let f = 1;
    for (let i = n; i > 1; i--) {
        f = f * i; //1*1, 1*2, 2*3,6*4,24*5
    }
    return f;
}
document.write(factorial(prompt()));