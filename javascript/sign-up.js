const form = document.getElementById("signupForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("userName").value;
  const password = document.getElementById("Password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (username === "" || password === "" || confirmPassword === "") {
    console.log("All fields are required.");
    return;
  }

  if (password !== confirmPassword) {
    console.log("Passwords do not match.");
    return;
  }

  newUser = {
    username: username,
    password: password,
  };

  localStorage.setItem("newUser", newUser);
  console.log("Account created successfully!");
});
