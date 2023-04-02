
let first=document.getElementById("first_name");
let last=document.getElementById("last_name");
let email=document.getElementById("email");
let button=document.querySelector("button");
let user=JSON.parse(localStorage.getItem("user"))||[];

button.addEventListener("click",function(){
    if(first.value!==""&&last.value!==""&&email.value!==""){
        alert ("login sucessfull")
        
    }
     user={first_name:first.value,last_name:last.value,email:email.value}
    localStorage.setItem("user",JSON.stringify(user));
})