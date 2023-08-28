const firstName=document.getElementById("firstName");
const lastName=document.getElementById("lastName");
const age=document.getElementById("age");
const phoneNumber=document.getElementById("phoneNumber");
const email=document.getElementById("email");
const address=document.getElementById("address");
const institute=document.getElementById("institute");
const batch=document.getElementById("batch");
const gender = document.getElementsByName('gender');
const userName=document.getElementById('userName');
const password=document.getElementById('password');

const btnReg=document.getElementById("btn-Reg");

btnReg.addEventListener("click",()=>{
    let gen;
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked)
            
                 gen=gender[i].value;
    } 
    let student={
        "firstName" : firstName.value,
        "lastName" : lastName.value,
        "age" : age.value,
        "phoneNumber" : phoneNumber.value,
        "email" : email.value,
        "address" : address.value,
        "institute" : institute.value,
        "batch" : batch.value,
        "gender" :gen,
        "userName" : userName.value,
        "password" : password.value
    }
    console.log(student);  

    fetch("http://localhost:8080/student",{
        method : "POST",
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(student)
    })
    .then(res => res.json())
    .then(data =>{
        
    })

});