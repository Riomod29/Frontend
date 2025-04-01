// Đối tượng mẫu đại diện cho một sinh viên
let student = {
    // id: 1,
    // name: "Nguyễn Công Trứ",
    // position: "Testter",
    // salary: 8000000
}

// Danh sách sinh viên mẫu
let studentList = [
    student,
    // {
    //     id: 2,
    //     name: "Lee Nun",
    //     position: "Testter",
    //     salary: 5000000
    // },
    // {
    //     id: 3,
    //     name: "Rio",
    //     position: "Testter",
    //     salary: 10000000
    // }
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
                <td>${studentList[i].position}</td>
                <td>${studentList[i].salary}</td>
                <td>
                    <button onclick="deleteStudent(${studentList[i].id})" class="btn btn-danger">delete</button>
                    <button onclick="editStudent(${i})" class="btn btn-success">edit</button>
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
        position: +prompt("Nhập tuổi sinh viên"),
        salary: prompt("Nhập giới tính sinh viên", "OTHER"),
    }

    studentList.push(newStudent); // Thêm sinh viên mới vào danh sách
    renderDataToView(); // Cập nhật giao diện
}

// Hàm xóa sinh viên khỏi danh sách
function deleteStudent(studentId) {
    // Tìm chỉ số của nhân viên có id tương ứng
    const studentIndex = studentList.findIndex(student => student.id == studentId);

    if (studentIndex !== -1) {
        // Nếu tìm thấy, yêu cầu xác nhận từ người dùng
        const confirmDelete = confirm(`Bạn có chắc chắn muốn xóa nhân viên: ${studentList[studentIndex].name}?`);
        if (confirmDelete) {
            studentList.splice(studentIndex, 1); // Xóa nhân viên khỏi danh sách
            alert("Nhân viên đã được xóa thành công!");
        }
    } else {
        // Nếu không tìm thấy, hiển thị thông báo
        alert("Không tìm thấy nhân viên với ID đã nhập!");
    }

    renderDataToView(); // Cập nhật giao diện
}

// Hàm chỉnh sửa thông tin sinh viên
function editStudent(index) {
    let student = studentList[index];
    let studentUpdate = {
        id: student.id, // Giữ nguyên mã sinh viên
        name: prompt("Nhập tên sinh viên", student.name),
        position: +prompt("Nhập tuổi sinh viên", student.age),
        salary: prompt("Nhập giới tính sinh viên", student.gender),
    }
    studentList[index] = studentUpdate; // Cập nhật thông tin sinh viên
    renderDataToView(); // Cập nhật giao diện
}

// Hàm tìm kiếm sinh viên theo tên
function searchStudentByName() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase(); // Lấy giá trị nhập vào và chuyển thành chữ thường
    const filteredStudents = studentList.filter(student => 
        student.name.toLowerCase().includes(searchValue) // Lọc danh sách nhân viên có tên chứa chuỗi tìm kiếm
    );

    // Hiển thị danh sách nhân viên đã lọc
    let templateHtml = ``;
    for (let i = 0; i < filteredStudents.length; i++) {
        templateHtml += `
            <tr>
                <th scope="row">${i + 1}</th>
                <td>${filteredStudents[i].id}</td>
                <td>${filteredStudents[i].name}</td>
                <td>${filteredStudents[i].position}</td>
                <td>${filteredStudents[i].salary}</td>
                <td>
                    <button onclick="deleteStudent(${filteredStudents[i].id})" class="btn btn-danger">delete</button>
                    <button onclick="editStudent(${i})" class="btn btn-success">edit</button>
                </td>
            </tr>
        `;
    }
    tableDataEl.innerHTML = templateHtml;
}
