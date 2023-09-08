const userName = document.getElementById('userName');
const password = document.getElementById('password');
const btnLogin = document.getElementById('btn-login');

btnLogin.addEventListener("click", () => {
    let user = userName.value;
    let pass = password.value;
    console.log(user, pass);
    fetch(`http://localhost:8080/admin/${user}/${pass}`)
        .then(response => response.json())
        .then(res => {
            if (res == true) {
                window.open("../student.html", "_top");
            } else {
                alert("Wrong")
                userName.value = "";
                password.value = "";
                userName.style.borderColor = 'Red';
                password.style.borderColor = 'Red';
                reset();
            }
        })

    function reset() {
        const fields = [userName, password];
        for (let i = 0; i < fields.length; i++) {
            fields[i].addEventListener("keypress", () => {
                fields[i].style.borderColor = 'Black';
            });

        }
    }

})