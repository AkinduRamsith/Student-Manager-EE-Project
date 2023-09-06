let studentTable = document.getElementById("table-student");
let pro = document.getElementById("pro");
const btnId = document.querySelectorAll(".btnsId");
const btnedit = document.getElementById("edit1");
const btnUpdate = document.getElementById("update1");
const btnDelete = document.getElementById("delete1");


// -----------------------------------------------------------------------
const firstNameInput = document.getElementById("firstName1");
const lastNameInput = document.getElementById("lastName");
const nicInput = document.getElementById("nic");
const age1Input = document.getElementById("age1");
const phoneNumber1Input = document.getElementById("phoneNumber1");
const emailInput = document.getElementById("email");
const streetAddressInput = document.getElementById("streetAddress");
const districtInput = document.getElementById("district");
const provinceInput = document.getElementById("province");
const schlNameInput = document.getElementById("schlName");
const schoolYearInput = document.getElementById("schoolYear");
const motherNameInput = document.getElementById("motherName");
const motherPhoneNumberInput = document.getElementById("motherPhoneNumber");
const fatherNameInput = document.getElementById("fatherName");
const fatherPhoneNumberInput = document.getElementById("fatherPhoneNumber");
const maleRadio = document.getElementById("male");
const femaleRadio = document.getElementById("female");
const fullTimeRadio = document.getElementById("fullTime");
const partTimeRadio = document.getElementById("partTime");

const type = document.getElementsByName("ct");

const gender = document.getElementsByName('gen');
// -----------------------------------------------------------------------



