let bag=JSON.parse(localStorage.getItem("cart"))||[];
let bag_summary=document.getElementById("bag_summary");
let final=document.getElementById("final");
let total=document.getElementById("total");

let user=JSON.parse(localStorage.getItem("user"));
 let login_name=document.getElementById("username");

 let input=document.getElementById("input2");
 let button=document.getElementById("subscribe");
 let place=document.getElementById("place");

 place.addEventListener("click",function(){
    alert ("order placed successfull")
 })

 button.addEventListener("click",function(){
    if(input.value!==""){     
      alert ("subscribe successfull")
    }
  })


 if(user==null){
  login_name.innerText="Login\Register";
 }else{
  login_name.innerText=user.first_name;
 }


display(bag)

function display(arr){
    let sum=0;
    bag_summary.innerHTML=[];
    arr.forEach(element => {
        let cart=document.createElement("div")
        let img=document.createElement("img");
        let para=document.createElement("p");
        let price=document.createElement("h3");
        let delete1=document.createElement("h3");
        let div2=document.createElement("div");
        let incre=document.createElement("h3");
        let decre=document.createElement("h3");
        let quntity=document.createElement("h3");
       

        img.src=element.img;
        para.innerText=element.para;
        price.innerText="₹"+element.price
        delete1.innerText="🗑️";
        incre.innerText="+";
        decre.innerText="-";
        quntity.innerText=element.quntity;
        sum+=element.price*element.quntity;
        final.innerText="₹"+sum+".00";
        total.innerText="₹"+sum+".00";
        
        div2.append(incre,quntity,decre)
        cart.append(img,para,price,delete1,div2);
        bag_summary.append(cart);
        

        incre.addEventListener("click",function(){
            element.quntity++;
            localStorage.setItem("cart",JSON.stringify(arr))
            display(arr)
        })

        decre.addEventListener("click",function(){
            if(element.quntity>1){
            element.quntity--;
            }
            localStorage.setItem("cart",JSON.stringify(arr))
            display(arr)
        })

        delete1.addEventListener("click",function(){
            delete1=arr.filter(function(el){
                if(el.id!=element.id){
                    return true
                }else{
                    return false
                }
            })
            localStorage.setItem("cart",JSON.stringify(delete1))
            display(delete1)
        })


})
}