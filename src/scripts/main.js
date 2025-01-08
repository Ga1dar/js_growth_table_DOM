'use strict';

// write code here
const appendRowButton = document.querySelector('.append-row.button');
const removeRowButton = document.querySelector('.remove-row.button');
const appendColumnButton = document.querySelector('.append-column.button');
const removeColumnButton = document.querySelector('.remove-column.button');
const table = document.querySelector('.field');

appendRowButton.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');

  if (rows.length === 10) {
    appendRowButton.disabled = true;

    return;
  }

  const lastRow = rows[rows.length - 1];
  const newRow = lastRow.cloneNode(true);

  table.appendChild(newRow);
  removeRowButton.disabled = false;
});

removeRowButton.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');

  if (rows.length === 2) {
    removeRowButton.disabled = true;

    return;
  }

  table.removeChild(rows[rows.length - 1]);
  appendRowButton.disabled = false;
});

appendColumnButton.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');

  if (rows[0].children.length === 10) {
    appendColumnButton.disabled = true;

    return;
  }

  rows.forEach((row) => {
    const newCell = document.createElement('td');

    row.appendChild(newCell);
  });
  removeColumnButton.disabled = false;
});

removeColumnButton.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');

  if (rows[0].children.length === 2) {
    removeColumnButton.disabled = true;

    return;
  }

  rows.forEach((row) => {
    row.removeChild(row.lastChild);
  });
  appendColumnButton.disabled = false;
});
