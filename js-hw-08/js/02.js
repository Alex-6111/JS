// # Задача 2

// Напишіть функцію, яка приймає об'єкт, який містить інформацію про користувача -
// ім'я, прізвище, електронну пошту та номер телефону. Функція повинна
// використовувати деструктуризацію для отримання імені та прізвища користувача та
// об'єкту, який містить електронну пошту та номер телефону. Функція повинна
// повертати новий об'єкт, який містить імена та прізвище користувача, а також
// масив, який містить електронну пошту та номер телефону користувача.

// Крім того, використовуйте spread та rest оператори, щоб додати додаткові
// елементи до масиву з електронною поштою та номером телефону.

 
const user = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@example.com',
  phone: '+1234567890',
  skype: 'johndoe',
  telegram: '@johndoe',
  twitter: '@johndoe',
};

function getUserInfo(user) {
    const {firstName, lastName, ...props} = user;
    const userArr = Object.entries(props).map(([k, v]) => ({ [k]: v }));
    return {
        name: `${firstName} ${lastName}`,
        contact: [ ...userArr, { email: user.email, phone: user.phone, } ]
    };
};

console.log(getUserInfo(user));