// 13. Реализовать функцию, которая проверяет,
//  является ли заданное число совершенным Написать
//   функцию, которая принимает число и проверяет,
//   является ли оно совершенным
//   (сумма всех делителей числа, кроме самого числа,
//     равна этому числу). Например, если входное число 6,
//     то функция должна вернуть true.

// function foo(num) {
//   let sum = 0;
//   for (let i = 0; i < num; i++) {
//     if (num % i === 0) {
//       sum += i;
//     }
//     if (num === sum) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(foo(6));

//Напишите функцию, которая находит пропущенное число
// в массиве, содержащем числа от 1 до n.

// function foo(arr) {
//   if (!Array.isArray(arr)) {
//     return "invalid array";
//   }
//   let res = [];
//   let max = Math.max(...arr);
//   let min = Math.min(...arr);
//   for (let i = min; i < max; i++) {
//     if (!arr.includes(i)) {
//       res.push(i);
//     }
//   }

//   return res;
// }
// console.log(foo([4, 3, 2, 1, 7, 6, 10]));

// Дана строка s, найдите в ней первый
//  неповторяющийся символ и верните его индекс.
//  Если он не существует, верните -1
// function foo(str) {
//   let obj = {};
//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]] === undefined) {
//       obj[str[i]] = 1;
//     } else {
//       obj[str[i]]++;
//     }
//   }
//   for (const key in obj) {
//     if (obj[key] === 1) {
//       return key;
//     }
//   }
//   return -1;
// }
// console.log(foo("abcabj"));

//Учитывая массив строк-слов, верните первую палиндромную
//строку в массиве. Если такой строки нет,
//верните пустую строку «». Строка является палиндромной,
//если она читается одинаково и вперед, и назад.

// function foo(arr) {
//   let str = arr + "";
//   let str1 = "";

//   for (let i = 0; i < str.length; i++) {
//     str1 = str[i] + str1;
//   }
//   if (str.toUpperCase() === str1.toUpperCase()) {
//     return true;
//   }
//   return false;
// }

// function firstLine(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (foo(arr[i]) === true) {
//       return arr[i];
//     }
//   }
//   return "<< >>";
// }
// console.log(firstLine(["Akob", "Anna", "Arman", "Racecar"]));

//Учитывая целое число n, верните true,
// если оно является степенью двойки. В противном случае
//  верните false

// function f(num) {
//   while (num !== 1) {
//     if (num % 2 !== 0) {
//       return false;
//     } else {
//       num = num / 2;
//     }
//   }
//   return true;
// }
// console.log(f(8));

// function f1(num) {
//   if ((num & (num - 1)) === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(f1(32));
