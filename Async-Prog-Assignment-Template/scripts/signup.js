document.querySelector("form").addEventListener("submit",myfunction)
let Arr = JSON.parse(localStorage.getItem("Data")) || []
function myfunction(){
    event.preventDefault();

    let form = document.getElementById("form")

    let name = form.name.value 
    let contact = form.contact.value
    let email = form.email.value
    let pass = form.password.value
    if(name == null||contact == null||email == null|| pass == null){
        alert("Fill all data")
    }
    let AK = new data(name,contact,email,pass)
    Arr.push(AK)
    form.name.value = null;
    form.contact.value = null;
    form.email.value = null;
    form.password.value = null;

    localStorage.setItem("Data",JSON.stringify(Arr))
}

function data(a,b,c,d){
    this.name = a;
    this.contact = b;
    this.email = c;
    this.password =d;
}