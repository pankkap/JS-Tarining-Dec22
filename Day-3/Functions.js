// 1. Function defination
// 2. Function Call
// 3. Optional Arguments: Input to the function
// 4. Optional Return statement: Output result

// Function defination: what tasks the function perform
function myFunction(x,y){
    console.log("This is Function Body")
    var z = x + y;
    return z;
}

var result = myFunction(5,10)
console.log("Result =",result)
var result = myFunction(15,10)
console.log("Result =",result)
var result = myFunction(25,-10)
console.log("Result =",result)
var result = myFunction(52,20)
console.log("Result =",result)

