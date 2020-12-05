console.log('--------1-------')

function CutNumber(Number) {

    this.init = function (Num) {
        if (0 < parseInt(Num) && parseInt(Num) < 1000) {
            this.сотни = parseInt(Num / 100);
            this.десятки = parseInt((Num - this.сотни * 100) / 10);
            this.единицы = parseInt(Num - this.десятки * 10 - this.сотни * 100);
        } else if (Num > 999 || Num < 0) {
            console.log('Ошибка: допустимый диапазон 0-999');
        } else {
            if (typeof (this.единицы) != "undefined") {
                delete this.сотни;
                delete this.десятки;
                delete this.единицы;
            }
        }
    }

    this.init(Number);

}

console.log(new CutNumber(245));
console.log(new CutNumber(2455));

console.log('-------2-------')
/**a. В прошлом домашнем задании вы реализовали корзину на базе
 * массивов. Какими объектами можно заменить их? Реализуйте
 * такие объекты. Перенесите функционал подсчета на объектно-ориентированную
 * базу
 */
// let price = [100, 200, 300, 400];
// let item = ['Iphone', 'Samsung', 'Xiaomi', 'Honor'];

let Phone = [
    {
        model: 'Iphoe',
        serial: '11 pro max',
        color: 'grey',
        price: 100,
    },
    {
        model: 'Samsung',
        serial: 'Gelaxi',
        color: 'red',
        price: 200,
    },
    {
        model: 'Xiaomi',
        serial: 'Redmi Note',
        color: 'green',
        price: 300,
    },
    {
        model: 'Honor',
        serial: 'Model x',
        color: 'blue',
        price: 400,
    }
];

function goodsList() {
    for (let All of Phone) {
        console.log('Товар: ' + All.model + ' Стоит ' + All.price + ' $');
    }
}

function countBasketPrice() {
    let funBasketPrice = 0;
    for (let prod of Phone) {
        funBasketPrice += prod.price;
    }
    console.log('Стоимость корзины: ' + funBasketPrice + ' $');

}

goodsList();
countBasketPrice();








