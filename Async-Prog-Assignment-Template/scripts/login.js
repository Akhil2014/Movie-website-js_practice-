document.querySelector("form").addEventListener("submit",myfunction)

let Arrcheck = JSON.parse(localStorage.getItem("Data"))
function myfunction(){
    event.preventDefault();
    let form = document.getElementById("Myform")

    let email = form.email.value 
    let password = form.password.value
    let flag = false;
    for(let i = 0; i<Arrcheck.length; i++){
        if(
            Arrcheck[i].email == email &&
            Arrcheck[i].password == password 
        ){
        window.location.href = "index.html"
        flag = true;
        break;
        }
        
    }
    if(flag==false)
    {
        alert("invalid Credentials")
    }
}

