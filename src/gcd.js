import playGame from '../index.js';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const gcd = (x, y) => {
  let a = x;
  let b = y;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const generateRound = () => {
  const num1 = generateRandomNumber(1, 100);
  const num2 = generateRandomNumber(1, 100);

  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();

  return [question, correctAnswer];
};

const description = 'Find the greatest common divisor of given numbers.';

const startGcdGame = () => playGame(description, generateRound);

export default startGcdGame;
