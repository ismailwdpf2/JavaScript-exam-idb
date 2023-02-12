var usern = prompt("Input Number");
function isPrime(n) {
    if (n < 2) { alert("enter number greater than 1"); return; };
    if (n == 2) { alert("2 is Prime"); return; };
    let prime = true;
    let culprit;
    for (let i = 2; i < n; i++) {
        // console.log(!n%i);
        if (!(n % i)) { prime = false; culprit = i; break; }
    }
    if (prime) alert(usern + " is Prime");
    else alert(usern + " is not prime bcs of this " + culprit);
}
isPrime(usern);