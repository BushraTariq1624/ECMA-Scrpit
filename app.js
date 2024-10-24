// // __________________VARIABLE SCOPING______________
// //BLOCK SCOPE
// {
//     let a = 6;
//     var g = 7;
//     console.log(a);
//     console.log(g);

// }
// console.log(a);
// console.log(g);


// //FUNCTION SCOPE
// function ax() {
//     let s = 3;
//     console.log(s)
// }
// ax()
// console.log(s)

// //GLOBAL SCOPE
// let p = 42;
// function ax() {
//     let s = 3;
//     console.log(s)
//     console.log(p)
// }
// ax()
// console.log(s);
// console.log(p);

// //________________CLOSURE_________________
// let message = "Good global";
// function hello1(){
//     let message = "Good Morning"
//     {
//         let message= "Good Afternoon"
//         console.log("hello 1: " + message);
//     }
//     console.log("hello 1: " + message);
// }
// hello1()

// let message = "Good global";
// function hello1(){
//     let message = "Good Morning"
//     {
//         let message= "Good Afternoon"
//         console.log("hello 1: " + message);
//     }
//     let c = function hello2(){
//         console.log("I'm C "+message);
//     }
//     return c
// }
// c=hello1()
// c()

// //__________________________TEMPLATE LITTERALS________________________
// let a = "pakistan"
// let b= "Islamabad"
// let capital = `${b} is the capital of ${a}`
// console.log(capital)

// //____________________________ DESTRUCTURING_____________________
// //IN ARRAY
// let arr=[3,5,23,23,2,3]
// let [a,b,c,d,e,f]=arr;
// console.log(a,b,c,d,e,f)

// // REST/SPREAD OPERATOR
// let arr=[3,5,23,23,2,3]
// let [a,b,...rest]=arr;
// console.log(a,b,rest)

// let arr=[3,5,23,23,2,3]
// let [a, , ,...rest]=arr;
// console.log(a,rest)

// let arr=[3,5,23,23,2,3]
// let [a, ,b ,...rest]=arr;
// console.log(a,b,rest)

// //IN OBJECT
// const obj={a:1,b:2}
// const {a,b}=obj
// console.log(a,b);

// let obj = {
//     userName : "Bushra",
//     sirName : "Tariq",
//     age: 20
// }
// console.log({...obj, userName: "Fizza"})

// //_____________________________________Primitive Data Types_____________________________
// let num1 =5;
// let num2 = num1
// console.log(num1);
// console.log(num2);
// num1++
// console.log(num1); //6
// console.log(num2); //5


// //_____________________________________Non Primitive Data Types_____________________________
// let arr1 = [1,2,3]
// let arr2 = arr1
// console.log(arr1);
// console.log(arr2);
// arr1.push(4)
// console.log(arr1); //[1,2,3,4]
// console.log(arr2); //[1,2,3,4]

// //______________________________CALLBACK FUNCTIONS__________________________________
// function myFunc2(){
//     console.log("I am func 2");
// }
// function myFunc(Callback){
//   console.log(Callback);
//   Callback()  
// }
// myFunc(myFunc2)

// //_________________________________ARROW FUNCTION____________________________________
// myFunc = (name) => {
//     console.log("Hello " + name);
// }
// myFunc("Arrow Function")

// //____________________________FUNCTION EXPRESSION____________________________________
// ("Arrow Function")
// //Function Expression
// var myFunc1 =function(name){
//     console.log("Hello "+ name);
// }
// myFunc1("Function Expression")
// const funcOutput = myFunc1
// funcOutput("Function Expression")
// console.log(funcOutput);

// //____________________________HIGHER ORDER FUNCTION____________________________________
// // Function returning Function
// function outerFunction() {
//     function innerFunction() {
//         console.log("Hello World");
//     }
//     return innerFunction
// }
// // outerFunction()
// const ans = outerFunction()
// ans()

// function firstFunc(){
//     const firstVar = 10
//     function secondFunc(){
//         const secondVar =20
//         function thirdFunc(){
//             const thirdVar = 30
//             console.log(firstVar,secondVar,thirdVar);    
//         }
//         return thirdFunc
//     }
//     return secondFunc
// }
// const ans = firstFunc()//return secondFunc
// const finalAns = ans() //return thirdFunc
// finalAns()

// //________________________________EXPONENTIAL OPERATOR____________________________
// function calculatePower(exp) {
//     return function(base){
//         return base ** exp
//     }
// }
// const cube = calculatePower(3)
// console.log(cube(5))

