document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".mobile-menu");
  const menu = document.querySelector(".menu");

  mobileMenu.addEventListener("click", function () {
    menu.classList.toggle("show");
  });
});

function processRegistration(event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // Validate username and password
  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  // Encrypt password
  let encryptedPassword = btoa(password);

  // Store username and encrypted password securely
  sessionStorage.setItem(username, encryptedPassword);

  alert("Registration successful!");
}

function processLogin(event) {
  event.preventDefault();

  let usernameEntered = document.getElementById("username").value;
  let passwordEntered = document.getElementById("password").value;

  // Retrieve encrypted password
  let encryptedPassword = sessionStorage.getItem(usernameEntered);

  if (!encryptedPassword) {
    alert("User not found. Please register first.");
    return;
  }

  // Decrypt password
  let decryptedPassword = atob(encryptedPassword);

  if (passwordEntered === decryptedPassword) {
    alert("Login successful!");
  } else {
    alert("Invalid username or password. Please try again.");
  }
}
