/*# Завдання 3

Створіть об'єкт "Користувач" з властивостями "ім'я", "прізвище" та масивом
"друзів". У цьому масиві зберігаються об'єкти, кожен з яких містить ім'я та
прізвище друга.

Створіть функцію "вивестиДрузів", яка використовує метод масиву "forEach" для
перебору масиву друзів користувача та виводу їх імені та прізвища у консоль. У
цій функції використовуйте ключове слово "this" для звернення до поточного
об'єкту.

Створіть ще один об'єкт "Користувач" зі своїми властивостями та масивом друзів
та викличте функцію "вивестиДрузів" для обох об'єктів, передаючи контекст через
методи "call()" чи "apply()". Виведіть результат у консоль.
*/
 
const user1 = {
    firstName: 'John',
    lastName: 'Doe',
    friends: [
        { firstName: 'Jane', lastName: 'Doe' },
        { firstName: 'Bob', lastName: 'Smith' },
        { firstName: 'Alice', lastName: 'Wonderland' },
    ],
    
    printFriends: function() {
        this.friends.forEach(function(friend) {
            console.log(friend.firstName + ' ' + friend.lastName);
        });
    }
};

const user2 = {
    name: 'Juan',
    surname: 'Hernandez',
    friends: [
        { name: 'Maria', surname: 'Garcia' },
        { name: 'Carlos', surname: 'Rodriguez' },
        { name: 'Ana', surname: 'Lopez' },
    ],

    printFriends: function() {
        this.friends.forEach(function(friend) {
            console.log(friend.name + ' ' + friend.surname);
        });
    }
};

user1.printFriends();   
user2.printFriends();   
