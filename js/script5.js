/*5. Создайте программу, которая запрашивает у пользователя два целых числа ** a ** и ** b ** , после чего выводит на экран результаты следующих математических операций:

    -сумма a и b;

-
разница между a и b;

-
произведение a и b;

-
частное от деления a на b;

-
остаток от деления a на b;

-
результат возведения числа a в степень b*/


let a = Number(prompt("Введите число а"));
let b = Number(prompt("Введите число b"));

document.write(a + b + '<br>');
document.write(a - b + '<br>');
document.write(a / b + '<br>');
document.write(a % b + '<br>');
document.write(a ** b + '<br>');