var cartData=JSON.parse(localStorage.getItem("cartItems"));
// console.log(cartData);

var cartImg=document.querySelector("#cartImg");
var clothName=document.querySelector("#clothName");
var div1=document.querySelector("#div1");
var div2=document.querySelector("#div2");
var div3=document.querySelector("#div3");
var subTotalPrice=document.querySelector("#subTotalPrice");
var finalTotalPrice=document.querySelector("#subTotalPrice");

cartData.map(function(elem){
    var image=document.createElement("img")
    image.id="IMG"
    image.src=elem.productImg;

    var name=document.createElement("h4");
    name.textContent=elem.productName;
    var colour=document.createElement("p")
    colour.textContent=elem.productName;
    var size=document.createElement("p")
    size.textContent=elem.productName;

    var price=document.createElement("p")
    price.textContent=elem.productPrice;

    // var selectSize=document.createElement("select");
    // var option1=document.createElement("option");
    // option1.textContent=elem.ProductQuantity;

    var total=document.createElement("p")
    total.textContent=elem.totalPrice;

    // subtotalprice
    var subTotal=document.createElement("p");
    subTotal.textContent=elem.productPrice;

    // totalprice
    var finalPrice=document.createElement("h3");
    finalPrice.textContent=elem.productPrice;

    cartImg.append(image);
    clothName.append(name,colour,size);
    div1.append(price);
    // div2.append(selectSize);
    div3.append(total);
    subTotalPrice.append(subTotal);
    finalTotalPrice.append(finalPrice)
})