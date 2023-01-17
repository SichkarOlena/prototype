//
// Cтворіть функцію конструктор Продукт з властивостями:
//     назва(рядок), ціна(число), кількість(число - залишок на складі)
//
// Cтворіть функцію конструктор прототипу Продукту з функціоналом:
//     showInfo() - повертає рядок з усіма данними
// setSaleToPrice(value=0) - встановлює знижку і повертає нову ціну
// buyAmountProduct(amountValue) - повертає загальну вартість, якщо є достатня кількість, якщо не має повертаєте - null
//
// Не забути поєднати Продукт і його прототип!

function ProductConstructor(name, price, amount) {
    this.name = name;
    this.price = price;
    this.amount = amount;
}

function ProductConstructorPrototype() {
   this.showInfo = function () {
       return `${this.name} ${this.price} ${this.amount}`;
   };
    this.setSaleToPrice = function (value = 0) {
        return this.price - (this.price / 100 * value);
    };
    this.buyAmountProduct = function (amountValue) {
        if (this.amount >= amountValue) {
            return this.price * amountValue;
        } else {
            return null;
        }
    }
}

ProductConstructor.prototype = new ProductConstructorPrototype();

const car = new ProductConstructor('cars', 5000, 7);
console.log(car.showInfo());
console.log(car.setSaleToPrice(10))
console.log(car.buyAmountProduct(5));