/*# Завдання 5

Створіть об'єкт `car`, який містить властивості марка, модель, рік випуску,
швидкість.

Створіть ще один обʼєкт `location`, який містить властивість `city` та
`distance`

Створіть метод обʼєкта car `showInfo()`, який виводить інформацію про автомобіль
на екран у форматі
`Марка: <марка>; Модель: <модель>; Рік випуску: <рік випуску>; `.

Створіть функцію `showTime()`, яка буде вираховувати за який час автомобіль
доїде до міста `city` та виводити в консоль повідомлення в форматі
`Автомобіль {brand}, марки {model} дістанеться міста {city} за {time}`

Використовуйте обєднання обʼєктів, метод forEach та ключове слово this для
доступу до властивостей об'єкту.
*/

const car = {
    brand: "Audi",
    model: "Q8",
    year: 2023,
    speed: 180,
    showInfo() {
      console.log(`Brand: ${this.brand}; Model: ${this.model}; Year: ${this.year}`);
    }
};
  
const location = {
    city: "Vinnytsia",
    distance: 400
};
  
function showTime(car, location) {
    const time = location.distance / car.speed;
    console.log(`Car ${car.brand}, brand ${car.model} reach the city ${location.city} in ${time} hours`);
};
car.showInfo();
showTime(car, location);

const car2 = {
    brand: "Audi",
    model: "RS7",
    year: 2023,
    speed: 240,
    showInfo() {
      console.log(`Brand: ${this.brand}; Model: ${this.model}; Year: ${this.year}`);
    }
};
  
const location2 = {
    city: "Kyiv",
    distance: 320
};
car2.showInfo();
showTime(car2, location2);
  