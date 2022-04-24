const validInput = (n) => {
  return 0 <= n && n <= 1000000;
};

const calcNote = (num, num2) => {
  if (num >= num2) {
    let change = parseInt(num / num2);
    num -= change * num2;
    console.log(`${change} nota(s) de R$ ${num2}.00`);
  }
  return num;
};

const calcCoin = (num, num2) => {
  if (num >= num2) {
    let change = parseInt(num.toFixed(2) / num2);
    num -= change * num2;
    console.log(`${change} moeda(s) de R$ ${num2.toFixed(2)}`);
  }
  return num;
};

const calculateChange = (num) => {
  const notes = [200, 100, 50, 20, 10, 5, 2];
  const coins = [1, 0.5, 0.25, 0.1, 0.05, 0.01];
  notes.forEach((note) => {
    num = calcNote(num, note);
  });
  coins.forEach((coin) => {
    num = calcCoin(num, coin);
  });
};

let number = 0;
try {
  // you need a html file to make this line work
  number = parseInt(prompt("Please enter a number", "2000"));
} catch {
  number = 1368.78;
}

if (validInput(number)) calculateChange(number);
