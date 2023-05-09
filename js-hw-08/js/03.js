// # Задача 3

// Необхідно створити функцію, яка приймає будь-яку кількість аргументів (чисел) і
// повертає максимальне значення серед них. Аргументи можуть бути передані як
// окремими значеннями, так і в масиві.

 function findMax() {
 
    let args = [];

    for (let i = 0; i < arguments.length; i++) {
      if (Array.isArray(arguments[i])) {
        args.push(...arguments[i]);
      } else {
        args.push(arguments[i]);
      }
    }

    let max = args[0];

    for (let i = 1; i < args.length; i++) {
      if (args[i] > max) {
        max = args[i];
      }
    }
    return max;
 };

console.log(findMax(1, 4, 2, 8, 5));  // поверне 8
console.log(findMax([1, 4, 2], 8, 5)); // поверне 8
console.log(findMax(1, 4, [2, 8, 5])); // поверне 8
