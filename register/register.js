
const form=document.getElementById("form")

form.addEventListener("submit",function(e){
    e.preventDefault()

    let account = JSON.parse(localStorage.getItem("account")) || []

    let index = account.findIndex((info) => info.email === document.getElementById("email").value)
    if(index === -1){

        let userInfo = [{
            email:document.getElementById("email").value,
            pass:document.getElementById("password").value,
        }]

        alert("Tạo tài khoản thành công")
        console.log(userInfo)
        localStorage.setItem("account",JSON.stringify(userInfo))
        window.location.href="../login/login.html"
    }
    else{
        alert("Tài khoản đã tồn tại!")
        window.location.href="../login/login.html"
    }
})
