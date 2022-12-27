// 1. Inline Event Handling
// 2. Event Binding using reference
// 3. Event Handling using Add Event Listener


function myTasks(){
   
    document.querySelector('p').style.display = "none"
}


var btn = document.querySelector('button');
// console.log(btn)
// btn.onmouseover = myTasks
// btn.onmouseleave = myTasks1

function myTasks1(){
    // document.querySelector('h1').style.color = "black";
    // document.getElementsByClassName('head1')[1].style.textAlign = "left"
    // document.querySelector('p').style.color = "black"

    location.reload();
}


btn.addEventListener('click', myTasks)
btn.removeEventListener('click', myTasks)
