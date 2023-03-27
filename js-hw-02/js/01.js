const salary = parseFloat(prompt("Введіть розмір вашої зарплати:"));

let bonus = salary * 0.15;
let totalIncome = salary + bonus;
let tax = totalIncome * 0.1;
const shoppingExpenses = 190;
let remainingSalary = salary + bonus - tax - shoppingExpenses;

alert(`Залишок від вашої зарплати: ${remainingSalary}`);
