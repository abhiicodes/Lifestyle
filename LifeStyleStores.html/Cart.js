
var cartData = [{
    brand: "wrangler",
color: "white",
image: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010136870-Blue-Blue-1000010136870_01-2100.jpg",
image1: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010136870-Blue-Blue-1000010136870_02-2100.jpg",
image2: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010136870-Blue-Blue-1000010136870_03-2100.jpg",
image3: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010136870-Blue-Blue-1000010136870_04-2100.jpg",
name: "WRANGLER Men Checked Slim Fit Casual Shirt",
price: "1999",
size: "m"
},
{
    brand: "wrangler",
color: "white",
image: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010136870-Blue-Blue-1000010136870_01-2100.jpg",
image1: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010136870-Blue-Blue-1000010136870_02-2100.jpg",
image2: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010136870-Blue-Blue-1000010136870_03-2100.jpg",
image3: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010136870-Blue-Blue-1000010136870_04-2100.jpg",
name: "WRANGLER Men Checked Slim Fit Casual Shirt",
price: "1999",
size: "m"
}
]

// cart function
// var T=0;
// cartData.map(function(elem){
//     var Total=elem.price;
    // var sp=Total.split(" ")[1].split("");
    // sp.pop();
    // sp.pop();
//    var price=sp.join("");
//    Price=+Price;
//   T=T+Price;
//   console.log(T); 
// })


 
cartData.map(function(elem){
    var maindiv=document.createElement("div");
    maindiv.id="maindiv";
    
    var leftdiv=document.createElement("div");
    leftdiv.id="leftimgdiv";

    // for image
    var dress=document.createElement("div");
    dress.id="cartImg";
    var dressimg=document.createElement("img");
    dressimg.id="IMG"
    dressimg.src=elem.image;
    dress.append(dressimg);

    // for dress detail
    var dressdetail=document.createElement("div");
    dressdetail.id="clothName";
    var name=document.createElement("h4")
    name.textContent=elem.name;

    var colourdiv=document.createElement("div")
    colourdiv.id="colourdiv"
    var colourtitle=document.createElement("p");
    colourtitle.textContent="Colour: ";
    var colour=document.createElement("p");
    colour.textContent=elem.color;
    colourdiv.append(colourtitle,colour);

    var sizediv=document.createElement("div");
    sizediv.id="sizediv"
    var sizetitle=document.createElement("p");
    sizetitle.textContent="Size: ";
    var size=document.createElement("p");
    size.textContent=elem.size;
    sizediv.append(sizetitle,size)
    dressdetail.append(name,colourdiv,sizediv); 
    // left div append
    leftdiv.append(dress,dressdetail);

    var rightdiv=document.createElement("div");
    rightdiv.id="rightdetaildiv";
    var div1=document.createElement("div");
    div1.id="div1";
    var price=document.createElement("p");
    price.textContent=elem.price;

    var div2=document.createElement("div");
    div2.id="div2";
    var quantity=document.createElement("select");
    var option1=document.createElement("option");
    option1.textContent="1"
    var option2=document.createElement("option");
    option2.textContent="2"
    var option3=document.createElement("option");
    option3.textContent="3";
    quantity.append(option1,option2,option3);
    div2.append(quantity);

    var div3=document.createElement("div");
    div3.id="div3";
    var total=document.createElement("p");
    total.textContent=elem.price;
    div3.append(total);

    div1.append(price);
    rightdiv.append(div1,div2,div3);
    maindiv.append(leftdiv,rightdiv);
    document.querySelector("#cc").append(maindiv);

    
    // document.getElementById("subTotalPrice").textContent=T;
    // document.getElementById("finalTotalPrice").textContent=T;
})