// //_________________________________TERNARY OPERATOR________________________________
// let age = 14
// let drink;
// // if(age>=5){
// //     drink = "Tea"
// // }else{
// //     drink = "Milk"
// // }
// // console.log(drink);
// let drink2 = age >=5 ? "Tea ": "Milk"
// console.log(drink2);

// //______________________________________TYPE COERSION ___________________________________

// console.log(true + 1)//2

// console.log(false + 1)//1

// //___________________________________typeOf/isArray________________________________
// var arr=[1,23,45,3,32]
// var obj = {a:3,b:5}
// console.log(typeof arr)
// console.log(typeof obj)
// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));

// //______________________________BOOLEAN METHOD___________________________________________
// false
// 0
// "" (Empty String)
// null
// undefined
// NaN
// console.log(Boolean("false"));

// //_____________________________OBJECT FREEZE
// const person = {
//     name : "Umra",
//     class: 8
// }
// Object.freeze(person)
// person.name = "Bushra"
// person.gender = "Female"
// delete person.class
// console.log(person);
// let person2 = Object.assign({},person) //Shallow Copy Of Object
// console.log(person2);
// person2.name="adnan"
// console.log(person2);

// //_________________________________ARRAY METHODS_____________________________________________________

// //-----------FOR EACH---------------

// var array=[1,3,4,2,5]
// function multiplyBy2(num,index,arr){
//     console.log(num*2 ,"index is: ", index, "Array is: ",arr);
// }
// array.forEach(multiplyBy2)


// const arrayLike = {
//     length : 3,
//     0 : 2,
//     1 : 3,
//     2 : 4,
//     3 : 5
// }
// Array.prototype.forEach.call(arrayLike, (x)=> console.log(x))

// //---------------MAP---------------------

// const arr = [1,2,3,4]
// const mapArr = function(num){
//     // console.log(num*num);
//     return num * num
// }
// // const squareArr = arr.map(mapArr)
// // console.log(squareArr);
// console.log(arr.map(mapArr));


// var ary = [11,21,23,24,65]
// // var b=ary.map(test)
// function test(x){
//     return x*2;
// }
// // console.log(b);

// console.log(ary.map(test));

// var ary =[
//     {fname:"yahoo",lname:"baba"},
//     {fname:"bushra",lname:"tariq"},
//     {fname:"abdul",lname:"ghufran"}
// ]
// function testing(x){
//     // return x
//     // return x.fname
//     return x.lname
// }
// console.log(ary.map(testing));

// //-----------------FIND / FIND INDEX--------------------

// var ages=[21,12,42,15]
// console.log(ages);
// var b= ages.find(checkAdult)//return item
// var c= ages.findIndex(checkAdult)// return index
// console.log(b);
// console.log(c);
// function checkAdult(age){
//     return age >=18
// }

// var users = [
//     {id: 1, name: "Umra"},
//     {id: 2, name: "Wajeeha"},
//     {id: 3, name: "Sana"}
// ]
// const findUser= users.find(user =>{
//    return user.id===2 //returns the value of the first element that passes a test
// })
// console.log(findUser);

//--------------------EVERY---------------------

//  var ages=[21,22,42,125] // all items must fulfill the condition like here ever value is greater than 18
// console.log(ages);
// var b = ages.every(checkAdult)
// console.log(b);

// function checkAdult(age){
//     return age >=18
// }
// const products = [
//     {productId:1, productName: "Laptop", price: 45000},
//     {productId:2, productName: "Mobile", price: 25000},
//     {productId:3, productName: "Watch", price: 15000},
// ]
// const productsPrice = products.every(product => product.price <= 50000) //returns true if the function returns true for all elements
// // const productsPrice = products.every(product => product.price <= 30000) //returns false if the function returns false for one element
// console.log(productsPrice);

// //-------------------FILTER-------------------

// var ages = [12, 64, 42, 32, 2]
// var b = ages.filter(checkAdult)
// console.log(b);

// function checkAdult(age) {
//     return age >= 18
// }

// //----------------SOME------------
// var ages = [12, 64, 42, 32, 2]
// var b = ages.some(checkAdult)
// console.log(b);

// function checkAdult(age) {
//     return age >= 18
// }

// //-----------REDUCE------------------

// let arr =[1,3,2,4,13]
// let newarr= arr.reduce((h1,h2)=>{
//     return h1+h2;
// })
// console.log(newarr);

// //-----------------SORT------------------
// var s= ["sanjay","aman","rehman","karan"]
// s.sort()
// console.log(s);

// //--------------------REVERSE-------------
// var s= ["sanjay","aman","rehman","karan"]
// s.reverse()
// console.log(s);

// //--------------------fill------------
// var s= ["sanjay","aman","rehman","karan"]
// s.fill("roma")
// console.log(s);