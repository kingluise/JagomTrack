// members.js

document.addEventListener("DOMContentLoaded", () => {

  // --- Logout functionality ---
  const logoutBtn = document.querySelector("header button.bg-red-600");
  logoutBtn.addEventListener("click", () => {
    window.location.href = "login.html"; // redirect to login page
  });

  // --- Add Member form toggle ---
  const addMemberDetails = document.querySelector("details");
  const addMemberButton = addMemberDetails.querySelector("summary button");

  // Initially hide the form
  addMemberDetails.removeAttribute("open");

  addMemberButton.addEventListener("click", (e) => {
    e.preventDefault(); // prevent default summary toggle
    if (addMemberDetails.hasAttribute("open")) {
      addMemberDetails.removeAttribute("open");
    } else {
      addMemberDetails.setAttribute("open", "");
      addMemberDetails.scrollIntoView({ behavior: "smooth" });
    }
  });

  // --- Optional: dynamic table population (demo) ---
  const form = addMemberDetails.querySelector("form");
  const tbody = document.querySelector("tbody");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = form.querySelectorAll("input, select");
    const memberData = Array.from(inputs).map(input => input.value.trim());

    if (memberData.includes("")) {
      alert("Please fill in all fields.");
      return;
    }

    // Remove placeholder row if exists
    const placeholder = tbody.querySelector("td[colspan='5']");
    if (placeholder) placeholder.remove();

    // Create new row
    const tr = document.createElement("tr");
    tr.className = "hover:bg-gray-700 transition";
    tr.innerHTML = `
      <td class="py-2">${memberData[0]} ${memberData[1]}</td>
      <td class="py-2">${memberData[2]}</td>
      <td class="py-2">${memberData[3]}</td>
      <td class="py-2">${memberData[4]}</td>
      <td class="py-2">
        <button class="px-2 py-1 bg-yellow-500 rounded text-sm mr-2">Edit</button>
        <button class="px-2 py-1 bg-red-600 rounded text-sm">Delete</button>
      </td>
    `;
    tbody.appendChild(tr);

    form.reset();
    addMemberDetails.removeAttribute("open"); // hide form after submission
  });
});
