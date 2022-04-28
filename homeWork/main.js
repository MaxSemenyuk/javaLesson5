// Все стірлочними!!!!!!!!!
//     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let sum = (arr) => {
//     let result = 0;
//     for (const arrElement of arr) {
//         result += arrElement
//     }
//     return result/arr.length;
// }

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let minMax = (arr) =>{
//     let min = arr[0];
//     let max = arr[0];
//     for (const arrElement of arr) {
//         if (arr[arrElement] > max){
//             max = arr[arrElement]
//         }
//     }
//     console.log(max)
//     for (const arrElement of arr) {
//         if (arr[arrElement] < min){
//             min = arr[arrElement]
//         }
//     }
//     return min;
// }

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let random = ()=>{
//     let rand =[];
//     for (let i = 0; i < 10; i++){
//         rand[i] = Math.round(Math.random()*100)
//     }
//     console.log(rand)
// }

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let randomFix = (num)=>{
//     let rand = [];
//     for (let i = 0; i < num; i++){
//         rand[i] = Math.round(Math.random()*100)
//     }
//     console.log(rand)
// }

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let reverse = (arr) => {
//     let result = [];
//     for (let i = 0; i < arr.length;i++) {
//         result[i] = arr[arr.length-1-i]
//     }
//     console.log(result)
// }


//     Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let rectangle = (a, b) => a * b;

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let round = (r) => (r ** 2) * 3.14

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let cylinder = (r, h) => 2 * 3.14 * r * h

// - створити функцію яка приймає масив та виводить кожен його елемент
// let docArray = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let par = (txt) => document.write(`<p>${txt}</p>`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let lijechka = (txt) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < 3; i++) document.write(`<li>${txt}</li>`)
//     document.write(`</ul>`)
// }

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let lijechka2 = (txt, num) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) document.write(`<li>${txt}</li>`)
//     document.write(`</ul>`)
// }

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr2 = (arr) => {
//     document.write(`<ul>`)
//     for (let arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`)
//     }
//     document.write(`</ul>`)
// }

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let array3 = (arr) => {
//     for (const arrElement of arr) {
//         document.write(`<ul>`)
//         for (const arrElementKey in arrElement) {
//             document.write(`<li>${arrElementKey} ${arrElement[arrElementKey]}</li>`)
//         }
//         document.write(`</ul>`)
//     }
// }

// - створити функцію яка повертає найменьше число з масиву
// let lessNum = (arr) => {
//     let less = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < less) {
//             less = arr[i];
//         }
//     }
//     return less
// }

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let sum = (arr) => {
//     let res = 0;
//     for (let i = 0; i < arr.length; i++) {
//         res = res + arr[i]
//     }
//     return res
// }

// // -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
// let reverse2 = (twoObj) => {
//     let res = [];
//     res[0] = twoObj[1];
//     res[1] = twoObj[0];
//     return res
// }