function check() {
    //alert(document.getElementsByName("course")[1].checked);
    var uname = document.getElementById("uname").value;
    var contact = document.getElementById("contact").value;
    var remark = document.getElementById("remark").value;
    var sex = document.a.s.value;
    // var sex = document.forms[0].s.value;
    /* 			var coursearr = document.getElementsByName("course");
        var course = [];
        for (var i = 0; i < coursearr.length; i++) {
            if (coursearr[i].checked) {
                course.push(coursearr[i].value);
            }
            //alert(course);	
        } */
    let course = [];
    var markedCheckbox = document.querySelectorAll('input[name="course"]:checked');
    for (var checkbox of markedCheckbox) {
        //document.getElementById("result").append(checkbox.value + ' ');  
        course.push(checkbox.value);
    }
    var loc = document.getElementById("loc").value;
    var w = window.open("", "", "width=400,height=300");
    w.document.write("Uname: " + uname + "<br>");
    w.document.write("Contact: " + contact + "<br>");
    w.document.write("Remark: " + remark + "<br>");
    w.document.write("Sex: " + sex + "<br>");
    w.document.write("Course: " + course + "<br>");
    w.document.write("Location: " + loc + "<br>");
    //w.close();	
}