/*# Завдання 4

Створіть об'єкт `person`, який містить властивості `name`, `age`, `gender` та
метод `introduce()`, який повертає рядок зі словами
`Мене звати {ім'я}, мені {вік} років я {стать}`.

Додайте до об'єкту `person` метод `changeName(newName)`, який змінює властивість
`name` на нове ім'я.

Використайте ключове слово `this` для доступу до властивостей об'єкту.
*/

const person = {
    name: '',
    age: 0,
    gender: '',
    
    introduce() {
      return `My name is ${this.name}, i am ${this.age} years, my gender ${this.gender}.`;
    },
  
    changeName(newName) {
      this.name = newName;
    }
  };
  
  
  person.name = 'Bob';
  person.age = 29;
  person.gender = 'man';
  
  console.log(person.introduce());  
  
  person.changeName('Tom');
  console.log(person.introduce());  
  