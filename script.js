const form = document.getElementById("registerForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let isValid = true;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";
    document.getElementById("successMessage").textContent = "";

    const name =
    document.getElementById("name").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const password =
    document.getElementById("password").value;

    const confirmPassword =
    document.getElementById("confirmPassword").value;

    if(name === ""){
        document.getElementById("nameError").textContent =
        "Full name is required";
        isValid = false;
    }

    const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)){
        document.getElementById("emailError").textContent =
        "Enter a valid email address";
        isValid = false;
    }

    const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if(!passwordRegex.test(password)){
        document.getElementById("passwordError").textContent =
        "Password must contain uppercase, lowercase, number and special character";
        isValid = false;
    }

    if(password !== confirmPassword){
        document.getElementById("confirmPasswordError").textContent =
        "Passwords do not match";
        isValid = false;
    }

    if(isValid){

        document.getElementById("successMessage").textContent =
        "Registration Successful!";

        form.reset();
    }

});