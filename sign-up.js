document.getElementById('signupForm')
form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('Password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (username === "" || password === "" || confirmPassword === "") {
        console.log("All fields are required.");
        return;
    }

    if (password !== confirmPassword) {
        console.log("Passwords do not match.");
        return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    console.log('Account created successfully!');
    window.location.href = 'login.html';
});
