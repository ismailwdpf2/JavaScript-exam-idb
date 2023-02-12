function check() {
    let mcq = document.getElementById("mcq").value;
    let d = document.getElementById("desc").value;
    let e = document.getElementById("ev").value;
    // if(mcq >=80 && d >= 60 && e >=60){
    if (mcq >= 80 || d >= 60 || e >= 60) {
        document.getElementById("result").innerHTML = "passed";
    }
    else {
        document.getElementById("result").innerHTML = "failed";
    }
}