document.addEventListener("DOMContentLoaded", function() {
    const email = document.getElementById("email");
    const tswitch = document.getElementById("toggle");
    const pswd = document.getElementById("pwd");
    const fplink = document.getElementById("fpw");
    const sgnbtn = document.getElementById("btn1");
    const aplbtn = document.getElementById("apl-btn");
    const gglbtn = document.getElementById("ggl-btn");
    const etxt1 = document.getElementById("etxt1");
    const etxt2 = document.getElementById("etxt2");

    sgnbtn.addEventListener("click", function() {
        const emailValue = email.value.trim(); //retrieves the value of "email" & trims any extra white space added
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; //checks if the email address is in correct email address format
        const pwdValue = pswd.value.trim(); //retrieves the value of password & trims any extra white space added

        if (emailValue ===  ""){ //checks if the value of "email" is empty
            etxt1.style.display = "block"; //if email is empty then "etxt1" displays an error message
        } else if (!emailPattern.test(emailValue)) { //checks if emailValue has the correct email format using "emailPattern"
            etxt1.style.display = "block"; //if email format is incorrect then "etxt1" displays an error message
        } else {
            etxt1.style.display = "none"; //removes error message if email is in the correct format
        }

        if (pwdValue.length < 8){ //checks if the pwdValue(password) length is at least 8 characters
            etxt2.style.display = "block"; //if password length is less than 8 characters an error msg displays
        } else {
            etxt2.style.display = "none"; //removes error msg if password is 8 characters or more

            email.value = ""; //clears email box after sgnbtn button is clicked
            pswd.value = ""; //clears password box after sgnbtn button is clicked
        }
    })

    tswitch.addEventListener("click", function() {
        if (pswd.type === "password"){ //checks if the (password)input box tyoe is password
            pswd.type = "text"; //changes the input box type to text to show password
        } else {
            pswd.type = "password"; //changes the input box type to text to hide password
        }
    })
})