//Задание 1
// noinspection InfiniteRecursionJS

let a = Number(prompt("Введите первое число:"));
let b = Number(prompt("Введите второе число:"));

console.log("Плюс: " + (a + b));
console.log("Минус: " + (a - b));
console.log("Умножение: " + (a * b));
console.log("Деление: " + (a / b));

//Задание 2
let input = prompt("Введите число(задание 2):");
let n = Number(input);

if (isNaN(n)) {
  console.log("Ошибка: это не число");
} else if (n > 0) {
  console.log("Положительное");
} else if (n < 0) {
  console.log("Отрицательное");
} else {
  console.log("Ноль");
}
 //Задание 3
let inputsecond = prompt("Введите возраст:");
if (inputsecond === null || inputsecond === "") {
  console.log("Ввод отменен");
} else if (isNaN(Number(inputsecond))) {
  console.log("Это не число");
} else if (Number(inputsecond) < 18) {
  console.log("Доступ запрещен");
} else {
  console.log("Доступ разрешён");
}
//Задание 4
let person = {
  name: "Иван",
  surname: "Иванов",
  age: 20
};
console.log(person.name);
console.log(person.surname);
console.log(person.age);

//Новые задачи
//Задача 1
function helloUser(userName) {
  console.log(`Привет, ${userName}`)
}
helloUser("Никита")

//Задание 2
const sum = (a, b, c) => {
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Ошибка: все параметры должны быть числами")
    return
  }
  console.log(a + b + c)
}

sum(1, 2, 3)