// let btnedit=document.getElementById("edit1");
// const firstName1=document.getElementById("firstName");
function getStudent() {
    fetch("http://localhost:8080/student")
        .then(response => response.json())
        .then(res => {
            let tblBody = ` <tr>
        <th>Stuent ID</th>
        <th>Student Name</th>
        <th>Address</th>
        <th>Age</th>
        <th>Course Type</th>
        <th>Course</th>
    </tr>`

            res.forEach(element => {
                console.log(element.nic);
                tblBody += `
            <tr>
            <td> <button class="btnsId">${element.id}</button></td>
            <td>${element.firstName}${" "}${element.lastName}</td>
            <td>${element.streetAddress}${","}${element.district}</td>
            <td>${element.age}</td>
            <td>${element.courseType}</td>
            <td>${element.course}</td>
        </tr>`;
            });
            studentTable.innerHTML = tblBody;

        })

}
let buttonValue;
let sId;
document.addEventListener("DOMContentLoaded", function () {


    studentTable.addEventListener('click', function (e) {

        if (e.target.tagName === 'BUTTON') {
            buttonValue = e.target.textContent;
            fetch(`http://localhost:8080/student/${buttonValue}`)
                .then(response => response.json())
                .then(res => {
                    let tblBody = "";

                    console.log(res.firstName);
                    tblBody += `
            <div class="profile profile-edit">

            <div class="image">
                <div class="img img-edit">
    
                </div>
                <hr>
                <div class="para-name">
                    <p>
                       ${res.firstName} ${res.lastName}
                    </p>
                </div>
            </div>
    
            <div class="stu-detail">
                <div class="div-d div-fn">
                    <label for="" class="lbl-stu lbl-stu-firstName">First Name</label>
                    <input type="text" name="" id="firstName1" readonly class="txt-stu txt-stu-firstName">
                </div>
                <div class="div-d div-ln">
                    <label for="" class="lbl-stu lbl-stu-lasttName">Last Name</label>
                    <input type="text" name="" id="lastName" readonly class="txt-stu txt-stu-lastName">
                </div>
                <div class="div-d div-nic">
                    <label for="" class="lbl-stu lbl-stu-nic">NIC</label>
                    <input type="text" name="" id="nic" readonly class="txt-stu txt-stu-nic">
                </div>
                <div class="div-d div-genlbl">
                    <label for="" class="lbl-stu lbl-stu-gender"><span>*</span>Gender</label>
                </div>
              
                <div class="div-d div-gender">
                    <div class="div-gender-edit div-genM">
                       <input type="radio" id="male" disabled class="" name="gen" value="Male">Male
                    </div>
                    <div class="div-gender-edit div-genF">
                        <input type="radio" name="gen" disabled id="female" class="" value="Female">Female
                    </div>
                </div>
    
                <div class="div-d div-age">
                    <label for="" class="lbl-stu lbl-stu-age">Age</label>
                    <input type="text" name="" id="age1" readonly class="txt-stu txt-stu-age">
                </div>
    
                <div class="div-d div-conlbl">
                    <label for="" class="lbl-stu lbl-stu-conD"><span>*</span>Student Contact Details</label>
                </div>
    
                <div class="div-d div-ph">
                    <label for="" class="lbl-stu lbl-stu-phoneNumber">Phone Number</label>
                    <input type="text" name="" id="phoneNumber1" readonly class="txt-stu txt-stu-phoneNumber">
                </div>
                <div class="div-d div-email">
                    <label for="" class="lbl-stu lbl-stu-email">Email</label>
                    <input type="text" name="" id="email" readonly class="txt-stu txt-stu-email">
                </div>
    
    
                <div class="div-d div-address">
                    <label for="" class="lbl-stu lbl-stu-address"><span>*</span>Student Address</label>
                </div>
                <div class="div-d div-st">
                    <label for="" class="lbl-stu lbl-stu-st">Street Address</label>
                    <input type="text" name="" id="streetAddress" readonly class="txt-stu txt-stu-st">
                </div>
                <div class="div-d div-di">
                    <label for="" class="lbl-stu lbl-stu-di">District</label>
                    <input type="text" name="" id="district" readonly class="txt-stu txt-stu-di">
                </div>
                <div class="div-d div-p">
                    <label for="" class="lbl-stu lbl-stu-p">Province</label>
                    <input type="text" name="" id="province" readonly class="txt-stu txt-stu-p">
                </div>
    
                <div class="div-d div-schllbl">
                    <label for="" class="lbl-stu lbl-stu-schl"><span>*</span>Student School Details</label>
                </div>
                <div class="div-d div-schlName">
                    <label for="" class="lbl-stu lbl-stu-schlName">School Name</label>
                    <input type="text" name="" id="schlName" readonly class="txt-stu txt-stu-schlName">
                </div>
                <div class="div-d div-schlYear">
                <label for="" class="lbl-stu lbl-stu-Year">Year</label>
                <input type="text" name="" id="schoolYear" readonly class="txt-stu txt-stu-Year">
            </div>

            <div class="div-d div-parentlbl">
                <label for="" class="lbl-stu lbl-stu-parentlbl"><span>*</span>Parent Details</label>
            </div>

            <div class="div-d div-mn">
                <label for="" class="lbl-stu lbl-stu-motherName">Mother's Name</label>
                <input type="text" name="" id="motherName" readonly class="txt-stu txt-stu-motherName">
            </div>
            <div class="div-d div-mph">
                <label for="" class="lbl-stu lbl-stu-motherphoneNumber">Mother's Phone Number</label>
                <input type="text" name="" id="motherPhoneNumber" readonly class="txt-stu txt-stu-motherphoneNumber">
            </div>

            <div class="div-d div-fan">
                <label for="" class="lbl-stu lbl-stu-fatherName">Father's Name</label>
                <input type="text" name="" id="fatherName" readonly class="txt-stu txt-stu-fatherName">
            </div>
            <div class="div-d div-fph">
                <label for="" class="lbl-stu lbl-stu-fatherphoneNumber">Father's Phone Number</label>
                <input type="text" name="" id="fatherPhoneNumber" readonly class="txt-stu txt-stu-fatherphoneNumber">
            </div>

        </div>

        <div class="stu-detail2">
            <div class="div-d div-course">
                <label for="" class="lbl-stu2 lbl-stu-course"><span>*</span>Course</label>
            </div>

            <div class="div-d div-courseR">
                <div class="div-courseR-edit div-full">
                    <input type="radio" disabled id="fullTime" class="" name="ct" value="Full Time">Full Time   
                </div>
                <div class="div-courseR-edit div-part">
                    <input type="radio" disabled name="ct" id="partTime" class="" value="Part Time">Part Time
                </div>
            </div>
            <select name="" id="combo-sele" class="combo">
<option value="ICD">ICD</option>
<option value="ICM">ICM</option>
<option value="ICP">ICP</option>
</select> 
        </div>
    
    
            
        </div>
     
            `;
                    const comboSele = document.getElementById("combo-sele");


                    btnedit.style.visibility = "visible"
                    btnUpdate.style.visibility = "visible"
                    btnDelete.style.visibility = "visible"
                    studentTable.innerHTML = tblBody;
                    console.log(res.nic);
                    firstName1.value = res.firstName
                    lastName.value = res.lastName
                    nic.value = res.nic;
                    age1.value = res.age;
                    if (res.gender === "Male") {
                        male.checked = true;
                    } else if (res.gender === "Female") {
                        female.checked = true;
                    }
                    // for (let i = 0; i < comboSele.options.length(); i++) {
                    //     if (combo-sele.options[i].value === res.course) {
                    //         comboSele.selectedIndex = i;
                    //         break;
                    //     }
                    // }
                    phoneNumber1.value = res.phoneNumber;
                    email.value = res.email;
                    streetAddress.value = res.streetAddress;
                    district.value = res.district;
                    province.value = res.province;
                    schlName.value = res.schoolName;
                    schoolYear.value = res.schoolYear;
                    motherName.value = res.motherName;
                    motherPhoneNumber.value = res.motherPhoneNumber;
                    fatherName.value = res.fatherName;
                    fatherPhoneNumber.value = res.fatherPhoneNumber;
                    if (res.courseType === "Full Time") {
                        fullTime.checked = true;
                    } else if (res.courseType === "Part Time") {
                        partTime.checked = true;
                    }
                    sId = res.id;
                    console.log(sId);
                });
        }
    })
});

