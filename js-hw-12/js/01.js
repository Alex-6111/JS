/*Створіть масив об'єктів "студентів", який містить властивості "ім'я", "вік" та
"рейтинг". Додайте до масиву метод "вітатися", який буде повертати рядок з
привітанням зі зазначенням імені студента.

Використовуючи метод "map()", створіть новий масив, який містить привітання з
кожним студентом з масиву "студентів". Використовуючи метод "filter()", створіть
новий масив, який містить тільки ті об'єкти типу "студент", які мають рейтинг
вище заданого значення.

Створіть функцію "додати*рейтинг", яка приймає один аргумент - кількість балів,
на яку потрібно збільшити рейтинг студента. Викличте функцію "додати*рейтинг" на
кожному елементі масиву "студентів". Перевірте, що в контексті функції
"додати_рейтинг" значення "this" вказує на конкретний об'єкт "студент". Виведіть
новий масив зі зміненими рейтингами в консоль.
*/
const students = [
    {name: 'Bob', age: 28, rating: 75},
    {name: 'Petro', age: 19, rating: 95},
    {name: 'Mykola', age: 25, rating: 80},
    {name: 'Evgen', age: 32, rating: 62},
];

students.forEach(function(student) {
    student.hello = function() {
        return 'Hello, ' + this.name + '!';
    };
}); 

var greetings = students.map(function(student) {
    return student.hello();
});

console.log(greetings);

var higherRatedStudents = students.filter(function(student) {
    return student.rating > 85;
});
  
console.log(higherRatedStudents);

function addRating(newRating) {
    this.rating += newRating;
};
students.forEach(function(student) {
    addRating.call(student, 5);
});
  
console.log(students);