var istatus =document.querySelector("h5");

var addfrend = document.querySelector("#add");
var check=0;


addfrend.addEventListener("click" , function(){
  if(check ==0){
    istatus.innerHTML= "frends"
  istatus.style.color= "green"
  addfrend.innerHTML="remove friend"
  check=1
  }else{
    istatus.innerHTML= "stranger"
  istatus.style.color= "red"
  addfrend.innerHTML="add friend"
  check=0
  }
  
})





