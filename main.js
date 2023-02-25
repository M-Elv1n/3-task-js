// 1 Input ile daxil olunan ədədin sade bolenlerini cixartsin

// let num = +prompt('Number:');

// for (let i = 2; i <= num; i++) {
//   let counter = 0;
//   if (num % i == 0) {
//     for (let a = 1; a <= i; a++) {
//       if (i % a == 0) {
//         counter += 1;
//       }
//     }

//     if (counter == 2) {
//       console.log(i);
//     }
//   }
// }




// ============================================================================================

// 2 * 3 reqemli eded daxil edirik ededin evveline ve sonuna string ile 3 elave edirik

// let a = +prompt("ededi daxil edin")

// let b = '3' + a + '3'

// console.log(b)





// ============================================================================================

// 3  Input ile daxil olunan ədədin rəqəmlərindən ən böyüyünü tapın.

// let a = prompt("ededi daxil edin")
// let max = +a[0]

// for (let i = 0; i < a.length; i++) {
//     if(max < +a[i]){
//         max = a[i]
//     }
// }
// console.log(max)





// ============================================================================================

// 4. Input ile daxil olunan ədədin rəqəmlərindən tam ədədləri göstərin.

// let a = prompt("ededi daxil edin")

// for (let i = 0; i < a.length; i++) {
//     console.log(+a[i]);

// }




// ============================================================================================

// 5. Input ile daxil olunan ədədin rəqəmlərindən cüt ədədi göstərin.

// let a = prompt("ededi daxil edin")

// for (let i = 0; i < a.length; i++) {
//     if (+a[i] % 2 === 0) {
//         console.log(a[i])
//     }

// }




// ============================================================================================

// 6. Input ile daxil olunan ədədin rəqəmlərindən sadə ədədləri göstərin.

// let a = prompt("ededi daxil edin")
// let a = prompt("ededi daxil edin")

// for (let i = 0; i < a.length; i++) {
//     let count = 0
//     let c = +a[i]
//     for (let y = 1; y <= c; y++) {
//         if (c % y === 0) {
//             count += 1
//         }
//     }
    
//     if (count == 2) {
//         console.log(c)
//     }
// }



// ============================================================================================

// 7. Input ile daxil olunan ədədin rəqəmlərindən mürəkkəb ədəd olub olmadığını tapın.

// let a = prompt("ededi daxil edin")

// for (let i = 0; i < a.length; i++) {
//     let count = 0
//     let c = +a[i]
//     for (let y = 1; y <= c; y++) {
//         if (c % y === 0) {
//             count += 1
//         }
//     }
    
//     if (count > 2) {
//         console.log(c)
//     }
// }





// ============================================================================================

// 8. * Input ile daxil olunan ədədin reqmelerin sayi ve string ile tərsini tapın.

// let a = "234"
// let b = +a
// let count = 0
// let c
// let str = ""

// for (let i = 0; i < a.length; i++) {
//     count = count + 1
//     c = b % 10
//     b = Math.floor(b/10)
//     str = str + c  
// }

// console.log("ededlerin sayi: ", count)
// console.log(str)



// ============================================================================================

// 9.  Input ile daxil olunan 1 ci ədədi daxil olunan 2 ci ədədin qüvvətinə yüksəldin.

// let a = +prompt("ededi daxil edin")

// let b = +prompt("nece guvvet artiracayiq?")

// console.log(a**b)



// ============================================================================================

// 10 Input ile daxil olunan ədədin rəqəmlərinin kvadratları cəmini tapın.

// let a = prompt("ededi daxil edin")
// let b = 0

// for (let i = 0; i < a.length; i++) {
//     b = b + +a[i]
// }
// console.log(b**2)





// ============================================================================================

// 11 * Input ile daxil olunan ədədin 3 ededi string ile yan-yana yigilsin. Misal ucun: 3, 45, 10

// let a = prompt("birinci daxil edin")
// let b = prompt("ikinci daxil edin")
// let c = prompt("ucuncu daxil edin")

// console.log(a + ', ' + b + ', ' + c)




// ============================================================================================

