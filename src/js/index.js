const MAXNUM = 6;
const MINNUM = 1;

const [button1, button2, button3] = document.querySelectorAll(".dice-button");

const rollDice = (buttonNum) => {
  const num = getRandomNumberBetween(MINNUM, MAXNUM);
  const img = document.querySelector(`#dice${buttonNum} img`);
  img.src = `dice/dice-${num}.png`;
}

const getRandomNumberBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

button1.addEventListener("click", () => { rollDice(1); });
button2.addEventListener("click", () => { rollDice(2); });
button3.addEventListener("click", () => { rollDice(3); });
