let chosenItems = []
let products = {
    data: [
        {
            cost:790,
            id:1,
            name: "MATRIX 1999 DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/matrix-1999-1.jpg",
        },

        {
            cost:760,
            id:2,
            name: "RAEDA DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Raeda-Deck.jpg",
        },

        {
            cost:530,
            id:3,
            name: "MUSTY DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Musty-Deck.jpg",

        },

        {
            cost:590,
            id:4,
            name: "TRISTIQUE DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Tristique-deck.jpg",

        },

        {
            cost:860,
            id:5,
            name: "FIELD TRIP DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Fied-Trip-deck.jpg",

        },

        {
            cost:710,
            id:6,
            name: "TARO RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-5.jpg",

        },

        {
            cost:790,
            id:7,
            name: "NEON RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-1.jpg",

        },

        {
            cost:395,
            id:8,
            name: "ORANAGE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-2.jpg",

        },

        {
            cost:534,
            id:9,
            name: "BLUE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-3.jpg",

        },

        {
            cost:790,
            id:10,
            name: "WHITE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-4.jpg",

        },

        {
            cost:650,
            id:11,
            name: "CUTIS MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/cutis.jpg",

        },

        {
            cost:760,
            id:12,
            name: "CAM VU MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/cam-vu.jpg",

        },

        {
            cost:880,
            id:13,
            name: "SON NGUYEN MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/son-nguyen.jpg",

        },
    ]
}

for (let items of products.data) {

    let card = document.createElement("div")
    card.classList.add("card")

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")

    let image = document.createElement("img")
    image.setAttribute("src", items.image)
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    let container = document.createElement("div")
    container.classList.add("container")

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = items.name.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerHTML = "<b>Price:</b> " + items.price;
    container.appendChild(price);

    let btn = document.createElement("button")
    btn.setAttribute("onclick", `addToCart('${JSON.stringify(items)}')`)
    btn.innerHTML = "Thêm vào giỏ hàng"
    container.appendChild(btn)
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

function addToCart(product){
    let cartItems=JSON.parse(localStorage.getItem("cart")) || []
    let addItem=JSON.parse(product)
   
    let index=cartItems.findIndex((item) =>item.id === addItem.id)
    if(index === -1){
        addItem["quantity"]=1
        cartItems.push(addItem)
    }
    else{
        cartItems[index].quantity+=1
    }
    console.log(cartItems)
    localStorage.setItem("cart",JSON.stringify(cartItems))
}

