let arr=[ 
    {id: 1, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F01_044847a5-bda3-4987-ac04-5bca0ff63193.jpg%3Fv%3D1680073209&w=256&q=75", para:"Matte As Hell Crayon Lipstick ", price: 849, feature:"Crayon",product_type:"Crayon Lipstick"},
    {id: 2, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_ef579f2e-602e-4d2f-bed2-bf0efdf4f184.jpg%3Fv%3D1644325813&w=256&q=75", para:"Smudge Me Not Liquid Lipstick ", price: 425, feature:"Crayon",product_type:"Liquid Lipstick"},
    {id: 4, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2Fsugar-cosmetics-lipping-on-the-edge-lip-liner-01-taffeta-terracotta-13278188568659.jpg%3Fv%3D1619109027&w=256&q=75", para:"Lipping On The Edge Lip Liner ", price: 447, feature:"Crayon",product_type:"Lip Liner"},
    {id: 5, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2Fsugar-cosmetics-mettle-liquid-lipstick-01-lyra-cool-toned-plum-13200549380179.jpg%3Fv%3D1619110238&w=256&q=75", para:"Mettle Liquid Lipstick ", price: 1020, feature:"Crayon",product_type:"Liquid Lipstick"},
    {id: 6, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2Fsugar-cosmetics-smudge-me-not-lip-duo-01-brazen-raisin-burgundy-13200661643347.jpg%3Fv%3D1619108721&w=256&q=75", para:"Smudge Me Not Lip Duos ", price: 599, feature:"Crayon",product_type:"Liquid Lipstick"},
    {id: 7, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_6f55bcac-3e42-4253-88ee-cec0fa43c62a.jpg%3Fv%3D1645608270&w=256&q=75", para:"Matte Attack Transferproof Lipstick ", price: 749, feature:"Crayon",product_type:"Mattle Lipstick"},
    {id: 8, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2Fsugar-cosmetics-limited-edition-nothing-else-matter-longwear-lipstick-15288678613075.jpg%3Fv%3D1619115170&w=256&q=75", para:"Limited Edition Nothing Else Matter Longwear Lipstick ", price: 510, feature:"Crayon",product_type:"Mattle Lipstick"},
    {id: 9, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2Fsugar-cosmetics-mettle-satin-lipstick-01-sophie-bright-fuchsia-pink-fuchsia-13706258088019.jpg%3Fv%3D1619116113&w=256&q=75", para:"Mettle Satin Lipstick - 02 Elizabeth (Rosy Cheeks Pink) ", price: 850, feature:"Crayon",product_type:"Mattle Lipstick"},
    {id: 10, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2Fsugar-cosmetics-mettle-matte-lipstick-01-athena-red-terracotta-13200497737811.jpg%3Fv%3D1619110264&w=256&q=75", para:"Mettle Matte Lipstick - 05 Hedone", price: 549, feature:"Crayon",product_type:"Mattle Lipstick"},
    {id: 11, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2Fsugar-cosmetics-lip-service-sugar-scrub-28015074508883.jpg%3Fv%3D1619155562&w=256&q=75", para:"Lip Service Sugar Scrub", price: 399, feature:"Crayon",product_type:"SCRUB"},
    {id: 12, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FArtboard1.jpg%3Fv%3D1676035817&w=256&q=75", para:"SUGAR Tipsy Lips Scrub + Balm Duo", price: 499, feature:"Crayon",product_type:"Lip Balm"},
    {id: 13, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FArtboard1_afb1d932-4aaf-4f25-a299-03d6d8f75dd1.jpg%3Fv%3D1675959716&w=256&q=75", para:"SUGAR Tipsy Lips Scrub + Balm Duo - 02 Cosmopolitan", price: 499, feature:"Crayon",product_type:"Lip Balm"},
    {id: 14, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FArtboard1_fef09d1f-c8c9-466e-aa99-9bbaa5868c2c.jpg%3Fv%3D1675959773&w=256&q=75", para:"SUGAR Tipsy Lips Scrub + Balm Duo - 07 Bramble", price: 499, feature:"Crayon",product_type:"Lip Balm"},
    {id: 15, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FArtboard1_2d1deabb-9d3b-4852-8477-c8e622938417.jpg%3Fv%3D1675959745&w=256&q=75", para:"SUGAR Tipsy Lips Scrub + Balm Duo - 05 Irish Coffee", price: 499, feature:"Crayon",product_type:"Lip Balm"},
    {id: 18, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FAirKissPowderPoweredByImagesArtboard1.jpg%3Fv%3D1644813116&w=256&q=75", para:"Air Kiss Powder Lipstick - Air Kiss Powder Lipstick- 01 Mocha Mousse", price: 425, feature:"Crayon",product_type:"LIPSTICKS"},
    {id: 19, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FArtboard1_c338b616-ee32-4c99-af1a-9501ceda79b6.jpg%3Fv%3D1644813354&w=256&q=75", para:"Air Kiss Powder Lipstick - Air Kiss Powder Lipstick- 05 Strawberry Macaron", price: 425, feature:"Crayon",product_type:"LIPSTICKS"},
    {id: 20, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2Fsugar-cosmetics-matte-as-hell-crayon-lipstick-minis-set-28270316945491.jpg%3Fv%3D1675401557&w=256&q=75", para:"Matte As Hell Crayon Lipstick Minis Set", price: 425, feature:"Crayon",product_type:"Gifts & Sets"},
    {id: 16, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FMousseMuseMaskproofLipCreamPDPimages-1080x1080-1TO5SHADES1_96a35d97-2e7f-43eb-add1-936f5b0b5e2c.jpg%3Fv%3D1680091583&w=256&q=75", para:"Mousse Muse Maskproof Lip Cream - 03 Red Square", price: 540, feature:"Crayon",product_type:"Lip Cream"},
    {id: 17, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FMousseMuseMaskproofLipCreamPDPimages-1080x1080-1TO5SHADES1_6b0cb844-9e21-4815-9480-279fc049f2ac.jpg%3Fv%3D1680091535&w=256&q=75", para:"Mousse Muse Maskproof Lip Cream - 02 Pinkie", price: 540, feature:"Crayon",product_type:"Lip Cream"},
    {id: 3, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_e241e84d-810a-46ab-abe9-c50f157061a8.jpg%3Fv%3D1680091223&w=256&q=75", para:"Smudge Me Not Liquid Lipstick ", price: 599, feature:"Crayon",product_type:"Lip Cream"},
    {id: 21, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F464576762-launch_sugar-la-la-love-18hr-liquid-lipstick-wbg-powered-by-images_01.jpg%3Fv%3D1674489987&w=256&q=75", para:"Limited Edition La La Love 18HR Liquid Lipstick", price: 399, feature:"Crayon",product_type:"Gifts & Sets"},
    {id: 22, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FShade1_a136addf-e9e1-4537-9b5f-ccad95ff1e65.jpg%3Fv%3D1673627339&w=256&q=75", para:"Limited Edition La La Love 18HR Liquid Lipstick CherryCrush", price: 399, feature:"Crayon",product_type:"Gifts & Sets"},
    {id: 23, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FShade2_71ded7bd-c2aa-4450-913b-bcee9510d594.jpg%3Fv%3D1673627346&w=256&q=75", para:"Limited Edition La La Love 18HR Liquid Lipstick Scarlet Smitten", price: 399, feature:"Crayon",product_type:"Gifts & Sets"},
    {id: 24, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2Fsugar-cosmetics-time-to-shine-lip-gloss-13905851580499.jpg%3Fv%3D1619116676&w=256&q=75", para:"Time to Shine Lip Gloss", price: 599, feature:"Crayon",product_type:"Lip Gloss"},
    {id: 25, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2Fsugar-cosmetics-time-to-shine-lip-gloss-03-mellow-kitty-deep-peach-nude-13906038947923.jpg%3Fv%3D1619116728&w=256&q=75", para:"Time to Shine Lip Gloss 03-Mellow Kitty(Deep Peach Nude", price: 499, feature:"Crayon",product_type:"Lip Gloss"},

    ]
 

      let arr2=[...arr]; 
    let right=document.getElementById("right");
    let sorting=document.getElementById("sorting");
    let filter=document.getElementById("filter");
    let Crayon_Lipstick=document.getElementById("Crayon_Lipstick");
    let Liquid_Lipstick=document.getElementById("Liquid_Lipstick");
    let Mattle_Lipstick=document.getElementById("Mattle_Lipstick");
    let Lip_Gloss=document.getElementById("Lip_Gloss");
    let SCRUB=document.getElementById("SCRUB");
    let Gifts_Sets=document.getElementById("Gifts_Sets");
    let Lip_Cream=document.getElementById("Lip_Cream");
    let Lip_Balm=document.getElementById("Lip_Balm");
    let search=document.getElementById("input");
    let button_search=document.getElementById("button");
    let lipstick=document.getElementById("LIPSTICKS");
    let Lip_Liner=document.getElementById("Lip_Liner");

    let input=document.getElementById("input2");
  let button=document.getElementById("subscribe");

    let user=JSON.parse(localStorage.getItem("user"));
 let login_name=document.getElementById("username");


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
    


    let bag=JSON.parse(localStorage.getItem("cart"))||[];


    button_search.addEventListener("click",function(){
        let filtered=arr.filter(function(el){
          if(el.para.toLowerCase().includes(search.value.toLowerCase()))
          return true;
          else{
            return false;
          }
        })
        display(filtered)
      })

      Lip_Liner.addEventListener("click",function(){
        gotit();
      })

    lipstick.addEventListener("click",function(){
        gotit();
      })
    Liquid_Lipstick.addEventListener("change",function(){
        gotit();
    })

    Crayon_Lipstick.addEventListener("change",function(){
        gotit();
     })

     Mattle_Lipstick.addEventListener("change",function(){
        gotit();
     });
     Lip_Gloss.addEventListener("change",function(){
        gotit();
     });
     SCRUB.addEventListener("change",function(){
        gotit();
     });
     Gifts_Sets.addEventListener("change",function(){
        gotit();
     });
     Lip_Cream.addEventListener("change",function(){
        gotit();
     });
     Lip_Balm.addEventListener("change",function(){
        gotit();
     });

     function gotit(){
            let Crayon_LipstickVal=Crayon_Lipstick.checked;
            let Liquid_LipstickVal=Liquid_Lipstick.checked;
            let Mattle_LipstickVal=Mattle_Lipstick.checked;
            let Lip_GlossVal=Lip_Gloss.checked;
            let SCRUBVal=SCRUB.checked;
            let Gifts_SetsVal=Gifts_Sets.checked;
            let Lip_CreamVal=Lip_Cream.checked;
            let Lip_BalmVal=Lip_Balm.checked;
            let lipstickVal=lipstick.checked;
            let Lip_LinerVal=Lip_Liner.checked;
            
            if(Crayon_LipstickVal==false && Liquid_LipstickVal==false && Mattle_LipstickVal==false && Lip_GlossVal==false && SCRUBVal==false && Gifts_SetsVal==false && Lip_CreamVal==false && Lip_BalmVal==false && lipstickVal==false && Lip_LinerVal==false){
              display(arr)
            }
            else{
            var filter1 = arr.filter(x=> (Crayon_LipstickVal == true && x.product_type == Crayon_Lipstick.value) || (Liquid_LipstickVal == true && x.product_type == Liquid_Lipstick.value) || (Lip_GlossVal == true && x.product_type == Lip_Gloss.value) || (Mattle_LipstickVal == true && x.product_type == Mattle_Lipstick.value) || (SCRUBVal == true && x.product_type == SCRUB.value) || (Gifts_SetsVal == true && x.product_type == Gifts_Sets.value) || (Lip_CreamVal == true && x.product_type == Lip_Cream.value) || (Lip_BalmVal == true && x.product_type == Lip_Balm.value) || (lipstickVal == true && x.product_type == lipstick.value)||(Lip_LinerVal == true && x.product_type == Lip_Liner.value))
            
            display(filter1);
            }
     }
     

    sorting.addEventListener("change",function(){
        if(sorting.value==="Relevance")
        display(arr);
        else if(sorting.value==="high"){
            arr2.sort(function (a,b){return b.price-a.price});
            display(arr2)
        }
        else if(sorting.value==="low"){
            arr2.sort(function (a,b){return a.price-b.price});
            display(arr2)
        }
        
    })

    display(arr)
    function display(arr){
        right.innerHTML=[];
        arr.forEach(element => {
            let cart=document.createElement("div")
            let img=document.createElement("img");
            let para=document.createElement("p");
            let price=document.createElement("p");
            let button=document.createElement("button");

            img.src=element.img;
            para.innerText=element.para;
            price.innerText="₹"+element.price
            button.innerText="ADD TO BAG";

            cart.append(img,para,price,button);
            right.append(cart);

            button.addEventListener("click",function(){
              if(addclick(element)==true){
                alert ("allready present in the bag")
              }
              else{
                bag.push({...element,quntity:1});
                alert ("added to the bag")
                localStorage.setItem("cart",JSON.stringify(bag));
              }
            })

        });
    }
    function addclick(element){
      for(let i=0;i<bag.length; i++){
        if(element.id==bag[i].id){
          return true;
        }
      }
       return false;
    }
    