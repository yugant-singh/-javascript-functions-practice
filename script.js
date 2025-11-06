// ✅  Practice Set —Functions Mastery (Level 1 to 3)
//  Focus: parameters, arguments, return
//--------------------------------------------------
//Q1:✅ 
// Soultion -
// function greet(name){
//     console.log("Hello", name);
// }

// greet("yugant"); //Hello Yugant;
// greet(); // Hello undefined

//------------------------------------------
// Q2:✅
// function add(a, b) {
//   return a + b;
// }
// console.log(add(5, 7));  //12
// console.log(add(10));   //NaN

//------------------------------------------

//Q3:✅

// function introduce(name = "Guest", country = "India") {
//   console.log(`${name} is from ${country}`);
// }
// introduce("Yugant", "Japan"); //Yugant is from japan
// introduce("Ravi"); //ravi is from india;  
// introduce();   //Guest is from india

//-------------------------------------------

//Q4:✅


// function sumAll(...nums) {
//   let total = 0;
//   for (let n of nums) total += n;
//   return total;
// }

// console.log(sumAll(2, 4, 6)); //5
// console.log(sumAll(5));  // 5
// console.log(sumAll()); //0.

//----------------------------------------------------
//Q5:✅

// function multiply(a, b, c) {
//   console.log(a * b * c);
// }
// const arr = [2, 3, 4];
// multiply(...arr); //24

//-------------------------------------------------------
//Q6:✅
// function showDetails(...info){
// console.log(info);
// }


// const data  = ["yugant" , 23, "India"];
// showDetails(...data)





// function orderSummary(customer = "Guest", ...items) {
//   console.log(`Customer: ${customer}`);
//   console.log(`Items: ${items.join(", ")}`);
//   console.log(`Total items: ${items.length}`);
// }

// orderSummary("Yugant", "Burger", "Fries", "Coke");


//++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q1✅: Ek function printAll banao jo jitne bhi arguments aaye, unko line by line print kare.

// function printAll(...nums){
// nums.forEach(function(num){
// console.log(num)
// })
// }
// printAll(12,13,14,56,78,34);
//++++++++++++++++++++++++++++++++++++++++++++++++++++
// Q2✅: Ek function addAll banao jo jitne bhi numbers aaye unka sum return kare. 

// Solution -

//     function addAll(...nums) {
//         let sum = 0;
//         nums.forEach(function (num) {
//             sum += num;
//         })
//         return sum;
//     }
// let result = addAll(12, 76, 90, 45, 32);
// console.log(result);

//++++++++++++++++++++++++++++++++++++++++++++++++++++

// ✅Q4: findMax(10, 25, 8, 99, 32) → 99 

// function findMax(...nums) {
//     let max = nums[0];
//     nums.forEach(function (num) {
//         if (num > max) {
//             max = num;
//         }
//     })
//     return max;
// }
// let max = findMax(10, 25, 8, 99, 32)
// console.log(max);



//++++++++++++++++++++++++++++++++++++++++++++++++++++

//✅Q5: Ek function separateTypes(...args) banao jo mixed arguments lega (numbers, strings, booleans).
//     Phir unko unke type ke hisaab se alag-alag arrays me rakhe.
//     Aur ek object return kare jisme teen arrays ho:

//     *  numbers → saare numbers
//     *  strings → saare strings
//     *  booleans → saare booleans


// function separateTypes(...args) {

//     let obj = {};
//     let strings = [];
//     let booleans = [];
//     let numbers = [];

//     args.forEach(function (arg) {
//         if (typeof (arg) === "string") {
//             strings.push(arg);
//         } else if (typeof (arg) === "boolean") {
//             booleans.push(arg);
//         } else if (typeof (arg) === "number") {
//             numbers.push(arg);
//         }
//     })

//     obj.numbers = numbers;
//     obj.booleans = booleans;
//     obj.strings = strings;

//     return obj;
// }
// let result = separateTypes("yugant", true, 23, "David", false, 65);
// console.log(result);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // ✅Q6: findMin
// //  Jitne bhi numbers aaye, unme se minimum return kare.
// //  findMin(10, 25, 8, 99, 32); // 8

// function findMin(...nums) {
//     let min = nums[0];
//     nums.forEach(function (num) {
//         if (num < min) {
//             min = num;
//         }
//     })
//     return min;
// }
// let result = findMin(10, 25, 8, 99, 32);
// console.log(result);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//✅ Q8: filterByType ==> Ek function filterByType(type, ...args) banao.

// Pehla argument hoga type → "number", "string", ya "boolean".
// Baaki jitne arguments aaye, unme se sirf wahi values return karni hain jo type ke match karte ho.



// function filterType(type, ...args) {
//     let newArry = []
//     args.forEach(function (arg) {
//         if (type === typeof (arg)) {
//             newArry.push(arg);
//         }
//     })

//     return newArry;
// }
// let result = filterType("number", "Ankita", 12, 23, "yugant", true)
// console.log(result);

//++++++++++++++++++++++++++++++++++++++++++++++++++

// ✅ Q9: sumEvenOdd
// Goal:
// Function me numbers pass honge → ...nums
// Hume calculate karna hai:
// even numbers ka sum
// odd numbers ka sum
// Return ek object jisme { even: sumEven, odd: sumOdd }

// function sumEvenOdd(...nums){
// let sumEven =0;
// let sumOdd  =0;
// let obj = {};
// nums.forEach(function(num){
//     if(num%2===0){
//         sumEven = sumEven+num;
//     } else{
//         sumOdd = sumOdd+num;
//     }
// })
// obj.even = sumEven;
// obj.odd = sumOdd;
// return obj;
// }

// let result = sumEvenOdd(12,34,11,21,46,54,67,9,13,31,24);

// console.log(result);



