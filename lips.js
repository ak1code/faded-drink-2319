let arr=[ 
    {id: 1, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F01_044847a5-bda3-4987-ac04-5bca0ff63193.jpg%3Fv%3D1680073209&w=256&q=75", para:"Matte As Hell Crayon Lipstick ", price: 849, feature:"Crayon",product_type:"Crayon Lipstick"},
    {id: 2, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_ef579f2e-602e-4d2f-bed2-bf0efdf4f184.jpg%3Fv%3D1644325813&w=256&q=75", para:"Smudge Me Not Liquid Lipstick ", price: 425, feature:"Crayon",product_type:"Liquid Lipstick"},
    {id: 3, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_e241e84d-810a-46ab-abe9-c50f157061a8.jpg%3Fv%3D1680091223&w=256&q=75", para:"Smudge Me Not Liquid Lipstick ", price: 599, feature:"Crayon",product_type:"Lip Cream"},
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
    {id: 16, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FMousseMuseMaskproofLipCreamPDPimages-1080x1080-1TO5SHADES1_96a35d97-2e7f-43eb-add1-936f5b0b5e2c.jpg%3Fv%3D1680091583&w=256&q=75", para:"Mousse Muse Maskproof Lip Cream - 03 Red Square", price: 540, feature:"Crayon",product_type:"Lip Cream"},
    {id: 17, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FMousseMuseMaskproofLipCreamPDPimages-1080x1080-1TO5SHADES1_6b0cb844-9e21-4815-9480-279fc049f2ac.jpg%3Fv%3D1680091535&w=256&q=75", para:"Mousse Muse Maskproof Lip Cream - 02 Pinkie", price: 540, feature:"Crayon",product_type:"Lip Cream"},
    {id: 18, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FAirKissPowderPoweredByImagesArtboard1.jpg%3Fv%3D1644813116&w=256&q=75", para:"Air Kiss Powder Lipstick - Air Kiss Powder Lipstick- 01 Mocha Mousse", price: 425, feature:"Crayon",product_type:"POWDER LIPSTICKS"},
    {id: 19, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FArtboard1_c338b616-ee32-4c99-af1a-9501ceda79b6.jpg%3Fv%3D1644813354&w=256&q=75", para:"Air Kiss Powder Lipstick - Air Kiss Powder Lipstick- 05 Strawberry Macaron", price: 425, feature:"Crayon",product_type:"POWDER LIPSTICKS"},
    {id: 20, img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2Fsugar-cosmetics-matte-as-hell-crayon-lipstick-minis-set-28270316945491.jpg%3Fv%3D1675401557&w=256&q=75", para:"Matte As Hell Crayon Lipstick Minis Set", price: 425, feature:"Crayon",product_type:"Gifts & Sets"},

    ]
 

      let arr2=[...arr]; 
    let right=document.getElementById("right");
    let sorting=document.getElementById("sorting");
    let filter=document.getElementById("filter");
    let one=document.getElementById("one");
    let two=document.getElementById("two");
    let bag=JSON.parse(localStorage.getItem("cart"))||[];

    two.addEventListener("change",function(){
        if(two.checked==true){
            let temp=arr.filter(function(el){
               if(two.value==el.product_type){
                return true;
               }
               else{
                return false;
               }
            })
            display(temp)
        }
        else{
            display(arr)
        }
    })

     one.addEventListener("change",function(){
        if(one.checked==true){
            let temp=arr.filter(function(el){
               if(one.value==el.product_type){
                return true;
               }
               else{
                return false;
               }
            })
            display(temp)
        }
        else{
            display(arr)
        }
     })

     

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
                bag.push({...element,quntity:1});
                console.log(bag)
                localStorage.setItem("cart",JSON.stringify(bag));
               
            })

        });
    }
    display(arr)