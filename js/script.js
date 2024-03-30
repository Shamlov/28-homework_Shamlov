// /*Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое
// больше, чем второе; и 0 – если числа равны.*/

// function comparisonNumbers(a, b) {
//     switch (true) {
//         case a < b  : comparisonNumbers = -1; break;
//         case a == b : comparisonNumbers =  0; break;
//         case a > b  : comparisonNumbers =  1; break;
//     }
//     return comparisonNumbers

// }

// console.log(comparisonNumbers(5,5))
// // ========Конец=========================================================================================



// /*. Написать функцию, которая вычисляет факториал переданного ей числа.*/

// function factorial( a ) {
//     let num = 1
//     for(let i = 1; i <= a; i++ ) {
//         num = num * i
//     }
//     return num
// }

// console.log(factorial(11))
// // ========Конец=========================================================================================



// /*.Написать функцию, которая принимает три отдельные
// цифры и превращает их в одно число. Например: цифры
// 1, 4, 9 превратятся в число 149.*/ 

// function numberConcatenation (n1, n2, n3) {
//     let numberString = `${n1}${n2}${n3}`
//     let stringNumber = +numberString
//     return stringNumber   // тут вернем число
//     // return numberString     // тут можно вернуть и  строку
// }
// console.log(numberConcatenation (3, 5 ,6))
// console.log(numberConcatenation (3, 5 ,6) + 100)  // это действительно число. происходит сложение чисел
// // ========Конец=========================================================================================



// /*Написать функцию, которая принимает длину и ширину
// прямоугольника и вычисляет его площадь. Если в функцию
// передали 1 параметр, то она вычисляет площадь квадрата.*/ 

// const areaRectangle = function( a, b = a) {   // если не передаем b то оно равно a
//     return a * b
// }
// console.log(areaRectangle(4, 10))
// // ========Конец=========================================================================================



// /*Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это
// число, равное сумме всех своих собственных делителей*/

// function perfectNumbers(num) {
//     let sum = 0
//     for(let i = 1; i < num; i++) {
//         if((num % i) == 0) {
//             sum = sum + i
//         }
//         // console.log(num % i)
//     }
//     // console.log(sum)
//     if (num == sum) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(perfectNumbers(6))        // совершенное число
// console.log(perfectNumbers(496))      // совершенное число
// console.log(perfectNumbers(35))       // другое число
// // ========Конец=========================================================================================



// /*. Написать функцию, которая принимает минимальное и
// максимальное значения для диапазона, и выводит только
// те числа из диапазона, которые являются совершенными.
// Используйте написанную ранее функцию, чтобы узнавать,
// совершенное число или нет*/
// function perfectNumbers(num) {
//     let sum = 0
//     for(let i = 1; i < num; i++) {
//         if((num % i) == 0) {
//             sum = sum + i
//         }
//     }
//     if (num == sum) {
//         return true
//     } else {
//         return false
//     }
// }

// function rangePerfectNumbers ( a , b )  {
//     let numMax = b
//     let numMin = a
//     if (a >= b) {
//         numMax = a
//         numMin = b
//     } 
//     // console.log(numMin, numMax)   // получаем возможность передавать числа в любом порядке
//     for(let i = numMin; i <= numMax; i++) {
//         // console.log(i)    // проверили работоспособность
//         if(perfectNumbers(i)) {
//         console.log(i)   
//         // return i    // тут массив чисел получается нужно куда то записывать и вернуть уже массив. поэтому вывожу в консоль
        
//         }
//     }
//     return 'числа в консоли'
// }

// console.log(rangePerfectNumbers ( 7, 20000))
// // ========Конец=========================================================================================



// /*. . Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.*/

// const timeFunction = (hour, min = '00', sec = '00') => `${hour}:${min}:${sec}`     // не учтен 0 перед числом в 1 символ фотмат «чч:мм:сс»

// const timeFunction2 = function (hour, min = 0, sec = 0) {
//     if (hour <= 9) {hour = '0' + hour} 
//     if (min <= 9 ) { min = '0' + min }
//     if (sec <= 9 ) { sec = '0' + sec }
//     return `${hour}:${min}:${sec}`
// }

// console.log(timeFunction(43, 5 )) 
// console.log(timeFunction2(43, 6 ))      // тут формат  учтен
// console.log(timeFunction2(23, 0, 32))

// // ========Конец=========================================================================================


// /*Написать функцию, которая принимает часы, минуты и
// секунды и возвращает это время в секундах*/

// const displayingSeconds = (h, m, s) => `${(3600 * h) + (60 * m) + s} секунд`
// console.log(displayingSeconds(12, 4, 5))
// // ========Конец=========================================================================================



/*Написать функцию, которая принимает количество секунд,
переводит их в часы, минуты и секунды и возвращает в
виде строки «чч:мм:сс». */
// const timeFunction2 = function (hour, min = 0, sec = 0) {
//     if (hour <= 9) {hour = '0' + hour} 
//     if (min <= 9 ) { min = '0' + min }
//     if (sec <= 9 ) { sec = '0' + sec }
//     return `${hour}:${min}:${sec}`
// }

// function fullTime(sec) {
//     let hour = Math.trunc(sec / 3600)
//     let min  = Math.trunc((sec % 3600) / 60 )
//     let s    = sec % 60
//     // console.log(timeFunction2 (hour, min, s))
//     return timeFunction2 (hour, min, s)
// }

// console.log(fullTime(23442))
// // ========Конец=========================================================================================



// /* Написатьфункцию, которая считает разницу между датами.
// Функция принимает 6 параметров, которые описывают 2
// даты, и возвращает результат в виде строки «чч:мм:сс». При
// выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды,
// узнайте разницу в секундах, а потом разницу переведите
// обратно в «чч:мм:сс». */


// const displayingSeconds = (h, m, s) => (3600 * h) + (60 * m) + s //  перевод времени  в секунды

// const timeFunction2 = function (hour, min = 0, sec = 0) {
//     if (hour <= 9) {hour = '0' + hour} 
//     if (min <= 9 ) { min = '0' + min }
//     if (sec <= 9 ) { sec = '0' + sec }
//     return `${hour}:${min}:${sec}`
// }

// function fullTime(sec) {
//     let hour = Math.trunc(sec / 3600)
//     let min  = Math.trunc((sec % 3600) / 60 )
//     let s    = sec % 60
//     // console.log(timeFunction2 (hour, min, s))
//     return timeFunction2 (hour, min, s)
// }

// function timeDifference (hStart, mStart, sStart, hEnd, mEnd, sEnd) {
//     let secDifference = displayingSeconds(hStart, mStart, sStart) - displayingSeconds(hEnd, mEnd, sEnd)
//     //console.log(secDifference)
//     return fullTime(secDifference)
// }
// console.log(timeDifference (6, 4, 3, 3, 6, 45))   // из большего вычитаем меньшее. наоборот не предусмотрено
// // // ========Конец=========================================================================================







