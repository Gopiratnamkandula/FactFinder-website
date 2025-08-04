
document.getElementById("updateBtn").addEventListener("click", function (e) {
  e.preventDefault(); // prevent page reload

  const newPassword = document.querySelector('input[name="newpsw"]').value.trim();
  const confirmPassword = document.querySelector('input[name="confirmpass"]').value.trim();

  if (newPassword === "" || confirmPassword === "") {
    alert("Please fill in both password fields.");
    return;
  }

  if (newPassword !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
    return;
  }

  // You can now send data to server or show success
  alert("Password successfully updated!");

  document.querySelector('input[name="newpsw"]').value = "";
  document.querySelector('input[name="confirmpass"]').value = "";
 
});

