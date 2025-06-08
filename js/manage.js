const form = document.getElementById('clientForm');
const tableBody = document.querySelector('#clientTable tbody');

let editingRow = null;

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('clientName').value;
  const email = document.getElementById('clientEmail').value;
  const company = document.getElementById('clientCompany').value;
  const status = document.getElementById('clientStatus').value;

  if (editingRow) {
    // Update existing row
    editingRow.cells[0].innerText = name;
    editingRow.cells[1].innerText = email;
    editingRow.cells[2].innerText = company;
    editingRow.cells[3].innerText = status;
    editingRow = null;
  } else {
    // Create new row
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${name}</td>
      <td>${email}</td>
      <td>${company}</td>
      <td>${status}</td>
      <td>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  }

  form.reset();
});

// Handle Edit/Delete using event delegation
tableBody.addEventListener('click', function(e) {
  const target = e.target;
  const row = target.closest('tr');

  if (target.classList.contains('delete-btn')) {
    row.remove();
  }

  if (target.classList.contains('edit-btn')) {
    document.getElementById('clientName').value = row.cells[0].innerText;
    document.getElementById('clientEmail').value = row.cells[1].innerText;
    document.getElementById('clientCompany').value = row.cells[2].innerText;
    document.getElementById('clientStatus').value = row.cells[3].innerText;
    editingRow = row;
  }
});