let isEditable = true;
// if(btnedit){
btnedit?.addEventListener('click', () => {
    const firstNameInput = document.getElementById("firstName1");
    const lastNameInput = document.getElementById("lastName");
    const nicInput = document.getElementById("nic");
    const age1Input = document.getElementById("age1");
    const phoneNumber1Input = document.getElementById("phoneNumber1");
    const emailInput = document.getElementById("email");
    const streetAddressInput = document.getElementById("streetAddress");
    const districtInput = document.getElementById("district");
    const provinceInput = document.getElementById("province");
    const schlNameInput = document.getElementById("schlName");
    const schoolYearInput = document.getElementById("schoolYear");
    const motherNameInput = document.getElementById("motherName");
    const motherPhoneNumberInput = document.getElementById("motherPhoneNumber");
    const fatherNameInput = document.getElementById("fatherName");
    const fatherPhoneNumberInput = document.getElementById("fatherPhoneNumber");
    const maleRadio = document.getElementById("male");
    const femaleRadio = document.getElementById("female");
    const fullTimeRadio = document.getElementById("fullTime");
    const partTimeRadio = document.getElementById("partTime");

    firstNameInput.removeAttribute("readonly");
    lastNameInput.removeAttribute("readonly");
    nicInput.removeAttribute("readonly");
    age1Input.removeAttribute("readonly");
    phoneNumber1Input.removeAttribute("readonly");
    emailInput.removeAttribute("readonly");
    streetAddressInput.removeAttribute("readonly");
    districtInput.removeAttribute("readonly");
    provinceInput.removeAttribute("readonly");
    schlNameInput.removeAttribute("readonly");
    schoolYearInput.removeAttribute("readonly");
    motherNameInput.removeAttribute("readonly");
    motherPhoneNumberInput.removeAttribute("readonly");
    fatherNameInput.removeAttribute("readonly");
    fatherPhoneNumberInput.removeAttribute("readonly");
    maleRadio.removeAttribute("disabled");
    femaleRadio.removeAttribute("disabled");
    fullTimeRadio.removeAttribute("disabled");
    partTimeRadio.removeAttribute("disabled");
});
// }



