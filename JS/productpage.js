var product = JSON.parse(localStorage.getItem("productDis")) || []
console.log(product)
var cart = JSON.parse(localStorage.getItem("cartItems")) || []
display(product);

function display(product){

    product.map(function(elem){
        
        var imgdiv = document.createElement("div");
        imgdiv.setAttribute("class", "imgdiv")
        var pricediv = document.createElement("div");
        pricediv.setAttribute("class", "pricediv")
    
        var img = document.createElement("img")
        img.setAttribute("src", elem.image)

        var img1 = document.createElement("img")
        img1.setAttribute("src", elem.image1)

        var img2 = document.createElement("img")
        img2.setAttribute("src", elem.image2)

        var img3 = document.createElement("img")
        img3.setAttribute("src", elem.image3)


        var inclusive = document.createElement("div")
        inclusive.setAttribute("id","incl")

        var price = document.createElement("h2")
        price.textContent = "₹ " + elem.price;
        var incl = document.createElement("p")
        incl.textContent = "Inclusive of all taxes"

        inclusive.append(price,incl)

        var name = document.createElement("p")
        name.textContent = elem.name

        var free = document.createElement("p")
        free.textContent = "Free shipping on orders above INR 999"

        var color = document.createElement("h4")
        color.textContent = "Color: " + elem.color

        var innerimg = document.createElement("img")
        innerimg.setAttribute("src", elem.image)

        var size = document.createElement("p")
        size.textContent = "Size:"

        var sizeDiv= document.createElement("div")
        sizeDiv.setAttribute("id","sizediv")
        var button0 = document.createElement("button");
        button0.textContent = "36"
        var button1 = document.createElement("button");
        button1.textContent = "37"
        var button2 = document.createElement("button");
        button2.textContent = "38"
        var button3 = document.createElement("button");
        button3.textContent = "39"
        var button4 = document.createElement("button");
        button4.textContent = "40" 

        sizeDiv.append(button0,button1,button2,button3,button4)


        var selectQty = document.createElement("div")
        selectQty.setAttribute("id","qty")

        var qty = document.createElement("select")
        var option0 = document.createElement("option");
        option0.textContent = "Select quantity"
        var option1 = document.createElement("option");
        option1.textContent = "1"
        var option2 = document.createElement("option");
        option2.textContent = "2"
        var option3 = document.createElement("option");
        option3.textContent = "3"
        var option4 = document.createElement("option");
        option4.textContent = "4" 
        qty.append(option0,option1,option2,option3,option4)

        var basket = document.createElement("button")
        basket.textContent="Add to Basket"
        basket.setAttribute("onclick","cart()")
        basket.addEventListener("click",function(){
           addcart(elem)
        })

        selectQty.append(qty,basket)

        var fav = document.createElement("h4")
        fav.textContent = "♡ Add to Favourites"


        imgdiv.append(img,img1, img2, img3)
        pricediv.append(inclusive,name,free,color,innerimg,size,sizeDiv,selectQty,fav)
        document.querySelector("#container").append(imgdiv, pricediv)
    })
  
    
}


function addcart(elem){
    console.log("here")
    cart.push(elem)
    localStorage.setItem("cartItems",JSON.stringify(cart))
    window.location.href = "Cart.html"
}





localStorage.removeItem("productDis")
