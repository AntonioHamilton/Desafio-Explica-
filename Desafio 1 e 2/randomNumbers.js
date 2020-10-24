let bets = [];

function randomNumbers() {
  let randomNumbers = [];
  while (checkBets(randomNumbers)) {
    randomNumbers = randomArray();
  }
  console.log(bets);
  return randomNumbers;
}

function checkBets(randomNumbers) {
  if (randomNumbers.length === 0) {
    console.log("Continua");
    return true;
  }
  if (filterArray(randomNumbers)) {
    console.log("Continua");
    return true;
  }
  console.log("Termina");
  bets.push(randomNumbers);
  return false;
}

function randomArray() {
  let random = [];
  while (random.length != 6) {
    let number = Math.floor(Math.random() * 60 + 1);
    if (!random.includes(number)) {
      random.push(number);
      random.sort();
    }
  }
  return random;
}

function filterArray(randomNumbers) {
  const valor = bets.map((array) => {
    return array.map((itemArray) => {
      return randomNumbers.some((itemRandom) => {
        return itemRandom === itemArray;
      });
    });
  });

  const teste = valor.map((array) => {
    return array.every((item) => {
      return item === true;
    });
  });

  if (
    teste.some((item) => {
      return item === true;
    })
  ) {
    return true;
  }
}
