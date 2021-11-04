console.log('module 1.2')
  

// // === break===

// for (let i = 0; i < 1000; i += 5) {
//     // console.log(i);
//     if (i  === 710) {
//       console.log(i);
//         break;
//     }         
// }

// // === continue ==

// for (let i = 0; i < 100; i += 1) {
//     if (!(i % 5 === 0)) {
//         continue;
//     }
//      console.log(i);
// }

// // ==== spam check===
// const checkForSpam = (message) => {
//     const words = ['spam', 'sale', 'hui'];
//     const str = message.toLowerCase();
//     let hasSpam = false;
//     for (let i = 0; i < words.length; i += 1) {
//         let word = words[i];
//         if (str.includes(word)) 
//                hasSpam = true;
//         break;
//         }
         
//     }

//     return hasSpam;
// }

// console.log(checkForSpam('SPam sapdfasfasf'));
// console.log(checkForSpam('SPaf'));
// console.log(checkForSpam('SALE sapdfasfasf'));
// console.log(checkForSpam('hui hui hui '));

/// ===== login check ====

// const checkForLogin = (userLogin) => {
//     const logins = ['admin', 'root', 'user'];
    
//     let hasLogin = false;
//     for (const login of logins) {
//         if (userLogin === login) {
//             hasLogin = true;
//         }
//     }

//     return hasLogin;
// }

// console.log(checkForLogin('user'));
// console.log(checkForLogin('root'));
// console.log(checkForLogin('admhuiin'));
// console.log(checkForLogin('user'));

// === Example 1 - Ввод пользователя и ветвления
// Используя конструкцию if..else и prompt, напиши код, который будет спрашивать: "Какое официальное название JavaScript?". 
// Если пользователь вводит ECMAScript, то показывай alert со строкой "Верно!", в противном случае - "Не знаете? ECMAScript!"

// const userInput = prompt("Какое официальное название JavaScript?");
// let answer;

// if (userInput === 'ECMAScript') {
//     answer = "Верно!";
// }    else {
//     answer = "Не знаете? ECMAScript!";
// }
// console.log(answer)


// Example 2 - Отображение времени (if...else)
// Напиши скрипт для отображения часов и минут в консоли браузера в виде строки формата "14 ч. 26 мин.". Если значение переменной minutes равно 0, то выводи строку "14 ч.", без минут.

// const hours = 14;
// const minutes = 26;
// const timestring = minutes > 0 ?  `${hours} ч. ${minutes} мин.`:`${hours} ч.`;

// console.log(timestring);


// Example 3 - Ветвеления
// // Напиши скрипт, который выводит в консоль строку "Это положительное число", если в prompt пользователь ввел число больше нуля. 
// Если был введен ноль, выводи в консоль строку "Это ноль".Если передали отрицательное число, в консоли должна быть строка
// "Это отрицательное число".

// const userInput = prompt('Введите число');
// const userNumber = parseInt(userInput);
// let answer;

// if (isNaN(userNumber)) {
//     answer = "not a number"
// }
// console.log(answer)
    
// if (userNumber > 0) {
//     answer = "Это положительное число";
// }
// else if (userNumber < 0) {
//     answer = "Это отрицательное число"
// }
// else if (userNumber === 0){
//     answer = "Это ноль"
// }
    
// console.log(answer)     


// Example 4 - Вложенные ветвления
// Напиши скрипт, который сравнивает числа в переменных a и b. Если оба значения больше 100, то выведи в консоль максимальное из них.
//  В противном случае в консоли должна быть сумма значения b и числа 512.

// const a = 120;
// const b = 20;

// const answer = a > 100 && b > 100 ? Math.max(a, b) : b + 512;
// console.log(answer)


// Example 5 - Форматирование ссылки (endsWith)
// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /.
//  Если нет, добавь в конец значения link этот символ.Используй конструкцию if...else.

// let link = 'https://my-site.com/about';

// if (!link.endsWith('/')) {
//     link += "/";
// }

// console.log(link);


// Example 6 - Форматирование ссылки (includes и логическое «И»)
// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /.
// Если нет, добавь в конец значения link этот символ, но только в том случае, если в link есть подстрока "my-site".
// Используй конструкцию if...else.

// let link = 'https://somesite.com/about';
// // Пиши код ниже этой строки

// // Пиши код выше этой строки
// console.log(link);



// Example 7 - Форматирование ссылки (тернарный оператор)
// Выполни рефакторинг кода задачи номер 4 используя тернарный оператор.

// let link = 'https://my-site.somesite.com/about';
// if (link.includes('my-site') && !link.endsWith('/')) {
//   link += '/';
// }
// console.log(link);

 
// Example 8 - if...else и логические операторы
// Напиши скрипт который будет выводить в консоль браузера строку в зависимости от значения переменной hours.

// Если значение переменной hours:

// меньше 17, выводи строку "Pending"
// // больше либо равно 17 и меньше либо равно 24, выводи строку "Expires"
// // больше 24 , выводи строку "Overdue"
// const hours = 26;
// let answer;

// if (hours < 17) {
//     answer = 'pending'
// }
// else if (hours >= 17 && hours <= 24) {
//     answer = "Expires"
// }
// else if (hours > 24){
//     answer = "Overdue"
// }

// console.log(answer)



// Example 9 - Дедлайн сдачи проекта (if...else)
// Напиши скрипт для отображения времени дедлайна сдачи проекта. Используй конструкцию if...else.

// Eсли до дедлайна 0 дней - выведи строку "Сегодня"
// Eсли до дедлайна 1 день - выведи строку "Завтра"
// Eсли до дедлайна 2 дня - выведи строку "Послезавтра"
// Eсли до дедлайна 3+ дней - выведи строку "Дата в будущем"
// const daysUntilDeadline = 5;
// // Пиши код ниже этой строки





// // Example 10 - Дедлайн сдачи проекта (switch)
// // Выполни рефакторинг кода задачи номер 5 используя switch.

// const daysUntilDeadline = -5;

// switch (daysUntilDeadline) {
//     case 0: {
//         console.log('Сегодня');
//         break;
//     }
//     case 1: {
//         console.log('Завтра');
//         break;
//     }
//     case 2: {
//         console.log('Послезавтра');
//     }
//     default:
//     console.log('Дата в будущем');
// }



// Example 11 - Цикл for
// // Напиши цикл for который выводит в консоль браузера числа по возрастанию от min до max, но только если число кратное 5.

// const max = 100;
// // const min = 20;

// // for (let i = min; i <= max; i += 1) {
// //     if (i % 5 === 0) {
// //         console.log(i);
// //     }
// // }

// // Example 12 - Ввод пользователя и ветвления
// // Напиши скрипт, который будет спрашивать логин с помощью prompt и логировать результат в консоль браузера.

// // Если посетитель вводит "Админ", то prompt запрашивает пароль
// // Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
// // В противном случае вывести строку "Я вас не знаю"
// // Пароль проверять так:

// // Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
// // Иначе выводить строку "Неверный пароль"

// const login = prompt('login');

// if (login === "Админ") {
//     const password = prompt('password')
//     if (password === "Я админ") {
//         console.log("Здравствуйте!")
//     }
//     else {
//         console.log("Неверный пароль")
//     }
// }
// else {
//     if (!login || login === null) {
//         console.log("Отменено")
//     }
//     else {
//         console.log("Я вас не знаю")
//     }
// }

