function getRandomNumber (from, to) {
  if (to < 0) {
    return console.log('Введите положительное число > 0 || == 0');
  }
    from = Math.ceil(from);
    to = Math.floor(to);
    return Math.floor(Math.random() * (to - from)) + from;
}

console.log(getRandomNumber(2,10));

function getRandomCoor (from, to, reminder) {
  if (from >= to) {
    return ((Math.random() * (from - to)) + to).toFixed(reminder);;
  }
  return ((Math.random() * (to - from)) + from).toFixed(reminder);
}

console.log(getRandomCoor(20, 30, 5));
