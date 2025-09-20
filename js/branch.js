// Logout
document.getElementById('logoutBtn').addEventListener('click', () => {
  window.location.href = 'login.html';
});

// Branch management
const branchForm = document.getElementById('branchForm');
const branchTable = document.getElementById('branchTable');
const branches = [];

// Add new branch
branchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const branchNameInput = document.getElementById('branchName');
  const name = branchNameInput.value.trim();
  if (!name) return;

  branches.push({ name, members: [] });
  branchNameInput.value = '';
  renderBranches();
});

// Render branches table
function renderBranches() {
  branchTable.innerHTML = '';
  branches.forEach((branch, index) => {
    const row = document.createElement('tr');
    row.classList.add('table-row');
    row.innerHTML = `
      <td class="py-2">${branch.name}</td>
      <td class="py-2">
        <button class="btn-primary px-3 py-1 rounded text-sm" data-index="${index}">
          View Members (${branch.members.length})
        </button>
        <div class="member-table p-2 mt-2 text-gray-300"></div>
      </td>
    `;
    branchTable.appendChild(row);

    const btn = row.querySelector('button');
    const memberDiv = row.querySelector('.member-table');

    btn.addEventListener('click', () => {
      if (memberDiv.style.display === 'block') {
        memberDiv.style.display = 'none';
      } else {
        memberDiv.style.display = 'block';
        memberDiv.innerHTML = branch.members.length
          ? branch.members.map(m => `<div>${m}</div>`).join('')
          : '<div>No members in this branch</div>';
      }
    });
  });
}
