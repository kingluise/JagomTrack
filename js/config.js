// config.js - global for all pages
document.addEventListener("DOMContentLoaded", () => {
  // Sidebar toggle
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("-translate-x-full");
    });
  }

  // Logout button
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      window.location.href = "login.html";
    });
  }
});
