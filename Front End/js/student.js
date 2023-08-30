let studentTable=document.getElementById("table-student");

function getStudent(){
    fetch("http://localhost:8080/student")
    .then(response => response.json())
    .then(res => {
        let tblBody = ` <tr>
        <td>Stuent ID</td>
        <td>First Name</td>
        <td>Last Name</td>
        <td>Address</td>
        <td>Institute</td>
        <td>Batch</td>
        <td>Email</td>
    </tr>`  

        res.forEach(element => {
            tblBody += `
            <tr>
            <td> <button>${element.id}</button></td>
            <td>${element.firstName}</td>
            <td>${element.lastName}</td>
            <td>${element.address}</td>
            <td>${element.institute}</td>
            <td>${element.batch}</td>
            <td>${element.email}</td>
        </tr>`;
        });
        studentTable.innerHTML = tblBody;
    })
}