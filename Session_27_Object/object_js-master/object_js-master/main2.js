/*
 - Làm 1 ứng dụng đơn giản về quản lý sinh viên của 1 lớp
 - Biết sinh viên gồm có các thông tin sau:
 + Họ và tên,
 + Tuổi,
 + Mã sinh viên,
 + Giới tính,
 + Sinh nhật,
 + Địa chỉ,
 + Số điện thoại
 - Các chức năng: Hiển thị, thêm, xóa, sửa, tìm kiếm, phân trang
*/

// Đối tượng mẫu đại diện cho một sinh viên
let student = {
    id: 1, // Mã sinh viên
    name: "Nguyen Van A", // Họ và tên
    age: 20, // Tuổi
    gender: "Male", // Giới tính ("Male -> Nam", "Female -> Nữ", "Other -> Khác")
    birthday: "1999-01-01", // Ngày sinh
    address: "97 Man Thiện, Q9, HCM", // Địa chỉ
    phone: "0123456789", // Số điện thoại
    status: true, // Trạng thái ("true -> Hoạt động", "false -> Không hoạt động")
}

// Danh sách sinh viên mẫu
let studentList = [
    student,
    {
        id: 2,
        name: "Nguyen Van B",
        age: 20,
        gender: "Male",
        birthday: "1999-01-01",
        address: "97 Man Thiện, Q9, HCM",
        phone: "0123456789",
        status: true
    },
    {
        id: 3,
        name: "Nguyen Van C",
        age: 20,
        gender: "Male",
        birthday: "1999-01-01",
        address: "97 Man Thiện, Q9, HCM",
        phone: "0123456789",
        status: false
    }
]

// Lấy phần tử HTML để hiển thị danh sách sinh viên
let tableDataEl = document.getElementById("table_data");

// Hàm hiển thị danh sách sinh viên lên giao diện
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

// Hàm thêm sinh viên mới vào danh sách
function addStudent() {
    let newStudent = {
        id: Date.now(), // Tạo mã sinh viên tự động dựa trên thời gian hiện tại
        name: prompt("Nhập tên sinh viên"),
        age: +prompt("Nhập tuổi sinh viên"),
        gender: prompt("Nhập giới tính sinh viên", "OTHER"),
        birthday: prompt("Nhập ngày sinh sinh viên"),
        address: prompt("Nhập địa chỉ sinh viên"),
        phone: prompt("Nhập số điện thoại sinh viên"),
        status: prompt("Nhập trạng thái sinh viên", "true") == "true" ? true : false,
    }

    studentList.push(newStudent); // Thêm sinh viên mới vào danh sách
    renderDataToView(); // Cập nhật giao diện
}

// Hàm xóa sinh viên khỏi danh sách
function deleteStudent(studentId) {
    for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].id == studentId) {
            studentList.splice(i, 1); // Xóa sinh viên tại vị trí tìm thấy
            break;
        }
    }
    renderDataToView(); // Cập nhật giao diện
}

// Hàm chỉnh sửa thông tin sinh viên
function editStudent(index) {
    let student = studentList[index];
    let studentUpdate = {
        id: student.id, // Giữ nguyên mã sinh viên
        name: prompt("Nhập tên sinh viên", student.name),
        age: +prompt("Nhập tuổi sinh viên", student.age),
        gender: prompt("Nhập giới tính sinh viên", student.gender),
        birthday: prompt("Nhập ngày sinh sinh viên", student.birthday),
        address: prompt("Nhập địa chỉ sinh viên", student.address),
        phone: prompt("Nhập số điện thoại sinh viên", student.phone),
        status: prompt("Nhập trạng thái sinh viên", student.status) == "true" ? true : false,
    }
    studentList[index] = studentUpdate; // Cập nhật thông tin sinh viên
    renderDataToView(); // Cập nhật giao diện
}

// Hàm thay đổi trạng thái hoạt động của sinh viên
function editStatus(index) {
    let student = studentList[index];
    let studentUpdate = {
        ...student, // Sao chép toàn bộ thông tin sinh viên
        status: !student.status // Đảo ngược trạng thái hiện tại
    }

    studentList[index] = studentUpdate; // Cập nhật trạng thái sinh viên
    renderDataToView(); // Cập nhật giao diện
}

// Hiển thị danh sách sinh viên khi tải trang
renderDataToView();