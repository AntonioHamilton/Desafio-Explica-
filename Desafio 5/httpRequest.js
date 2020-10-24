function httpRequest(qtdUsers) {
  return fetch(`https://randomuser.me/api/?results=${qtdUsers}`)
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      return JSON.parse(data);
    });
}

async function generateTable(qtdUsers) {
  const element = document.getElementById("table-info");
  const tableBody = document.createElement("tbody");
  const data = await httpRequest(qtdUsers);
  data.results.map((user) => {
    const row = document.createElement("tr");
    row.appendChild(generateImage(user.picture));
    row.appendChild(generateName(user.name));
    row.appendChild(generateContact(user.phone, user.cell));
    row.appendChild(generateEmail(user.email));
    row.appendChild(
      generateAddress(
        user.location.street,
        user.location.city,
        user.location.state
      )
    );
    row.appendChild(generateCountry(user.location.country));
    tableBody.appendChild(row);
    tableBody.className = "table-row";
    element.appendChild(tableBody);
  });
}

function generateAddress(street, city, state) {
  const cell = document.createElement("td");
  cell.className = "table-cell";
  const fullAdress = `${street.name}, ${street.number}, ${city}, ${state}`;
  cell.innerText = fullAdress;
  return cell;
}

function generateCountry(country) {
  const cell = document.createElement("td");
  cell.className = "table-cell";
  cell.innerText = country;
  return cell;
}

function generateEmail(email) {
  const cell = document.createElement("td");
  cell.className = "table-cell";
  cell.innerText = email;
  return cell;
}

function generateContact(phone, cellphone) {
  const cell = document.createElement("td");
  cell.className = "table-cell";
  const contact = `${phone}, ${cellphone}`;
  cell.innerText = contact;
  return cell;
}

function generateImage(picture) {
  const cell = document.createElement("td");
  const image = document.createElement("img");
  image.className = "table-image";
  image.setAttribute("src", picture.thumbnail);
  cell.appendChild(image);
  cell.className = "table-cell";
  return cell;
}

function generateName(name) {
  const cell = document.createElement("td");
  cell.className = "table-cell";
  const fullName = `${name.title} ${name.first} ${name.last}`;
  cell.innerText = fullName;
  return cell;
}
