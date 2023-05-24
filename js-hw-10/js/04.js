// # Задача 4

// Необхідно створити функцію, яка приймає масив імен та callback-функцію. Функція
// повинна викликати callback-функцію з іменем, яке містить найбільшу кількість
// літер.

 
const names = ['Андрій', 'Олександр', 'Максим', 'Юлія', 'Наталія'];

function getLongestName(names, callback) {
    let longestName = '';
    for (let i = 0; i < names.length; i++) {
        if (names[i].length > longestName.length) {
            longestName = names[i];
        }
    }
    callback(longestName);
};

function callbackFunction(name){
    console.log('Найбільша кількість символів у імені: ' + name);
}

getLongestName(names, callbackFunction);
