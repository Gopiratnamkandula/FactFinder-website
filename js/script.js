function validateUsername(username) {
  return /^[A-Za-z]+$/.test(username);
}

function validatePassword(password) {
  return /^[A-Za-z0-9]+$/.test(password);
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!validateUsername(username)) {
      alert("Username must contain only alphabets (A–Z or a–z).");
      return;
    }

    if (!validatePassword(password)) {
      alert("Password must contain only letters and numbers.");
      return;
    }
    
    

    // ✅ If everything is valid, redirect to the new page
    alert("Login successful!");
    window.location.href = "index.html";
  });
document.getElementById("togglePassword").addEventListener("click", function () {
  const password = document.getElementById("password");
  const type = password.type === "password" ? "text" : "password";
  password.type = type;
  this.classList.toggle("fa-eye-slash");
});


});
