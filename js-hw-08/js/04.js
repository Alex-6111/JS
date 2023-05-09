// # Задача 4

// Уявімо, що ми маємо об'єкт з даними користувача:

 
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  email: 'john.doe@example.com',
  city: 'New York',
  country: 'USA',
};

function getUserInfo(user, { prefix = '' } = {}) {
    const { firstName, age, city } = user;
    const userInfo = `${firstName} is ${age} years old, lives in ${city}.`;
    return prefix + userInfo;
};
  
console.log(getUserInfo(user));  
console.log(getUserInfo(user, { prefix: 'User information: ' })); // "User information: John is 30 years old, lives in New York."

/*Напишіть функцію getUserInfo, яка буде приймати об'єкт user та використовуючи
деструктуризацію, буде повертати рядок, що містить ім'я, вік та місто
користувача.

Також, функція повинна приймати додатковий об'єкт з параметрами, який може
містити параметр prefix, який буде доданий перед рядком з інформацією про
користувача. Якщо параметр prefix не переданий, то функція повинна повертати
рядок з інформацією про користувача без префіксу.*/
