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
//Solution:
// function add(a, b) {
//   return a + b;
// }
// console.log(add(5, 7));  //12
// console.log(add(10));   //NaN

//------------------------------------------

//Q3:✅
//Solution:

// function introduce(name = "Guest", country = "India") {
//   console.log(`${name} is from ${country}`);
// }
// introduce("Yugant", "Japan"); //Yugant is from japan
// introduce("Ravi"); //ravi is from india;
// introduce();   //Guest is from india

//-------------------------------------------

//Q4:✅
//Solution:

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



//Solution:

// function orderSummary(customer = "Guest", ...items) {
//   console.log(`Customer: ${customer}`);
//   console.log(`Items: ${items.join(", ")}`);
//   console.log(`Total items: ${items.length}`);
// }

// orderSummary("Yugant", "Burger", "Fries", "Coke");


//++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q1✅: Ek function printAll banao jo jitne bhi arguments aaye, unko line by line print kare.
//Solution:

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
//Solution:

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
//Solution:


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
//Solution:

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

//Solution:


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
//Solution:

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

//=======================================================
// 📝 Easy Higher-Order Function Practice
//-------------------------------------------------------

// ✅Q1 – Function as Argument

// Ek function greetUser likho jo ek callback function lega aur usko run karega.
//Solution:

// function greetUser(callback) {

//     console.log("Hello From the Higher Order function");
//     callback();
// }


// greetUser(function () {
//     console.log("Hello From the Callback function");
// })

//=====================================================

// -
// ✅Q2 - What is the difference between function statement and function expression in terms of hoisting :

// Ans- function statement can be hoisted ,means they can be call before the define but function expression can not hold the hoisting property

//=======================================================
// ✅Q3 - convert the given function in to arrow function.
//Solution:

// function multiply(a,b){
//     return a*b;
// }


// let multiply = (a,b)=>{
// return a*b;
// }
// console.log( multiply(23,2))
//=======================================================

// ✅Q4 - How many Arguement pass in the function
//Solution:

// function demo(a,b,c){}
// demo(12,3);
//Thre are 2 arguement 12,13

//=======================================================
//✅ Q5 - Predict the output of the given code
//Solution:

// function sayHii(name = "Guest"){
// console.log(name);
// }
// sayHii();

//It will print the Guest Because of the default parameter concept.


//=======================================================
//✅ Q6 -What does the ... operator mean in the parameter
// Ans:
// ...operator is used as the parameter in the function difition to take multiple value in the form of the array

//=======================================================
//✅ Q7 - Use the rest parameter to accept any number of score and return the sum of score
//Solution:

// function getScore(...scores){
//     let sum = 0;
//     scores.forEach((score)=>{
//         sum = sum+score;
//     })
//     return sum;
// }
// let result  = getScore(67,90,89,76,50);
// console.log(result);
//=======================================================
//✅Q8.
//Solution:

// function checkAge(age){

//     if(age>18) return "you can vote";
//     return "to early";

// }
// console.log(checkAge(72));

//=======================================================
//✅ Q9 - What does it mean when we say that "Function are first class citizens"

// When we say that Function are the first class functio it means we can use the function likea variable means we can store the functon in the variable

//=========================================================
//✅ Q10 - Pass an function into another function and execute it
//Solution:

// function sayHello(callback){
//     console.log("Higher order function");
//     callback();
// }

// sayHello(function(){
//     console.log("This is the called function")
// })

//=======================================================
//✅ Q11 - What is Higher order function
// Answer =  Higer order vo function hote hai jo ya to ek function as a arguement accept kre ya to ek function return kre to jo function ek function return krta hia ya accept krta hai as arguement
//=======================================================

//✅ Higher Order Function + Closure + Currying level
//---------------------------------------------------------

//✅ Q1. (Function as Parameter)
// Ek HOF runTwice banao jo ek function accept kare aur usko 2 baar run kare.
//Solution:

// function runTwice(callback){
// callback();
// callback();
// }

// function called(){
//     console.log("This is the HOF Function");
// }

// runTwice(called);
//========================================================

//✅ Q2. (Closure Basic)

// Ek function counter banao jo ek function return kare. Har baar call arne par counter +1 ho jaye.
//Solution:

// function counter(callback){
//     let count = 0;
//     return function(){
//         count++;
//         console.log(count);
//     }
// }

