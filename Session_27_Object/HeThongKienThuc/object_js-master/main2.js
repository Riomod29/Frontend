
/*
 - Làm 1 ứng dụng đơn giản về quản sinh viên của 1 lớp
 - Biết sinh viên gồm có các thông tin sau:
 + Họ và tên,
 + Tuổi,
 + Mã sinh viên,
 + Giới tính,.,
 + Sinh Nhật,
 + Địa chỉ,
 + Phone number 
 - Hiển thị, thêm, xoá, sửa
 - Tìm kiếm, phân trang
*/

let student = {
    id: 1,
    name: "Nguyen Van A",
    age: 20,
    gender: "Male", // "MALE -> Nam", "FEMALE -> Nu", "OTHER -> Khac"
    birthday: "1999-01-01",
    address: "97 Man Thiện, Q9, HCM",
    phone: "0123456789",
    status: true, // " true ACTIVE -> Hoat dong", " false INACTIVE -> Khong hoat dong"
}

let studentList = [
    student,
    {
        id: 2,
        name: "Nguyen Van B",
        age: 20,
        gender: "Male", // "MALE -> Nam", "FEMALE -> Nu", "OTHER -> Khac"
        birthday: "1999-01-01",
        address: "97 Man Thiện, Q9, HCM",
        phone: "0123456789",
        status: true
    },
    {
        id: 3,
        name: "Nguyen Van C",
        age: 20,
        gender: "Male", // "MALE -> Nam", "FEMALE -> Nu", "OTHER -> Khac"
        birthday: "1999-01-01",
        address: "97 Man Thiện, Q9, HCM",
        phone: "0123456789",
        status: false
    }
]

let tableDataEl = document.getElementById("table_data");

function renderDataToView() {
    let templateHtml = ``;
    for (let i = 0; i < studentList.length; i++) {
        templateHtml += `
            <tr>
                <th scope="row">${i + 1}</th>
                <td>${studentList[i].id}</td>
                <td>${studentList[i].name}</td>
                <td>${studentList[i].age}</td>
                <td>${studentList[i].gender}</td>
                <td>${studentList[i].birthday}</td>
                <td>${studentList[i].address}</td>
                <td>${studentList[i].phone}</td>
                <td>${studentList[i].status ? "active" : "inactive"}</td>
                <td>
                    <button onclick="deleteStudent(${studentList[i].id})" class="btn btn-danger">delete</button>
                    <button onclick="editStudent(${i})" class="btn btn-success">edit</button>
                    <button onclick="editStatus(${i})" class="btn btn-success">change status</button>
                </td>
            </tr>
        `
    }
    tableDataEl.innerHTML = templateHtml;
}




function addStudent() {
    let newStudent = {
        id: Date.now(),
        name: prompt("Nhap ten sinh vien"),
        age: +prompt("Nhap tuoi sinh vien"),
        gender: prompt("Nhap gioi tinh sinh vien", "OTHER"),
        birthday: prompt("Nhap ngay sinh sinh vien"),
        address: prompt("Nhap dia chi sinh vien"),
        phone: prompt("Nhap so dien thoai sinh vien"),
        status: prompt("Nhap trang thai sinh vien", "true") == "true" ? true : false,
    }

    studentList.push(newStudent);
    renderDataToView()
}


function deleteStudent(studentId) {
    // studentList = studentList.filter((student) => {
    //     return student.id != studentId;
    // })
    for(let i = 0; i < studentList.length; i++) {
        if(studentList[i].id == studentId) {
            studentList.splice(i, 1);
            break;
        }
    }
    renderDataToView()
}


function editStudent(index) {
    let student = studentList[index]
    let studentUpdate = {
        id: student.id,
        name: prompt("Nhap ten sinh vien", student.name),
        age: +prompt("Nhap tuoi sinh vien", student.age),
        gender: prompt("Nhap gioi tinh sinh vien", student.gender),
        birthday: prompt("Nhap ngay sinh sinh vien", student.birthday),
        address: prompt("Nhap dia chi sinh vien", student.address),
        phone: prompt("Nhap so dien thoai sinh vien", student.phone),
        status: prompt("Nhap trang thai sinh vien", student.status) == "true"? true : false,
    }
    studentList[index] = studentUpdate;
    renderDataToView()
}

function editStatus(index) {
    let student = studentList[index]
    let studentUpdate = {
        ...student,
        status: !student.status
    }

    studentList[index] = studentUpdate;
    renderDataToView()
}


renderDataToView()