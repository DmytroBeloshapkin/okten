// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function s (a, b) {
    let s = a*b
    return s;
}
console.log( s(2,4) )

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function cirkul (r) {
const PI = 3.14
let res = PI * Math.pow(r, 2)
return res;
}
console.log(cirkul(5))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// S = 2 π R h
function cylinder(h,r){
    const PI = 3.14
    let s = 2 * PI * r * h
    return s
}
console.log(cylinder(2,5))

// - створити функцію яка приймає масив та виводить кожен його елемент
let arrey = [1,2,5,10,15]

function arreyElements (arrey) {
for (let i = 0; i < arrey.length; i++) {
document.write(arrey[i])
}
}
arreyElements(arrey)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph() {
    for (let i = 0; i < arguments.length; i++) {
        const argument = arguments[i];
        document.write(`<p></p>`)

    }
}



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.