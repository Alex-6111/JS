const arr = [23, 1, 45, 87, 4, 55, 6];
let maxNumber = 0;

for (const number of arr) {
  if (number > maxNumber) {
    maxNumber = number;
  }
}
console.log(`Найбільше число у масиві: ${maxNumber}`);