btnDelete.addEventListener('click', () => {
    var requestOption = {
        method: 'DELETE',
        redirect: 'follow'
    };
    console.log(buttonValue);
    fetch(`http://localhost:8080/student/${buttonValue}`, requestOption)
        .then(response => response.text())
        .then(result => {
            console.log(result)
            window.open("../student.html", "_top")
        })
        .catch(error => console.log('error', error))
})

btnUpdate.addEventListener('click', () => {
    const firstNameInput = document.getElementById("firstName1");
    const lastNameInput = document.getElementById("lastName");
    const nicInput = document.getElementById("nic");
    const age1Input = document.getElementById("age1");
    const phoneNumber1Input = document.getElementById("phoneNumber1");
    const emailInput = document.getElementById("email");
    const streetAddressInput = document.getElementById("streetAddress");
    const districtInput = document.getElementById("district");
    const provinceInput = document.getElementById("province");
    const schlNameInput = document.getElementById("schlName");
    const schoolYearInput = document.getElementById("schoolYear");
    const motherNameInput = document.getElementById("motherName");
    const motherPhoneNumberInput = document.getElementById("motherPhoneNumber");
    const fatherNameInput = document.getElementById("fatherName");
    const fatherPhoneNumberInput = document.getElementById("fatherPhoneNumber");
    const maleRadio = document.getElementById("male");
    const femaleRadio = document.getElementById("female");
    const fullTimeRadio = document.getElementById("fullTime");
    const partTimeRadio = document.getElementById("partTime");

    const type = document.getElementsByName("ct");

    const gender = document.getElementsByName('gen');

    let gen;
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked){  gen = gender[i].value;}

          
    }

    let typeC;

    for (let i = 0; i < type.length; i++) {
        if (type[i].checked){
            typeC = type[i].value;
        }

           
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "id": buttonValue,
        "firstName": firstNameInput.value,
        "lastName": lastNameInput.value,
        "nic": nicInput.value,
        "phoneNumber": phoneNumber1Input.value,
        "age": age1Input.value,
        "email": emailInput.value,
        "streetAddress": streetAddressInput.value,
        "province": provinceInput.value,
        "district": districtInput.value,
        "gender": gen,
        "courseType": typeC,
        "schoolName": schlNameInput.value,
        "schoolYear": schoolYearInput.value,
        "motherName": motherNameInput.value,
        "motherPhoneNumber": motherPhoneNumberInput.value,
        "fatherName": fatherNameInput.value,
        "fatherPhoneNumber": fatherPhoneNumberInput.value
    });

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:8080/student", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    // var requestOption = {
    //     method: 'PUT',
    //     redirect: 'follow'
    // };
    // let updateStudent = {
    //     "firstName": firstNameInput.value,
    //     "lastName": lastNameInput.value,
    //     "nic": nicInput.value,
    //     "phoneNumber": phoneNumber1Input.value,
    //     "age": age1Input.value,
    //     "email": emailInput.value,
    //     "streetAddress": streetAddressInput.value,
    //     "province": provinceInput.value,
    //     "district": districtInput.value,
    //     "gender": gen,
    //     "courseType": typeC,
    //     // "course" : ComboCou,
    //     "schoolName": schlNameInput.value,
    //     "schoolYear": schoolYearInput.value,
    //     // "stream" : comboStr,
    //     "motherName": motherNameInput.value,
    //     "motherPhoneNumber": motherPhoneNumberInput.value,
    //     "fatherName": fatherNameInput.value,
    //     "fatherPhoneNumber": fatherPhoneNumberInput.value
    // }
    // fetch("http://localhost:8080/student", {
    //     method: "PUT",

    //     body: JSON.stringify(updateStudent)
    // })
    //     .then(response => response.text())
    //     .then(result => {
    //         console.log(result)
    //         window.open("../student.html", "_top")
    //     })
    //     .catch(error => console.log('error', error))
})