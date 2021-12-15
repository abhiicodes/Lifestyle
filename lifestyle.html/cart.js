// cart box
var cartData=JSON.parse(localStorage.getItem("cartItems"));
console.log(cartData);
cartData.map(function(elem){
    console.log(elem)
    var maindiv1=document.createElement("div");
    maindiv1.id="maindiv1"
    var div1=document.createElement("div");
    div1.id="imgdiv"
    var image=document.createElement("img");
    image.src=elem.productImg;
    // console.log(elem.productImg)
    
    var div2=document.createElement("div");
    div2.id="textdiv"
    var h4=document.createElement("h4");
    h4.textContent=elem.productName;

    // right div
    // var maindiv2=document.createElement("div");
    // maindiv2.id="maindiv2"
    // var div3=document.createElement("div");
    // var H4=document.createElement("h4");
    // H4.textContent=elem.productPrice;
    // var h4=document.createElement("h4");
    // h4.textContent=elem.totalPrice

    div1.append(image);
    div2.append(h4);
    maindiv1.append(div1,div2);
    // maindiv2.append(H4)
    document.querySelector("#cartBox").append(maindiv1);
})