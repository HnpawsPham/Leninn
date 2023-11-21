
const form=document.getElementById("form")

form.addEventListener("submit",function(e){
    e.preventDefault()
    console.log(JSON.parse(localStorage.getItem("account")))

    if(JSON.parse(localStorage.getItem("account")) && JSON.parse(localStorage.getItem("account"))[0].email != ""){
        let account = JSON.parse(localStorage.getItem("account"))
        // check xem tài khoản đã tồn tại chưa
        let emailExist = account.findIndex((info) => info.email === document.getElementById("email").value)
        let passCorrect = account.findIndex((info) => info.pass === document.getElementById("password").value)

        // check xem thông tin có đúng k
        if(emailExist === 0 && passCorrect === 0){
            alert("Đăng nhập thành công!")
            window.location.href="../index.html"
        }
        else if((emailExist === 0 && passCorrect !== 0) ||(emailExist !== 0 && passCorrect === 0)){
            alert("Thông tin sai!")
            location.reload()
        }
        else{
            alert("Tài khoản không tồn tại!")
            window.location.href="../register/register.html"
        }
    }
    else{
        alert("Tài khoản không tồn tại!")
        window.location.href="../register/register.html"
    }
})
