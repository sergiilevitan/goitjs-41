console.log('module 4.1');
  
// === advanced reduce method ===

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // console.log(tweets.reduce((acc, item) => acc + item.likes, 0))

// const flatTagsTogether = (acc, { tags }) => [...acc, ...tags];
// const countValues = (acc, item) => ({
//     ...acc,
//     [item]: acc[item] ? acc[item] + 1 : 1,
// });

// console.log(tweets.reduce(flatTagsTogether, []).reduce(countValues,{}))

// ==== Example 1 - Метод map

import { cars } from './cars.js';

// ==== Пусть функция getModels возвращает массив моделей (поле model) всех автомобилей.

// const getModels = cars => cars.map((car) => car.model)

// console.table(getModels(cars));

// == Пусть функция makeCarsWithDiscount возвращает новый массив объектов с изменным значением свойства price в зависимости от переданной скидки.

// const makeCarsWithDiscount = (cars, discount) =>
//     cars.map((car) => ({
//         ...car,
//         price: car.price - car.price * discount
//     })
// );

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

// ====== Пусть функция filterByPrice возвращает массив автомобилей цена которых меньше чем значение параметра threshold.

// const filterByPrice = (cars, threshold) =>  cars.filter((car) => car.price < threshold)
// ;

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// ===Пусть функция getCarsWithDiscount возвращает массив автомобилей свойство onSale которых true.

// const getCarsWithDiscount = cars => cars.filter(({onSale}) => onSale);

// console.table(getCarsWithDiscount(cars));

// ==== Example 5 - Метод filter Пусть функция getCarsWithType возвращает массив автомобилей тип которых совпадает со значением параметра type.

// const getCarsWithType = (cars, type) =>
//     cars.filter((car) => car.type === type );

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));

// const getCarByModel = (cars, model) => cars.find(({model: carModel})  => carModel === model);

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

// ==== Пусть функция sortByAscendingAmount возвращает новый массив автомобилей отсортированный по возврастанию значения свойства amount.

// const sortByDescendingPrice = cars =>
//     [...cars].sort((car1,car2) => car1.amount - car2.amount);

// console.table(sortByDescendingPrice(cars));

//  =====  Пусть функция sortByModel возвращает новый массив автомобилей отсортированный по названию модели в алфавитном и обратном алфавитном порядке, в засисимости от значения параметра order.

// const sortByModel = (cars, order) =>
//     [...cars].sort((car1, car2) =>
//         order === 'desc'
//         ? car2.model.localeCompare(car1.model)
//         : car1.model.localeCompare(car2.model)
//     )
// ;

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

// ==== Reduce Пусть функция getTotalAmount возвращает общее количество автомобилей(значение свойств amount).

// const getTotalAmount = (cars) => cars.reduce((total, car) => total + car.amount, 0);

// console.log(getTotalAmount(cars));

// ==== Пусть функция getAvailableCarNames возвращает массив моделей автомобилей, но только тех, которые сейчас на распродаже.

// const getModelsOnSale = cars => cars
//     .filter(({ onSale }) => onSale)
//     .map(({ model }) => model);


// // ====== Пусть функция getSortedCarsOnSale возвращает массив автомобилей на распродаже (свойство onSale), отсортированных по возрастанию цены.

// const getSortedCarsOnSale = cars => cars
//     .filter(({ onSale }) => onSale)
//     .sort((car1,car2) => car1.price - car2.price)

// console.table(getSortedCarsOnSale(cars));

// const str = 'hello super world'

// const reverseWord = (text) => text.split(' ').map((word) => word.split('').reverse().join('')).join(' ');

// console.log(reverseWord(str))