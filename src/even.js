import readlineSync from 'readline-sync';

const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (num) => num % 2 === 0;

const startEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const roundsToWin = 3;
  for (let i = 0; i < roundsToWin; i += 1) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startEvenGame;