// 12 Input ile daxil olunan ədədin 3 ededi string ile yan-yana ardicilliq ile yigilsin. Misal ucun: 3, 10, 45


// 1ci usul

// let a = prompt("enter a number");
// let b = prompt("enter a number");
// let c = prompt("enter a number");
// if (a > b && a > c) {
//   if (b > c) {
//     console.log(`${c},${b},${a}`);
//   } else {
//     console.log(`${b},${c},${a}`);
//   }
// } else if (b > a && b > c) {
//   if (a > c) {
//     console.log(`${c},${a},${b}`);
//   } else {
//     console.log(`${a},${c},${b}`);
//   }
// } else if (c > a && c > b) {
//   if (a > b) {
//     console.log(`${b},${a},${c}`);
//   } else {
//     console.log(`${a},${b},${c}`);
//   }
// } else {
//   console.log("enter three different numbers");
// }


// 2ci usul

// let a = prompt("enter three numbers with spaces");
// console.log(a.split(" ").sort(function (a, b) { return a - b}).join(","));



// ============================================================================================

// 13 Input ile daxil olunan ededden sonraki ilk sade ededi tapin

// let a = prompt("ededi daxil edin")

// let a = "489572"

// for (let i = 1; i < a.length; i++) {
//     let count = 0
//     let c = +a[i]
//     for (let y = 1; y <= c; y++) {
//         if (c % y === 0) {
//             count += 1
//         }
//     }
    
//     if (count == 2) {
//         console.log(c)
//         break
//     }
// }






// ============================================================================================

// 14  Istifadecinin daxil etdiyi ededin kok altini tap

// let a = +prompt("ededi daxil et")

// console.log(Math.sqrt(a))




// ============================================================================================

// 15 Istifadeci 0 daxil edenedek edelerin cemini tapin.
// *** Vurma cedveli (string methodu ile)

// let c = 0

// for (let i = 0; i < 10000; i++) {
//     let a = +prompt("nece eded daxil etmek isteyirsiniz?:")
//     if (a === 0) {
//         break
//     }else{
//         c = c + a
//     }
// }
// console.log(c)




// ============================================================================================

// 16 Input ile daxil olunan 3 ededden ortancili tapan funksiya yazin.

// let a = prompt("ededi daxil edin")

// console.log(+a[1])




// ============================================================================================

// 17 Array olsun, target olsun, target-den sonraki array-in index’ini tapin ( home work )

// let array = prompt("text elave edin")

// for (let i = 0; i < array.length; i++) {
//     console.log(i)
// }



// ============================================================================================

// 18 Array icerisinde en kicik ededi tapin ( home work )

let array = [2, 43, 56, 7, 1, 8]
let min = array[0]

// for (let i = 0; i < array.length; i++) {
//     if (min > array[i]) {
//         min = array[i]
//     }
// }

// console.log(min)



// ============================================================================================

// 19 Array icersisinde sonu 9 olan nece elemet var. ( home work )

// let array = [2, 43, 9, 56, 7, 19, 8, 29]
// let count = 0

// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 10 === 9) {
//         count = count + 1
//     }
// }
// console.log(count)



// ============================================================================================

// 20 Array icerisinde nece cut element var

// let array = [2, 43, 56, 7, 19, 8]
// let count = 0

// for (let i = 0; i < array.length; i++) {
//     if (+array[i] % 2 === 0) {
//         count = count + 1
//     }
// }

// console.log(count)





// ============================================================================================

// 21 Array icerisinde nece tek element var

// let array = [2, 43, 56, 7, 19, 8]
// let count = 0

// for (let i = 0; i < array.length; i++) {
//     if (+array[i] % 2 !== 0) {
//         count = count + 1
//     }
// }

// console.log(count)




// ============================================================================================

// 22 Array icerisindeki tam ededlerin cemini tapin (while ile). ( home work )

// let arr = [2.5, 1, 5, 7, 1.5, 8];
// let x = 0;
// let counter = 0;
// let i = 0;
// while (counter < arr.length) {
//     if (arr[i] % 1 == 0) {
//         x += arr[i]
//     }
//     counter++
//     i++
// }

// console.log(x)