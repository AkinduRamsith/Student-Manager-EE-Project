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
const image=document.getElementById("img");

const gender = document.getElementsByName('gender');


const btnReg=document.getElementById("btn-RegSt");
const folderPath="D://ICM103//Web-FrankSIr//Student Manager//Front End//images//"

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
    let imagePath=image.value;
    

    // let student={
    //     "firstName" : firstName.value,
    //     "lastName" : lastName.value,
    //     "nic" : nic.value,
    //     "phoneNumber" : phoneNumber.value,
    //     "age" : age.value,
    //     "email" : email.value,
    //     "streetAddress" : streetAddress.value,
    //     "province" : province.value,
    //     "district" : district.value,
    //     "gender" :gen,
    //     "courseType" : typeC,
    //     "course" : ComboCou,
    //     "schoolName" : schoolName.value,
    //     "schoolYear" : schoolYear.value,
    //     "stream" : comboStr,
    //     "motherName" : motherName.value,
    //     "motherPhoneNumber" : motherPhoneNumber.value,
    //     "fatherName" : fatherName.value,
    //     "fatherPhoneNumber" : fatherPhoneNumber.value

    // }
    // console.log(student);  

    const formData = new FormData();

formData.append('firstName', firstName.value);
formData.append('lastName', lastName.value);
formData.append('nic', nic.value);
formData.append('phoneNumber', phoneNumber.value);
formData.append('age', age.value);
formData.append('email', email.value);
formData.append('streetAddress', streetAddress.value);
formData.append('province', province.value);
formData.append('district', district.value);
formData.append('gender', gen);
formData.append('courseType', typeC);
formData.append('course', ComboCou);
formData.append('schoolName', schoolName.value);
formData.append('schoolYear', schoolYear.value);
formData.append('stream', comboStr);
formData.append('motherName', motherName.value);
formData.append('motherPhoneNumber', motherPhoneNumber.value);
formData.append('fatherName', fatherName.value);
formData.append('fatherPhoneNumber', fatherPhoneNumber.value);
formData.append('file', image.files[0]); 

    fetch("http://localhost:8080/student",{
        // method : "POST",
        // headers : {
        //     'Content-Type' : 'application/json',
        //     "mimeType": "multipart/form-data"
        // },
        // body : JSON.stringify(student),imagePath
        method: "POST",
        body: formData,
    })
    .then(res => res.json())
    .then(data =>{
        
    })

});