function login(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Dummy login check
  if (username === "admin" && password === "admin123") {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials! Try admin / admin123");
  }
}

