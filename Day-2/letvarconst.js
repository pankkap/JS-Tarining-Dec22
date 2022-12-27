// Scope
// var global scope variable
// ES6 let keyword


function hello()
{
    const a = 20;  // local variable
    console.log(a)
    {
        const a = 30
        console.log(a)
    }
    console.log(a)

}
hello();
// console.log(a)


for (let i=1;i<10;i++)
console.log(i)

// global scope
// function local scope
// block scope const let

// let a = 10;
// console.log(a)
// let a = 20;
// console.log(a)