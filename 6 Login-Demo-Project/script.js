$("#loginButton").on("click",check);

function check() {
    debugger;
    var password1 = $("#pass1").val();
    var password2 = $("#pass2").val();

    if (password1 != ""  && password2 != "") {
        
        if(password1 == password2){
            alert("Successfully Login");
        }
        else{
            alert("Password Mismatch");
        }
    }
    else{
        alert("Please Enter Password");
    }
}