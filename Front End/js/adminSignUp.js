const showPassword = document.querySelector("#show-password");
const passwordField = document.getElementById("password-ad");
const hidePassword = document.querySelector("#hide-password")

const userName = document.getElementById("userName-ad");
const email = document.getElementById("email-ad");
const btnReg = document.getElementById("admin-reg");

btnReg.addEventListener("click", () => {
    let admin = {
        "adminName": userName.value,
        "adminEmail": email.value,
        "adminPassword": passwordField.value
    }

    fetch("http://localhost:8080/admin", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(admin)
    })
        .then(res => res.json())
        .then(data => {

        })
    userName.value = "";
    email.value = "";
    passwordField.value = "";


})


showPassword.addEventListener("click", () => {
    showPassword.style.visibility = "hidden";
    hidePassword.style.visibility = "visible";
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
});

hidePassword.addEventListener("click", () => {
    showPassword.style.visibility = "visible";
    hidePassword.style.visibility = "hidden";
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
});

