import { cars } from './cars.js';
// console.log('23123')
// // table with cars sorted decreased by price and filtered by model

// const priceByModel = (cars, type) =>
//   cars
//     .filter((car) => car.type === type)
//     .sort((car1,car2) => car2.price - car1.price)
// console.table(priceByModel(cars, 'sedan'))


// // ==== by amount decsease sort

// const sortByAmount = [...cars].sort((curCar, nextCar) => curCar.amount - nextCar.amount)
// console.table(sortByAmount)


// === sort by model name

// const sortByModelName = [...cars].sort((curCar, nextCar) => {
//   return curCar.model[0] > nextCar.model[0]
//     ? 1
//     : -1
// })
  
// console.table(sortByModelName);

// // ===  flat & flatMap  

const array = [1, 2, [4, 14], [9, 7, 12, 9]];

// console.log(array.flat())

// /// chaining

// const flatFilterMap = array
//   .flat()
//   .filter(num => num > 4)
//   .map(num => num * 4)
//   .sort()

// console.log(flatFilterMap)


// ==== 

// const onSaleSortedByPrice = cars
//   .filter(car => !car.onSale)
//   .sort((car1,car2) => car1.price - car2.price)


//   console.table(onSaleSortedByPrice)

//// Lodash methods

// console.log(_.isEmpty(array))

const user = {
  name: 'Mango',
  location: {
    coords: [1, 3],
    city: 'Kiev'
  }
}

// console.log(_.get(user, 'location.city'))

console.table(_.sumBy(cars, car => car.amount))
  