loginForm = document.getElementById("login")
email = document.getElementById("email")
password = document.getElementById("password")
info = document.getElementById("info")

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    newUser = localStorage.getItem("newUser");
    user = JSON.parse(newUser)

    if (email.value === user.username && password.value === user.password) {
        info.classList = `welcom ${user.firstName}`
    } else {
        info.classList.remove('hide')
        info.innerHTML = `username and or incorrect password`
    }
})