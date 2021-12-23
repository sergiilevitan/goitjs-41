// console.log(12);

// // const Car = function ({ brand, model, price } = {} ) {
// //     this.brand = brand;
// //     this.model = model;
// //     this.price = price;

// // }

// // const myCar = new Car({
// //     brand: 'Audi',
// //     model: 'q3',
// //     price: 35000
// // })

// // Car.prototype.sayHi = function () {
// //     console.log(`Car.prototype.sayHi -> this`, this);
// // //     console.log(123)
// // // }

// // // // console.log(myCar)
// // // myCar.sayHi();

// // const User = function ({ email, password } = {}) {
// //     this.email = email;
// //     this.password = password;

// // }

// // const mango = new User({
// //     email: `mangooo.com`,
// //     password: 132123123
// // })

// // console.log(mango);

// // User.prototype.newEmail = function (newmail) {
// //     this.email = newmail;
// // }

// // mango.newEmail(`serega@@@@`);
// // console.log(mango);

// class Car {

//     static description = `statichnuy svoystvo`;

//     static logInfo(carObj) {
//         console.log(`car info`, carObj)
//     }

//     constructor({ brand, model, price } = {}) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }

//     changePrice(newPrice) {
//         this.price = newPrice;
//     }

//     updateModel(newModel) {
//         this.model = newModel;
//     }
    
// }

// const myCar = new Car ({
//     brand: 'Audi',
//     model: 'q7',
//     price: 124123,
// })

// // myCar.changePrice(333)
// // myCar.updateModel('q3')
// // Car.logInfo(myCar)

// class Storage {
// 	constructor (items) {
//     	this.items = items;
//     }
//   	getItems () {
//     	return this.items;
//     }
  
//   	addItem(newItem) {
//     	this.items.push(newItem);
//     }
//     removeItem(itemToRemove) {
//         this.items.splice(this.items.indexOf(itemToRemove),1)
//         // const itemToRemoveIndex = this.items.indexOf(itemToRemove);
//     	// this.items.splice(itemToRemoveIndex)
//     }
// }


// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// // console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// class StringBuilder {
// 	constructor (initialValue) {
//       this.value = initialValue;
//     };
//   	getValue () {
//     	return this.value;
//     };
//   	padEnd (str) {
//         this.value += str;
        
//     };
//   	padStart(str) {
//         this.value = str + this.value 
//     }
//   	padBoth(str) {
//             this.value = str + this.value + str;
//     }
// }
  


// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

class Car {
  // Change code below this line
  static MAX_PRICE = 50000;
  
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice <= Car.MAX_PRICE) {
    this.#price = newPrice;}
    
  }
  // Change code above this line
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000