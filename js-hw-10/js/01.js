// # Задача 1

// Необхідно створити функцію, яка приймає масив строк та callback-функцію. Функція
// повинна викликати callback-функцію з масивом, який містить тільки ті строки, які
// містять певне слово.
 

const arr = ['Hello World', 'Goodbye', 'JavaScript', 'World of Warcraft'];

function filterArray(arr, word, callback) {
    const filteredArray = arr.filter((str) => str.includes(word));
    callback(filteredArray);
};

function callbackFunction(filteredArray) {
    console.log(filteredArray);
};

filterArray(arr, 'of', callbackFunction);