// let fnc  = counter();
// fnc(); //print 1
// fnc(); //print 2
//=========================================================
//✅ Q3.

// Ek function sum banao jo 3 arguments ko alag alag function calls me accept kare aur unka sum return kare.
//Solution:

// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }

// let ans = sum(10);
// let ans1 = ans(12);
// let ans2 = ans1(12);
// console.log(ans2)
//=========================================================
// 🔹✅Q4. Greater Than with Closure
// Ek function greaterThan(n) banao jo ek function return kare
// Ye inner function ek number lega aur check karega ki wo n se bada hai ya nahi.
// Agar bada hai → true, nahi → false
//Solution:

// function greaterThan(n){

//     return function(y){
//         if(y>n) return true;
//         return false;
//     }
// }

// let fnc  = greaterThan(12);
// let ans  = fnc(20);
// console.log(ans)

//=========================================================

// ✅ Mini Practice Set (Self Try)
//---------------------------------------------------------
// ✅Q6: Ek function repeatN banao jo ek function aur number n accept kare. Function ko n baar call kare.

//Solution:

// function repeatN(n, callback) {
//     for (let i = 1; i <= n; i++) {
//         callback(n);
//     }
// }
// function sayHello(num) {
//     console.log(`${num} time chalega `)
// }
// repeatN(4, sayHello)

//---------------------------------------------------------

// ✅Q7: Ek function multiplyBy(x) banao jo ek function return kare. Inner function kisi number ko x se multiply kare.
//Solution:

// function multiplyBy(x){

//     return function(){
//         return x*2;
//     }
// }

// let fnc = multiplyBy(10);
// fnc();

//---------------------------------------------------------
// ✅Q8: Ek function isBetween(min, max) banao jo number accept kare aur check kare ki number min aur max ke beech hai ya nahi.
//Solution:

// function isBetween(min, max) {
//     return function (age) {
//         if (age > min && age < max) return true;
//         return false;
//     }
// }
// let checkAge = isBetween(12, 60);
// console.log(checkAge(19)
// )

//---------------------------------------------------------

//✅ // Q9: Ek function chainSum(a) banao jo multiple chained calls ke through sum calculate kare. Example: chainSum(1)(2)(3)(4)() → 10.

// //Solution:
// function chainSum(a) {
//     return function (b) {
//         return function (c) {
//             return function (d) {
//                 return a + b + b + d;
//             }
//         }
//     }
// }

// let sum1 = chainSum(1);
// let sum2 = sum1(2);
// let sum3 = sum2(3);
// let finalSum = sum3(4);
// console.log(finalSum)
//=========================================================



// ✅1. Write a higher-order function `runTwice(fn)` that
// takes another function and executes it two times.

// function runTwice(callback){
//     callback();
//     callback();
// }

// runTwice(function(){
//     console.log("Higher order function");
// })
//-----------------------------------------------------------------------------

// ✅5. Given an array of numbers, use `map()` to create a
// new array where each number is squared.

// let numbers = [12,23,45,67];
// let squared =numbers.map(function(number){
//     return  number*number;
// })

// console.log(squared);


//-----------------------------------------------------------------------------

// ✅6. Use `filter()` to get only even numbers from an
// array.

// let numbers = [24,13,53,46];
// let even =numbers.filter(function(number){
//    return number%2===0;
// })
// console.log(even);

//-----------------------------------------------------------------------------
// ✅7. Use `reduce()` to find the total salary from an array
// of numbers `[1000, 2000, 3000]`.

// let numbers = [1000, 2000, 3000];
// let total = numbers.reduce(function(acc,val){
//            return acc+val;
// },0)
// console.log(total);

//-----------------------------------------------------------------------------

// ✅8. Create an array of names and use `some()` and
// `every()` to test a condition (e.g., all names longer than
// 3 chars).

// let users = ["yug","ankita", "dilshan", "ambika rathore"];
// let somes = users.some(function(val){
//     return val.length>3;
// })

// console.log(somes);
//
//✅ 10. Create a nested object (`user → address → city`) and
// access the city name inside it.

// let user = {
//     name: "yugant",
//     age:23,
//     address:{
//         city: "indore",
//         country:"india"
//     }
// }

// let newuser  = {...user}    //destructuring the obj
// newuser.address.city="Bhopal";
// newuser.address.country = "America";

//-----------------------------------------------------------------------------












