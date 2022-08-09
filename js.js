"use strict";

// let number = 4.6;
// console.log(4/0);//infinity
// console.log();
// console.log('string' * 9); //Not a Number

// const person = "Alex";//string

// const bool = false;//bolean

// // console.log(something); //console.log(something);

// let und;
// console.log(und);

// const obj = {
// name: "John",
// age: 25,
// isMarried: false
// };
// console.log(obj.name);
// console.log(obj["name"]);

// let arr = ['plum.png', 'orange.png', 6, 'apple.bmp',{}, []];
// console.log( arr[1])

// /* ---------------------------- */
// // Объекты и массивы

// const arr1 = [1,2,3];
// const arrObj = {
//     a: 'a',
//     1: 'b',
//     2: 'c',
//     abc: {
//         def:{ /* объект в объекте */

//         }
//     }
// };
// console.log(arrObj.a);
// const d = {};
// console.log(d);
// arrObj[d] = 'freddy';
// arrObj.b = '1234';


// console.log(arrObj.b);
// console.log(arrObj['b']);
// console.log(arrObj);

// console.log(arr1[1]);
// const obj1 = {a:1, b:2};

// arr1[10] = '3456';
// console.log(arr1[10]);
// console.log(arr1);


// Просто е общение с пользователем

// alert('hello');
// const result = confirm("Are you here?"); // ответ пользователя
// console.log(result);
// const answer1 = prompt("Вам есть 18?", "18"); //введенные данные сохраняются в виде строк
// const answer = +prompt("Сколько тебе лет?","31"); //сохранеяются цифрами
// console.log(typeof(answer1));
// console.log(typeof(answer));
// console.log(answer1 + 13);
// console.log(answer + 13);

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// document.write(answers);
// console.log(typeof(answers));

// Интерполяция

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const name1 = "Serghei";

// alert(`${name1}`);


// операторы

// конкатенация 

 console.log('arr' + " - object");

 console.log ( 4 + +" - object"); // NaN
 
 console.log ( 4 + +"5"); // преобразование строки в число

 let incr = 10;
  
 let decr = 10;

//  incr++;
//  decr--;

 console.log(++incr);//префиксаная форма
 console.log(--decr);

 console.log(5%2);//остаток

 console.log(2*4 == 8);//true
 console.log(2*4 == '8');//true
 console.log(2*4 === '8');//false строгое равенство (число равно числу)

 //&& ||

 const isChecked = true;
 const isClose = false;

 console.log( isChecked && isClose);
 console.log(isChecked || isClose);

 //!== cтрогое сравнение по типу
 console.log('operator - '+( 2*2 !=='4'));

 
