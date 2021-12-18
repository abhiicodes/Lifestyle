var products = JSON.parse(localStorage.getItem("productListt"));
var cart = JSON.parse(localStorage.getItem("productDis")) || []


displayPage(products);

function filterColor(){
            

    var ans = document.querySelector("#color").value

    var res = products.filter(function(elem){
        return elem.color == ans
    })
    displayPage(res)
}

function filterBrand(){
            

    var ans = document.querySelector("#brand").value

    var res = products.filter(function(elem){
        return elem.brand == ans
    })
    displayPage(res)
}









function priceSort(){
    var selected = document.querySelector("#sort").value
   
    if(selected=="low"){
        products.sort(function(a,b){
            return Number(a.price) - Number(b.price);
        });
    }else if(selected=="high"){
        products.sort(function(a,b){
            return Number(b.price) - Number(a.price);
        });
    }
    displayPage(products)
}

function displayPage(products){
    document.querySelector("#container").textContent = ""

    products.map(function(elem){
        var bigDiv = document.createElement("div");
        bigDiv.setAttribute("class", "bigdiv");
       

        var itemsDiv = document.createElement("div");
        itemsDiv.setAttribute("class", "itemsdiv");
        itemsDiv.addEventListener("click", function(){
            productPage(elem)
        })

        var sizeDiv = document.createElement("div");
        sizeDiv.setAttribute("class", "sizediv");
    
        var cartButton = document.createElement("button");
        cartButton.setAttribute("class", "cartbutton");
        cartButton.textContent = "Add to Basket"
        
        var selectSize = document.createElement("select")
        var option0 = document.createElement("option");
        option0.textContent = "Select Size"
        var option1 = document.createElement("option");
        option1.textContent = "37"
        var option2 = document.createElement("option");
        option2.textContent = "38"
        var option3 = document.createElement("option");
        option3.textContent = "39"
        var option4 = document.createElement("option");
        option4.textContent = "40" 

        selectSize.append(option0,option1,option2,option3,option4);
        sizeDiv.append(selectSize, cartButton);





        var image = document.createElement("img");
        image.setAttribute("src", elem.image);
        var price = document.createElement("h3");
        price.textContent = "₹" + elem.price
        var name = document.createElement("p");
        name.textContent = elem.name;

        itemsDiv.append(image,price,name);
        bigDiv.append(itemsDiv, sizeDiv);

        document.querySelector("#container").append(bigDiv)




    })
   


    


}

 function productPage(elem){
    cart.push(elem);
    localStorage.setItem("productDis", JSON.stringify(cart))
    window.location.href = "productpage.html"
    

}