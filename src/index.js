
// task 1 
// const genres = ['Jazz', 'Blues'];
// // genres.push('Рок-н-ролл');
// // console.log(genres[0]);
// // console.log(genres[genres.length-1]);
// // console.log(genres.shift());
// // console.log(genres);

// genres.unshift('Country', 'Reggy')
// console.log(genres)

// task 2 
// Напиши скрипт для вычисления площади прямоугольника со сторонами,
// начения которых хранятся в переменной values в виде строки.
// Значения гарантированно разделены пробелом.

// const values = '8px 11px'

// const arr = values.split(' ')
// console.log(parseFloat(arr[0]) * parseFloat(arr[1]))

// Example 3 - Перебор массива
// Напиши скрипт для перебора массива fruits циклом for.Для каждого элемента массива выведи в консоль строку в формате номер_элемента:
// значение_элемента.Нумерация элементов должна начинаться с 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//     // console.log(fruits[i])
//     console.log(`${i+1}: ${fruits[i]}`)
// }




// // Example 4 - Массивы и циклы
// // Напиши скрипт который выводит в консоль имя и телефонный 
// номер пользователя.В переменных names и phones хранятся строки 
// имен и телефонных номеров, разделенные запятыми.Порядковый 
// номер имен и телефонов в строках указывают на соответствие.
// Количество имен и телефонов гарантированно одинаковое.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// for (let i = 0; i < namesArr.length; i += 1) {
//     console.log(`User ${namesArr[i]} phone: ${phonesArr[i]}`)
// }

// Example 5 - Массивы и строки
// Напиши скрипт который выводит в консоль все слова строки кроме первого
//  и последнего.Результирующая строка не должна начинаться или 
//  заканчиваться пробельным символом.Скрипт должен работать для любой строки.


// const string = 'Welcome to the future';

// const stringArr = string.split(' ');
// stringArr.pop();
// stringArr.shift();

// const res = stringArr.join(' ');
// console.log(res)

// Example 6 - Массивы и строки
// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.

// const string = 'Welcome to the future';

// console.log(string.split('').reverse().join(''))
// const strArr = string.split('');
// strArr.reverse();
// // console.log(strArr);

// // const resArr = [];

// // for (let i = strArr.length - 1; i >= 0; i -= 1) {
// //     resArr.push(strArr[i]);
// // }

// const resStr = strArr.join('');
// console.log(resStr)


// Example 7 - Сортировка массива с циклом
// Напиши скрипт сортировки массива строк в алфавитном порядке
// по первой букве элемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

// for (let i = 0; i < langs.length; i += 1) {
//     for (let j  = i +1; j < langs.length; j += 1) {
//         if (langs[i][0] > langs[j][0]) {
//             const tmp = langs[i];
//             langs[i] = langs[j];
//             langs[j] = tmp;
//         }
//      }
// }



// console.log(langs)


// Example 8 - Поиск элемента
// Напиши скрипт поиска самого маленького числа в массиве. 
// Код должен работать для любого массива чисел.Используй цикл для
// //  решения задачи.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];
// let max = numbers[0];

// for (const number of numbers) {
//     if (min > number) {
//         min = number;
//     }
//     if (max < number) {
//         max = number
//     }
// }


// console.log(min,max); // 1

