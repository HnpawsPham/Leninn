
function displayOnScreen(){
    let totalPrice=document.getElementById("total").querySelector("span")
    let total=0
    
    if(localStorage.getItem("cart")){

        let  userCart = JSON.parse(localStorage.getItem("cart")) || []

        for(let item of userCart){
            total+= item.cost *100* item.quantity
            console.log(total)
            console.log(item.cost)

            let card = document.createElement("div")
            card.classList.add("card")

            let remove=document.createElement("span")
            remove.innerHTML="x"
            remove.classList.add("remove")
            remove.setAttribute("onclick",`removeItem('${JSON.stringify(item)}')`)
            card.appendChild(remove)
        
            let imgContainer = document.createElement("div")
            imgContainer.classList.add("image-container")
        
            let image = document.createElement("img")
            image.setAttribute("src", item.image)
            imgContainer.appendChild(image)
            card.appendChild(imgContainer)
        
            let container = document.createElement("div")
            container.classList.add("container")
        
            let name = document.createElement("h5");
            name.classList.add("product-name");
            name.innerText = item.name.toUpperCase();
            container.appendChild(name);
        
            let price = document.createElement("h6");
            price.innerHTML = "<b>Price:</b> " + item.price +"<br>"
            container.appendChild(price);

            // thêm số lượng hàng đã thêm vào giỏ
            let quantityContainer=document.createElement("div")
            quantityContainer.classList.add("display-flex")
            let productQuantity=document.createElement("h6");
            let quantityAdjust=document.createElement("input")
            quantityAdjust.type="number"
            quantityAdjust.min="1"
            quantityAdjust.max="10"
            quantityAdjust.value=item.quantity      //chỉnh số lượng bằng với số lần người dùng thêm
            productQuantity.innerHTML="<b>Quantity: </b>&ensp;"
            quantityContainer.appendChild(productQuantity)
            quantityContainer.appendChild(quantityAdjust)
            container.appendChild(quantityContainer)

            let buyBtn=document.createElement("button")
            buyBtn.innerHTML=">Buy now<"
            container.appendChild(buyBtn)
          
            card.appendChild(container);
            document.getElementById("products").appendChild(card);
            totalPrice.innerHTML=total+"đ"

            // nếu thêm số lượng ở giỏ hàng thì lưu lại
            quantityAdjust.addEventListener("change",() => {
                item.quantity=quantityAdjust.value
                localStorage.setItem("cart",JSON.stringify(userCart))
            })
        }
    }
}
displayOnScreen()

// xoá item nếu bấm dấu x
function removeItem(item){
    product=JSON.parse(item)

    let  userCart = JSON.parse(localStorage.getItem("cart")) || []
    userCart.splice(product,1)
    localStorage.setItem("cart",JSON.stringify(userCart))

    location.reload()
}