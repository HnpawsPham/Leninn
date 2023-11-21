const searchbar=document.getElementById("searchbar")

function visibleSearchbar(){
    searchbar.style.visibility="visible"
}

// bỏ dấu tiếng việt
function normalizeStr(str){
    return str  .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/đ/g, 'd').replace(/Đ/g, 'D')
                .toLowerCase()
}
// TÍNH NĂNG TÌM KIẾM
searchbar.addEventListener("keypress",function(){
    let titles=document.querySelectorAll("h5")
    let card=document.querySelectorAll(".card")
    let noResult=true

    if(searchbar.value!=""){
        for(let i in titles){
            console.log(titles[i])
            try{
                document.querySelector(".notfound").classList.add("hide")
                card[i].classList.add("hide")

                if(normalizeStr(titles[i].innerHTML).includes(normalizeStr(searchbar.value))){
                    card[i].classList.remove("hide")
                    noResult=false
                }
            }
            catch{}
        }
        if(noResult){
            document.querySelector(".notfound").classList.remove("hide")
        }
    }
})
