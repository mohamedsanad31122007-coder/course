document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (name === "" || email === "" || password === "") {
        message.innerHTML = "All fields are required";
        return;
    }

    if (!email.endsWith("@azhar.edu.eg")) {
        message.innerHTML = "Email must end with @azhar.edu.eg";
        return;
    }

    if (password.length < 8) {
        message.innerHTML = "Password must be at least 8 characters";
        return;
    }

    message.innerHTML = "Form submitted successfully";

});