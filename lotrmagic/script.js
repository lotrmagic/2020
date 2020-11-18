function checkPswd(password, errorMess) {
        var confirmPassword = password;
        var password = document.getElementById("pswd").value;
        if (password == confirmPassword) {
             window.location="arnor.htm";
        }
        else{
            alert(errorMess);
        }
    }