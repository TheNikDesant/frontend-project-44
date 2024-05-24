import playGame from '../../../index.js';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRound = () => {
  const num1 = generateRandomNumber(1, 100);
  const num2 = generateRandomNumber(1, 100);
  const operators = ['+', '-', '*'];
  const operator = operators[generateRandomNumber(0, operators.length - 1)];

  const question = `${num1} ${operator} ${num2}`;
  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }

  return [question, String(correctAnswer)];
};

const description = 'What is the result of the expression?';

const startCalcGame = () => playGame(description, generateRound);

export default startCalcGame;
