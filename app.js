const colorarr = ["red","green","blue",'pink','yellow','orange'];

const btn = document.getElementById("btn");
const color = document.getElementById("color");


function colorChanger(){
const randomNumber = getrandomNumber();
document.body.style.backgroundColor = colorarr[randomNumber];
color.textContent = colorarr[randomNumber]
}


function getrandomNumber(){
  return Math.floor(Math.random()*colorarr.length)
}
btn.addEventListener("click" , colorChanger)
