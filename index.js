/*
 * Функція конструктор: Vehicle
 * Властивості:
 * --------------------------------------
 * | Аргументи  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 */

// Створюємо функцію конструктор Vehicle.
function Vehicle({ brand = null, model = null, year = null, mileage = null }) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.mileage = mileage;
  this.toString = function () {
    console.log(`${this.brand} ${this.model} ${this.year}`);
  };
  this.valueOf = function () {
    console.log(this.mileage);
  };
}
// Рядковому представленю Vehicle призначаємо функцію яка повертає рядок: <brand> <model> <year>

// valueOf - це метод, який використовується JavaScript для конвертації об'єкта в примітивне значення.
// Ми перевизначаємо його тут, щоб він повертав this.mileage.

/*
 * Функція конструктор: Car
 * Властивості:
 * ----------------
 * | Властивість  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 * | fuelType     |
 * | speed        |
 */

//Створюємо Car - це ще один конструктор, який наслідує властивості і методи з Vehicle за допомогою функції apply.
function Car(
  brand = null,
  model = null,
  year = null,
  mileage = null,
  fuelType = null,
  speed = null
) {
  Vehicle.apply(this, [brand, model, year, mileage]);
  this.fuelType = fuelType;
  this.speed = speed;
  this.toString = function () {
    console.log(`${this.brand} ${this.model} ${this.year} - ${this.fuelType}`);
  };
  this.accelerate = function (num) {
    this.speed = this.speed + num;
    console.log(
      `Автомобіль ${this.brand} ${this.model} прискорився до швидкості ${this.speed} км/год`
    );
  };
  this.break = function (num) {
    this.speed = this.speed - num;
    console.log(
      `Автомобіль ${this.brand} ${this.model} зменшив до швидкості ${this.speed} км/год`
    );
  };
}
// Ми можемо перевизначити методи з Vehicle в Car.
// Рядковому представленю прототипу Car призначаємо функцію яка повертає рядок: <brand> <model> <year> - <fuelType>.

// Cтворюємо метод accelerate для прискорення швидкості прототипу Car, збільшує this.speed на передане число та виводить рядок в консоль: Автомобіль <make> <model> прискорився до швидкості <speed> км/год

// Метод brake для гальмування прототипу Car,зменшує this.speed на передане число та виводить рядок в консоль в консоль: Автомобіль <make> <model> зменшив до швидкості <speed> км/год

// Створюємо новий екземпляр об'єкта Car
/*
 * Екземпляр об'єкту: Car
 * Властивості:
 * --------------------------------------
 * | Властивість  |  Значення           |
 * |--------------|---------------------|
 * | brand        |  "Audi"             |
 * | model        |  "A6"               |
 * | year         |  2018               |
 * | mileage      |  30000              |
 * | fuelType     |  "Petrol"           |
 * | speed        |  0                  |
 */
const carData = {
  brand: "Audi",
  model: "A6",
  year: 2018,
  mileage: 30000,
  fuelType: "Petrol",
  speed: 0,
};
let car = new Car(carData);
car.toString();
// Викличемо функції toString та valueOf об'єкта car
car.valueOf();
// Використовуємо методи для прискорення та передаємо 50
car.accelerate(50);
car.break(20);
// Використовуємо методи для гальмування та передаємо 20ne

/*
 * Функція конструктор Truck
 * Властивості:
 * --------------------
 * | Властивість      |
 * |------------------|
 * | brand            |
 * | model            |
 * | year             |
 * | mileage          |
 * | color            |
 * | engineType       |
 * | towingCapacity   |
 * | fuelType         |
 * | transmissionType |
 * | doors            |
 * | weight           |
 */

// Конструктор Truck наслідуємо Vehicle викликавши його в конструкторі з call
function Truck(
  brand,
  model,
  year,
  mileage,
  color,
  engineType,
  towingCapacity,
  fuelType,
  transmissionType,
  doors,
  weight
) {
  // Викликаємо Vehicle.call та передаємо в нього: this, brand, model, year, mileage
  //  Записуєм в this.color значення аргументу color, в this.engineType значення аргументу engineType і так далі зі всіми аргументами
  Vehicle.call(this, brand, model, year, mileage);
  this.color = color;
  this.engineType = engineType;
  this.towingCapacity = towingCapacity;
  this.fuelType = fuelType;
  this.transmissionType = transmissionType;
  this.doors = doors;
  this.weight = weight;
  this.specific = function (num) {
    if (num > this.towingCapacity) {
      console.log(`Навантаження занадто важке для буксирування`);
    } else {
      console.log(`Тягнення навантаження...`);
    }
  };
}

