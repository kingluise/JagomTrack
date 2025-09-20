// login.js

// Mock users data for demonstration
const users = [
  { email: "admin@example.com", password: "admin123", role: "admin" },
  { email: "operator@example.com", password: "operator123", role: "operator" }
];

// Create toast notification function
function showToast(message, type = "success") {
  // Remove existing toast if present
  const existing = document.querySelector(".toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = `toast fixed top-5 right-5 px-6 py-4 rounded-lg shadow-lg text-white font-semibold transition-all duration-300 ${
    type === "success" ? "bg-green-500" : "bg-red-500"
  }`;
  toast.textContent = message;

  document.body.appendChild(toast);

  // Fade out after 2.5s
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 500);
  }, 2500);
}

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const role = document.getElementById("role").value;

    // Basic validation
    if (!email || !password || !role) {
      showToast("Please fill in all fields.", "error");
      return;
    }

    // Check credentials
    const user = users.find(
      u => u.email === email && u.password === password && u.role === role
    );

    if (user) {
      showToast(`Welcome, ${user.role}! Redirecting...`, "success");

      // Redirect after short delay (2 seconds)
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 2000);
    } else {
      showToast("Invalid credentials or role. Try again.", "error");
    }
  });
});
