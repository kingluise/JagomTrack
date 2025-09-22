document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  // Check if we already added a dynamic container for welcome message
  let welcomeEl = header.querySelector("#welcomeMessage");
  if (!welcomeEl) {
    welcomeEl = document.createElement("h2");
    welcomeEl.id = "welcomeMessage";
    // Responsive font size: sm:text-sm (small on mobile), md:text-lg (larger on bigger screens)
    welcomeEl.className = "font-semibold text-sm sm:text-base md:text-xl";
    // Insert before logout button
    const logoutBtn = header.querySelector("#logoutBtn");
    header.insertBefore(welcomeEl, logoutBtn);
  }

  const welcomeMessage = "Welcome to JAGOM Attendance Management System!";
  const typingSpeed = 40; // ms per character
  const pauseTime = 2000; // pause after full message

  function loopTyping() {
    welcomeEl.textContent = "";
    let i = 0;
    function typeChar() {
      if (i < welcomeMessage.length) {
        welcomeEl.textContent += welcomeMessage.charAt(i);
        i++;
        setTimeout(typeChar, typingSpeed);
      } else {
        setTimeout(loopTyping, pauseTime);
      }
    }
    typeChar();
  }
  loopTyping();

  // Use the existing logout button in HTML
  const logoutBtn = header.querySelector("#logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      window.location.href = "index.html"; // redirect to login page
    });
  }
});
