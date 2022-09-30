function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');
/* console.log (hello)
console.log (dojo)
*/


function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);

/*

//console.log= [15]

diagrama en t
variables       valores
result             15

*/


function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);

/*

//console.log= [18]

diagrama en t 
variables        valores 
result             18

*/


var num = 15;
console.log(num);
function logAndReturn(num2){
   console.log(num2);   
   return num2;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);

/*
console.log= (num) 15
console.log= (num2)  15
console.log= (result) 10

diagrama en t 
variables        valores
num               15
result            20
*/

var num = 15;
console.log(num);
function timesTwo(num2){
   console.log(num2);   
   return num2*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);

/*
console.log  15
console.log  20 
console.log  10
console.log  15

diagrama de t 
variable      valores
num           |15
result        |10 
*/

function timesTwoAgain(num) {
    console.log('num is', num);
    var y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);

/* 
console.log 6
console.log 16

diagrama de t 
variable         valores
y              | 6
result         | 16
*/

function sumNums(num1, num2) {  
    return num1+num2;
 }
 console.log(sumNums(2,3))
 console.log(sumNums(3,5))
/*
console.log 5
console.log 8
*/

function printSumNums(num1, num2) {
    console.log(num1);   
    return num1+num2;
 }
 console.log(printSumNums(2,3))
 console.log(printSumNums(3,5))
/*
console.log 2
console.log 5
console.log 8
*/

function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result);
/*
console.log  5+8 =13
console.log  13

diagrama de t 
variables       valores
sum           5+8 =13
result        13
*/

function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);
/*
console.log 5
console.log 19

diagrama de t 
variables     valores 
sum          5 + 3 + 3 + 3 + 5
result        19
*/




