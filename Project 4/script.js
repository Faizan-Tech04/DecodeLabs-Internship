const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passwordError").innerText = "";
  document.getElementById("confirmError").innerText = "";
  document.getElementById("successMessage").innerText = "";

  document.getElementById("name").classList.remove("error");
document.getElementById("email").classList.remove("error");
document.getElementById("password").classList.remove("error");
document.getElementById("confirmPassword").classList.remove("error");

  let valid = true;
if (name === "") {

    document.getElementById("nameError").innerText =
    "Please enter your full name";

    document.getElementById("name")
    .classList.add("error");

    valid = false;
}

 if (!email.includes("@")) {

    document.getElementById("emailError").innerText =
    "Please enter a valid email address";

    document.getElementById("email")
    .classList.add("error");

    valid = false;
}

 if (password.length < 6) {

    document.getElementById("passwordError").innerText =
    "Password must contain at least 6 characters";

    document.getElementById("password")
    .classList.add("error");

    valid = false;
}
 if (password !== confirmPassword) {

    document.getElementById("confirmError").innerText =
    "Passwords do not match";

    document.getElementById("confirmPassword")
    .classList.add("error");

    valid = false;
}

  if (valid) {
    document.getElementById("popup").style.display = "flex";
  }
});

const passwordInput = document.getElementById("password");
const strength = document.getElementById("strength");





passwordInput.addEventListener("input", () => {

    let pass = passwordInput.value;

    if(pass.length < 6){

        strength.innerText = "";
        strength.style.color = "red";

    }

    else if(pass.length < 10){

        strength.innerText = "Medium Password";
        strength.style.color = "orange";

    }

    else{

        strength.innerText = "Strong Password";
        strength.style.color = "lime";

    }

});



const togglePassword =
document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {

    if(passwordInput.type === "password"){
        passwordInput.type = "text";
    }
    else{
        passwordInput.type = "password";
    }

});

window.closePopup = function(){

    document.getElementById("popup")
    .style.display = "none";

    form.reset();

    strength.innerText = "";

}