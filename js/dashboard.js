// dashboard.js

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  // Clear header content and set layout
  header.innerHTML = "";
  header.style.display = "flex";
  header.style.justifyContent = "space-between";
  header.style.alignItems = "center";
  header.style.position = "relative";

  // --- Left side: dynamic welcome message ---
  const leftContainer = document.createElement("div");
  const welcomeEl = document.createElement("h2");
  welcomeEl.className = "text-xl font-semibold";
  leftContainer.appendChild(welcomeEl);
  header.appendChild(leftContainer);

  const welcomeMessage = "Welcome to Jesus Army Global Outreach Ministry Attendance Management System!";
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
        // Pause and restart typing
        setTimeout(loopTyping, pauseTime);
      }
    }

    typeChar();
  }

  loopTyping();

  // --- Right side: date/time and logout ---
  const rightContainer = document.createElement("div");
  rightContainer.style.display = "flex";
  rightContainer.style.flexDirection = "column";
  rightContainer.style.alignItems = "flex-end";

  // Date/time
  const dateTimeEl = document.createElement("div");
  dateTimeEl.className = "text-sm text-gray-300 mb-2";
  rightContainer.appendChild(dateTimeEl);

  function updateTime() {
    const now = new Date();
    const formatted = now.toLocaleString("en-US", {
      weekday: "long", year: "numeric", month: "long", day: "numeric",
      hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true
    });
    dateTimeEl.textContent = formatted;
  }
  updateTime();
  setInterval(updateTime, 1000);

  // Logout button
  const logoutBtn = document.createElement("button");
  logoutBtn.className = "px-4 py-2 bg-red-600 rounded-lg text-sm font-medium hover:bg-red-700 transition";
  logoutBtn.textContent = "Logout";
  logoutBtn.addEventListener("click", () => {
    window.location.href = "login.html"; // redirect to login
  });
  rightContainer.appendChild(logoutBtn);

  header.appendChild(rightContainer);
});
