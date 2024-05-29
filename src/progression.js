import playGame from './index.js';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (start, step, length) => {
  return Array.from({ length }, (_, index) => start + index * step);
};

const generateRound = () => {
  const progressionLength = generateRandomNumber(5, 10);
  const startNumber = generateRandomNumber(1, 50);
  const step = generateRandomNumber(1, 10);
  const progression = generateProgression(startNumber, step, progressionLength);

  const hiddenElementIndex = generateRandomNumber(0, progressionLength - 1);
  const correctAnswer = progression[hiddenElementIndex].toString();
  progression[hiddenElementIndex] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};

const description = 'What number is missing in the progression?';

const startProgressionGame = () => playGame(description, generateRound);

export default startProgressionGame;
