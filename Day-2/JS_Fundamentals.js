"use strict"
// Output Statement
// document.write('Hello Friends')
var a = 10;
var b = 20;

// document.write("<h1> Result=",a+b,"</h1>")
// alert("Result="+(a+b))
console.log("This is a console screen message")
// ctrl+shift+j for opening console screen in Chrome



// Comments: for documentation purpose 

// Single line comment
/*
Multiline
Comment
*/

// Variables in JavaScript
var x = 10;
var fname = "pankaj"

var age = 20;
console.log(x,fname, age)

// Variables Identifier Rules
//  1. variable are casesensitive
//  2. variable name can not start from Number
//  3. Only underscore (_) is used as special symbols
//  4. spaces are not allow between variable name
//  5. you can not use variable name as keyword

var firstName = "pankaj"
var PI = 3.14

// Data Types in JavaScript

// 1. String
var fname = "Pankaj"
var lnmae = 'kapoor'
var address = `
                Hno. 12345, 
                City: Yamunanagr
                State: Haryana
              `;

// 2. Number Data type
var distance = 40;
var exactDistnace = 40.3;

// 3. Boolean DT
var isOpen = false
var isMarried = true

var data = undefined
var data1 = null;

console.log(typeof data)
// typeof is an operator to check what kind of data is stored inside a variable

if (typeof distance === 'number')
{
    console.log('It is number data type')
}


// What is type of programming lanaguage ?
// Loosely typed lanuage
var myName = "Rohit"
myName = 1212
myName = true
console.log(myName)


function sayHi(value)
{
    if(value)
    {
        console.log("Your code is correct")
    }
    else
    {
        console.log("Your code is incorrect")

    }
}

sayHi("true")

// Javascript worked in two Modes
// 1. sloppy mode
// 2. strict Mode
var mydata = "this is a statement"
console.log(mydata)


// Dialog Boxes in JavaScript

alert("This is a Notification")
var result = confirm("Is statement is Ok ")
console.log(result)
var value = prompt("Enter your Value")
console.log(value)