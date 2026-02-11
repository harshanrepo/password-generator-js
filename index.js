let box1=document.querySelector("#box-el")
let box2=document.querySelector("#box-el2")

chars = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z",
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "0","1","2","3","4","5","6","7","8","9",
  "!","@","#","$","%","^","&","*","(",")"
]
function random(){
  let n=chars.length
  let value=Math.floor(Math.random()*n)
  return chars[value]
}

function password(){
  let pass1="";
  let pass2="";
  for(i=0;i<11;i++){
    pass1+=random()
    pass2+=random()
  }
  box1.textContent=pass1
  box2.textContent=pass2
}