function generateTable(random) {
  const element = document.getElementById("container-table");

  let table = document.createElement("table");
  table.className = "table";
  let row = document.createElement("tr");
  let firstCell = document.createElement("td");
  firstCell.textContent = 1;
  row.appendChild(firstCell);

  for (let i = 1; i <= 60; i++) {
    let cell = document.createElement("td");
    cell.textContent = i + 1;
    if (i % 10 === 0) {
      table.appendChild(row);
      row = document.createElement("tr");
    }
    if (random.includes(i)) {
      cell.className = "random-number";
    }
    row.appendChild(cell);
  }

  element.appendChild(table);
}
