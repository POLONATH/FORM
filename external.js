function valid() {
    let a = document.getElementById("firstname").value
    let h = document.getElementById("lastname").value
    let b = document.getElementById("inputEmail").value
    let c = document.getElementById("number").value
    let f = document.getElementById("password").value
    let j = document.getElementById("conformpassword").value
    var ele = document.getElementsByName("gender")
    if (a == "") {
        alert("Please enter your Name")
    }
    else {
        console.log("Name : ", a, h)
    }
    if (b == "") {
        alert("Please enter your email")
    }
    else {
        console.log("Email : ", b)
    }
    if (c == "") {
        alert("Please enter your phone number")
    }
    else {
        console.log("Phone Number : ", c)
    }
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            console.log("Gender : ", ele[i].value)
        }
    }
    if (f == j) {
        console.log("The both password and Conform password are the same.")
        console.log("The password is ", f)
    }
    else {
        alert("Please enter the same password in the conform password")
    }
}
function validate() {
    let a = document.getElementById("email").value
    let b = document.getElementById("password").value
    if (a != "") {
        console.log("Email id : ", a)
    }
    else {
        alert("Please enter your email id")
    }
    if (b != "") {
        console.log("Password : ", b)
    }
    else {
        alert("Please enter your password")
    }

}