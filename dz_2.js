/**
 * 1. Дан код:

 var a = 1, b = 1, c, d;
 c = ++a; alert(c);           // 2 прибавляет к а 1 еденицу итого 2
 d = b++; alert(d);           // 1 нет тела цикла, значит просто выведет число 1
 c = (2+ ++a); alert(c);      // 5 в с уже 2 прибавиться еще 1 еденица и потом прибавится 2
 d = (2+ b++); alert(d);      // 4 d уже 1, увеличиваем его на 1 единицу и прибавляем 2
 alert(a);                    // 3 после прохождений в а записано число 3
 alert(b);                    // 3 после прохождений в а записано число 3
 * Почему код даёт именно такие результаты?
 */

/**
 * 2. Чему будет равен x в примере ниже?

 var a = 2;
 var x = 1 + (a *= 2);  // (2 * 2) + 1 = 5
 */
/**
 *3. Объявить две целочисленные переменные a и b и
 * задать им произвольные начальные значения. Затем
 * написать скрипт, который работает по следующему принципу:
 если a и b положительные, вывести их разность;
 если а и b отрицательные, вывести их произведение;
 если а и b разных знаков, вывести их сумму; ноль можно
 считать положительным числом.
 */
console.log('--------------3-------------');
let a = -2;
let b = -5;

function free(a, b) {
    if (a > 0 && b > 0) {
        return a - b;
    } else if (a < 0 && b < 0) {
        return a * b;
    } else if (a <= 0 && b > 0 || b <= 0 && a > 0) {
        return b + a;
    }
}

s = free(a, b)
console.log(s)

/**
 ### 4. Присвоить переменной а
 значение в промежутке [0..15]. С помощью оператора switch
 организовать вывод чисел от a до 15.
 */
console.log('-------------4--------------');

function getRandomInRange(c) {
    return Math.floor(Math.random() * 16);
}

let c = getRandomInRange();
switch (c) {
    case 1:
        console.log('1');
    case 2:
        console.log('2');
    case 3:
        console.log('3');
    case 4:
        console.log('4');
    case 5:
        console.log('5');
    case 6:
        console.log('6');
    case 7:
        console.log('7');
    case 8:
        console.log('8');
    case 9:
        console.log('9');
    case 10:
        console.log('10');
    case 11:
        console.log('11');
    case 12:
        console.log('12');
    case 13:
        console.log('13');
    case 14:
        console.log('14');
    case 15:
        console.log('15');
}

/**
 ### 5. Реализовать основные
 4 арифметические операции в виде функций с двумя параметрами.
 Обязательно использовать оператор return.
 */
console.log('-------------5--------------');

let e = 2;
let f = 0;

function sum(e, f) {
    return e + f;
}

function raz(e, f) {
    return e + f;
}

function umn(e, f) {
    return e * f;
}

function del(e, f) {
    if (f === 0) {
        console.log('error del 0')
    } else {
        return e / f;
    }
}

g = [del(e, f), sum(e, f), raz(e, f), umn(e, f)];

console.log(g);

/**
 ### 6. Реализовать
 функцию с тремя параметрами: function mathOperation(arg1, arg2,
 operation), где arg1, arg2 – значения аргументов, operation –
 строка с названием операции. В зависимости от переданного значения
 операции выполнить одну из арифметических операций (использовать
 функции из пункта 3) и вернуть полученное значение (использовать
 switch).
 */
console.log('-------------6--------------');
let arg1 = 2;
let arg2 = 0;

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'sum':
            return arg1 + arg2;
        case 'raz':
            return arg1 - arg2;
        case 'umn':
            return arg1 * arg2;
        case 'del':
            if (arg2 === 0) {
                console.log('error del 0')
                break;
            } else {
                return arg1 / arg2;
            }
    }
}

console.log(mathOperation(arg1,arg2,'sum'));
console.log(mathOperation(arg1,arg2,'raz'));
console.log(mathOperation(arg1,arg2,'umn'));
console.log(mathOperation(arg1,arg2,'del'));

/**
 ### 7. *Сравнить null и 0. Попробуйте объяснить результат.
 */
console.log('-------------7--------------');
let j = null;
let k = 0;
l = k >= j;
p = k == j;
o = k > j;
console.log(l, p, o); // работа с абстракными числами

/**### 8. *С помощью рекурсии организовать функцию возведения числа в
 степень. Формат: function power(val, pow), где val – заданное число,
 pow – степень.
 */
console.log('-------------8--------------');
function power(val, pow){
    v = 1;
    if (pow > 0)
        v = val * power(val, pow - 1);
    return v;
}
console.log(power(3, 4))