// Додатковий метод specific для прототипу Trucks, примає число якщо воно більше towingCapacity виводить рядок в консоль: Навантаження занадто важке для буксирування, якщо ні то рядок Тягнення навантаження...

// Створюємо новий екземпляр об'єкта Truck
/*
 * Екземпляр об'єкту: myTruck
 * Властивості:
 * ---------------------------------------------------
 * | Властивість      | Значення                     |
 * |------------------|------------------------------|
 * | brand            | "Toyota"                     |
 * | model            | "Tundra"                     |
 * | year             | 2019                         |
 * | mileage          | 20000                        |
 * | color            | "Red"                        |
 * | engineType       | "V8"                         |
 * | towingCapacity   | 10000                        |
 * | fuelType         | "Gasoline"                   |
 * | transmissionType | "Automatic"                  |
 * | doors            | 4                            |
 * | weight           | 5600                         |
 */
const myTruck = {
  brand: "Toyota",
  model: "Tundra",
  year: 2019,
  mileage: 20000,
  color: "Red",
  engineType: "V8",
  towingCapacity: 10000,
  fuelType: "Gasoline",
  transmissionType: "Automatic",
  doors: 4,
  weight: 5600,
};
let truck = new Truck(myTruck);
let lowSpec = truck.specific.bind(Truck, 5000);
lowSpec();
// Викликаємо метод tow з вагою меншою за towingCapacity
let highSpec = truck.specific.bind(Truck, 150000);
highSpec();
// Викликаємо метод tow з вагою більшою за towingCapacity

// Додаємо метод drive для прототипу Car, який збільшує kilometers на передане число, та виводить Подорожуємо <kilometers> кілометрів у <brand> <model>.
Car.prototype.drive = function (kilometers) {
  this.kilometers = kilometers;
  console.log(
    `Подорожуємо ${this.kilometers} кілометрів у ${this.brand} ${this.model}.`
  );
};
let dri = car.drive.bind(car);

dri(100);
// Використовуємо bind для зв'язування методу drive з конкретним об'єктом car.
// Це створює нову функцію, в якій this постійно встановлено на car, незалежно від того, як функцію викликають.
// Викликаємо функцію зі значенням 100,

/*
 * Функція конструктор: ElectricCar
 * Властивості:
 * --------------------------------------
 * | Властивість   |
 * |---------------|
 * | brand         |
 * | model         |
 * | year          |
 * | mileage       |
 * | batteryCapacity|
 */

function ElectricCar(brand, model, year, mileage, batteryCapacity) {
  if (new.target) {
    Car.call(this, brand, model, year, mileage);
    this.batteryCapacity = batteryCapacity;
    this.toString = function () {
      console.log(
        `${this.brand} ${this.model} ${this.year} - Батарея: ${this.batteryCapacity} kWh`
      );
    };
  } else {
    console.log(`Конструктор має бути викликаний з 'new'`);
  }

  // Перевіряємо, чи функцію було викликано з new, якщо ні виволимо помилку "Конструктор має бути викликаний з 'new'"
  // Викликаємо Car.call та передаємо в нього this, brand, model, year, mileage
  //  Записуєм в this.batteryCapacity значення аргументу batteryCapacity
}

// Перевизначаємо toString для прототипу ElectricCar він має повертати <brand> <model> <year> - Батарея: <batteryCapacity> kWh

// Створюємо новий екземпляр ElectricCar
/*
 * Екземпляр об'єкту: ElectricCar
 * Властивості:
 * --------------------------------------
 * | Властивість     | Значення          |
 * |-----------------|-------------------|
 * | brand           | Tesla             |
 * | model           | Model S           |
 * | year            | 2020              |
 * | mileage         | 10000             |
 * | batteryCapacity | 100               |
 */
const ElectricCarData = {
  brand: "Tesla",
  model: "Model S",
  year: 2020,
  mileage: 10000,
  batteryCapacity: 100,
};
let electricCar = new ElectricCar(ElectricCarData);
electricCar.toString();

// Викликаємо метод toString об'єкту tesla та виводимо в консоль
