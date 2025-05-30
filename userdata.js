const greeting = document.getElementById("userGreeting");
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const logoutBtn = document.getElementById("logout-btn");
window.addEventListener("DOMContentLoaded", () => {
  const user =
    JSON.parse(localStorage.getItem("user")) ||
    JSON.parse(sessionStorage.getItem("user"));

  if (user && user.email) {
    const email = user.email;
    const username = email.split("@")[0];
    greeting.textContent = `Hello, ${username}`;
    greeting.style.display = "inline"; // or "block"
    greeting.style.textTransform = "capitalize";
    loginBtn.style.display = "none";
    registerBtn.style.display = "none";
    logoutBtn.style.display = "inline"; // or "block"
  } else {
    greeting.style.display = "none";
  }
});

function logout() {
  localStorage.removeItem("user");
  sessionStorage.removeItem("user");
  window.location.reload(); // or redirect to login
}
