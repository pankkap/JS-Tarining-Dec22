// DOM Method to manipulate the HTML Document
var h1 = document.getElementsByTagName("h1")

for(let i=0;i<h1.length;i++)
h1[i].style.color = "green";


console.log(h1[1])
h1[1].innerHTML = "This is JS Session on DOM"
// h1[1].style.color = "red"



var para = document.getElementById('para1')
console.log(para)
para.style.display = "none"


var headings = document.getElementsByClassName('head1')
console.log(headings)


var btn = document.querySelectorAll('h1')
console.log(btn)

btn.style.width = "200px"
btn.style.height= "150px"
btn.style.backgroundColor = "skyblue"