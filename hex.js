const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const hexbtn = document.getElementById("hexbtn");

const hexcolor = document.getElementById("hexcolor")


function randomhexcolor(){
  let hexnumber = "#";
  for(i=0;i<6;i++){
    hexnumber+= hex[getrandomnumber()]
  }
  hexcolor.textContent = hexnumber
  document.body.style.backgroundColor = hexnumber;
}

function getrandomnumber(){
  return Math.floor(Math.random()*hex.length)
}


hexbtn.addEventListener('click', randomhexcolor)
