// # Задача 3

// Необхідно створити функцію, яка приймає масив строк та callback-функцію. Функція
// повинна викликати callback-функцію з масивом, який містить тільки ті строки, які
// містять вказаний символ.

 
const arr4 = ['hello', 'world', 'javascript', 'callback'];
const char = 'a';

function filterStrings(arr, char, callback) {
    const filteredArray = arr.filter(str => str.includes(char));
    callback(filteredArray);
};

function callbackFunction(filteredArr){
    console.log('Відфільтрованний масив -> ' + filteredArr);
};

filterStrings(arr4, char, callbackFunction);