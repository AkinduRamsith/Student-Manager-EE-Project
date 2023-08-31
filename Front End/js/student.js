let studentTable=document.getElementById("table-student");

function getStudent(){
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
            tblBody += `
            <tr>
            <td> <button>${element.id}</button></td>
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