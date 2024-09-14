alert("sorry");
const inputbox = document.getElementById("input-box");
const tasks = document.getElementById("text");

 function addfun(){
  if(inputbox.value == ""){
    alert("please enter something");
  }else{
    let n = document.createElement("li");
    n.innerHTML = `${inputbox.value} <i class="fa-solid fa-xmark id="i"></i>`; 
    tasks.appendChild(n);
    inputbox.value="";

    n.querySelector("i").addEventListener("click",remove);
    function remove(){
      n.remove()

    }

    }
    
  }
 
  

 

 