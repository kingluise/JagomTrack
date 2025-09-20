// attendance.js
document.addEventListener("DOMContentLoaded", () => {
  const startTrackingBtn = document.getElementById("startTrackingBtn");
  const codeInputSection = document.getElementById("codeInputSection");
  const applyCodeBtn = document.getElementById("applyCodeBtn");
  const memberDetailsSection = document.getElementById("memberDetailsSection");
  const markAttendanceBtn = document.getElementById("markAttendanceBtn");
  const checkedInTbody = document.getElementById("checkedInTbody");
  const logoutBtn = document.querySelector("header button.bg-red-600");

  let currentMember = null; // store current member details

  // Simulated database of members keyed by code
  const memberDatabase = {
    "ABC123": { name: "John Doe", email: "john@example.com", branch: "Opebi" },
    "XYZ789": { name: "Jane Smith", email: "jane@example.com", branch: "Ikorodu" },
    "LMN456": { name: "Samuel Johnson", email: "samuel@example.com", branch: "Otuyelu" },
  };

  // 1️⃣ Show code input field when Start Tracking is clicked
  startTrackingBtn.addEventListener("click", () => {
    codeInputSection.classList.remove("hidden");
    memberDetailsSection.classList.add("hidden");
  });

  // 2️⃣ Apply code to fetch member info
  applyCodeBtn.addEventListener("click", () => {
    const code = document.getElementById("attendanceCode").value.trim();
    if (!code) {
      alert("Please enter an attendance code.");
      return;
    }

    if (memberDatabase[code]) {
      currentMember = memberDatabase[code];
      // Populate member details
      document.getElementById("memberName").textContent = currentMember.name;
      document.getElementById("memberEmail").textContent = currentMember.email;
      document.getElementById("memberBranch").textContent = currentMember.branch;

      memberDetailsSection.classList.remove("hidden");
    } else {
      alert("Invalid attendance code.");
      memberDetailsSection.classList.add("hidden");
      currentMember = null;
    }
  });

  // 3️⃣ Mark attendance
  markAttendanceBtn.addEventListener("click", () => {
    if (!currentMember) return;

    // Remove "No records yet" if present
    const noRecordsRow = checkedInTbody.querySelector("tr td[colspan='3']");
    if (noRecordsRow) checkedInTbody.innerHTML = "";

    // Add member to table
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="py-2">${currentMember.name}</td>
      <td class="py-2">${currentMember.email}</td>
      <td class="py-2">${currentMember.branch}</td>
    `;
    checkedInTbody.appendChild(row);

    // Clear input & hide member details
    document.getElementById("attendanceCode").value = "";
    memberDetailsSection.classList.add("hidden");
    currentMember = null;

    alert("Member marked as present!");
  });

  // 4️⃣ Logout redirect
  logoutBtn.addEventListener("click", () => {
    window.location.href = "login.html";
  });
});
