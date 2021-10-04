function getRandomNumber (from, to) {
  if (to < 0) {
    return 'Введите положительное число > 0 || == 0';
  }
  from = Math.ceil(from);
  to = Math.floor(to);
  return Math.floor(Math.random() * (to - from)) + from;
}

getRandomNumber(2,10);

function getRandomCoor (from, to, reminder) {
  if (from >= to) {
    return Number(((Math.random() * (from - to)) + to).toFixed(reminder));
  }
  return Number(((Math.random() * (to - from)) + from).toFixed(reminder));
}

getRandomCoor(20, 30, 5);
