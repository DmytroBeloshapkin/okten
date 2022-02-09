// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minNumber (a,b,c)
{
    if (a < b && b < c){
    document.write(`найменше число ${a}<br>`)
    } else if (b < a  && b < c){
    document.write(`найменше число ${b}<br>`)
    } else if (c < a && c < b){
    document.write(`найменше число ${c}<br>`)
    } else {
    document.write(`помилка вводу данних<br>`)
    }
}
minNumber ( 10 ,20 ,5)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxNumber (a,b,c){
    if (a > b && b > c){
    document.write(`найбільше число ${a}<br>`)
    } else if (b > a && b > c ){
    document.write(`найбільше число ${b}<br>`)
    } else if (c > a && c > b ) {
    document.write(`найбільше число ${c}<br>`)
    } else {
    document.write(`помилка вводу данних<br>`)
    }
}
maxNumber (1, 23, 66)

// - створити функцію яка повертає найбільше число з масиву
let arreyTest = [1000, 50, 1500]

function arrayMax(array) {
    let max = array[0];
    for (const arreyElement of array) {
        if(arreyElement > max){
            max = arreyElement;
        }
    }
    return max;
}
document.write(`<p>Найбільше число масиву: ${arrayMax(arreyTest)}<p>`)

// - створити функцію яка повертає найменьше число з масиву
function arrayMin(array) {
    let min = array[0];
    for (const arreyElement of array) {
        if(arreyElement < min){
            min = arreyElement;
        }
    }
    return min;
}
document.write(`<p>Найменше число масиву: ${arrayMin(arreyTest)}<p>`)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sumArrey (arrey) {
    let sum = 0;
    for (const arreyElement of arrey) {
        sum = arreyElement + sum;
    }
        return sum;
}
document.write(`<p> Сума числе масиву ${sumArrey(arreyTest)} </p>`)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function arithmeticArrey (arrey) {
    let sum = 0;
    for (const arreyElement of arrey) {
        sum = arreyElement + sum / arrey.length;
    }
    return sum;
}
document.write(`<p> Середнє арифметичне число масиву  ${Math.floor(arithmeticArrey(arreyTest))} </p>`)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);







// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].