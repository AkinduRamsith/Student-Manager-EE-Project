const firstName=document.getElementById("firstName");
const lastName=document.getElementById("lastName");
const nic=document.getElementById("nic");
const age=document.getElementById("age");
const phoneNumber=document.getElementById("phoneNumber");
const email=document.getElementById("email");
const streetAddress=document.getElementById("street-address");
const province=document.getElementById("province");
const district=document.getElementById("district");
const comboCourse=document.querySelector("#combo-sel");
const stream=document.querySelector("#comboStream");
const schoolName=document.getElementById("txtSchoolName");
const schoolYear=document.getElementById("txtSchoolYear");
const motherName=document.getElementById("txt-Mother");
const motherPhoneNumber=document.getElementById("txt-MotherN");
const fatherName=document.getElementById("txt-Father");
const fatherPhoneNumber=document.getElementById("txt-FatherN");
const type=document.getElementsByName("type");

const gender = document.getElementsByName('gender');


const btnReg=document.getElementById("btn-RegSt");

btnReg.addEventListener("click",()=>{
    let gen;
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked)
            
                 gen=gender[i].value;
    } 

    let typeC;

    for (let i = 0; i < type.length; i++) {
        if (type[i].checked)
            
                 typeC=type[i].value;
    } 
    let ComboCou=comboCourse.value;
    let comboStr=stream.value;

    let student={
        "firstName" : firstName.value,
        "lastName" : lastName.value,
        "nic" : nic.value,
        "phoneNumber" : phoneNumber.value,
        "age" : age.value,
        "email" : email.value,
        "streetAddress" : streetAddress.value,
        "province" : province.value,
        "district" : district.value,
        "gender" :gen,
        "courseType" : typeC,
        "course" : ComboCou,
        "schoolName" : schoolName.value,
        "schoolYear" : schoolYear.value,
        "stream" : comboStr,
        "motherName" : motherName.value,
        "motherPhoneNumber" : motherPhoneNumber.value,
        "fatherName" : fatherName.value,
        "fatherPhoneNumber" : fatherPhoneNumber.value

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