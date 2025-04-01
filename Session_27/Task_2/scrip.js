// Khởi tạo danh sách sinh viên (mảng rỗng ban đầu)
let studentList = [];

// Hàm hiển thị menu quản lý sinh viên
function studentManagementMenu() {
    let choice; // Biến lưu lựa chọn của người dùng
    do {
        // Hiển thị menu
        console.log("Chọn một chức năng:");
        console.log("1. Nhập danh sách sinh viên.");
        console.log("2. Hiển thị danh sách sinh viên.");
        console.log("3. Tìm sinh viên theo tên.");
        console.log("4. Xóa sinh viên khỏi danh sách.");
        console.log("5. Thoát.");
        
        // Yêu cầu người dùng nhập lựa chọn
        choice = parseInt(prompt("Nhập lựa chọn của bạn (1-5):"));

        // Kiểm tra lựa chọn và thực hiện chức năng tương ứng
        switch (choice) {
            case 1:
                // Gọi hàm nhập danh sách sinh viên
                inputStudentList();
                break;
            case 2:
                // Gọi hàm hiển thị danh sách sinh viên
                displayStudentList();
                break;
            case 3:
                // Gọi hàm tìm sinh viên theo tên
                findStudentByName();
                break;
            case 4:
                // Gọi hàm xóa sinh viên khỏi danh sách
                deleteStudentByName();
                break;
            case 5:
                // Thoát chương trình
                console.log("Thoát chương trình.");
                break;
            default:
                // Thông báo nếu nhập sai lựa chọn
                console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        }
    } while (choice !== 5); // Lặp lại cho đến khi người dùng chọn thoát
}

// Hàm nhập danh sách sinh viên
function inputStudentList() {
    let numberOfStudents = parseInt(prompt("Nhập số lượng sinh viên:")); // Nhập số lượng sinh viên
    for (let i = 0; i < numberOfStudents; i++) {
        let studentName = prompt(`Nhập tên đầy đủ của sinh viên thứ ${i + 1}:`); // Nhập tên từng sinh viên
        studentList.push(studentName); // Thêm tên sinh viên vào danh sách
    }
    console.log("Danh sách sinh viên đã được nhập thành công."); // Thông báo hoàn thành
}

// Hàm hiển thị danh sách sinh viên
function displayStudentList() {
    if (studentList.length === 0) {
        console.log("Danh sách sinh viên trống."); // Thông báo nếu danh sách trống
    } else {
        console.log("Danh sách sinh viên:");
        studentList.forEach((student, index) => {
            console.log(`${index + 1}. ${student}`); // Hiển thị từng sinh viên
        });
    }
}

// Hàm tìm sinh viên theo tên
function findStudentByName() {
    let nameToFind = prompt("Nhập tên đầy đủ của sinh viên cần tìm:"); // Nhập tên cần tìm
    let found = studentList.find(student => student === nameToFind); // Tìm sinh viên trong danh sách
    if (found) {
        console.log(`Đã tìm thấy sinh viên: ${found}`); // Hiển thị nếu tìm thấy
    } else {
        console.log("Sinh viên không có trong danh sách."); // Thông báo nếu không tìm thấy
    }
}

// Hàm xóa sinh viên khỏi danh sách
function deleteStudentByName() {
    let nameToDelete = prompt("Nhập tên đầy đủ của sinh viên cần xóa:"); // Nhập tên cần xóa
    let index = studentList.indexOf(nameToDelete); // Tìm vị trí của sinh viên trong danh sách
    if (index !== -1) {
        studentList.splice(index, 1); // Xóa sinh viên khỏi danh sách
        console.log(`Đã xóa sinh viên: ${nameToDelete}`); // Thông báo đã xóa
    } else {
        console.log("Sinh viên không có trong danh sách."); // Thông báo nếu không tìm thấy
    }
}

// Gọi hàm để chạy chương trình
studentManagementMenu();