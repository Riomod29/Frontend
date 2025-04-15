// Hàm kiểm tra sự hợp lệ của thông tin người dùng
function validateUserInput(email, password, confirmPassword) {
    let isValid = true; // Biến kiểm tra tính hợp lệ

    // Xóa thông báo lỗi cũ
    document.getElementById("errorEmail").textContent = "";
    document.getElementById("errorPassword").textContent = "";
    document.getElementById("cfPassword").textContent = "";

    // Kiểm tra email
    if (!email) {
        document.getElementById("errorEmail").textContent = "Email không được bỏ trống!";
        isValid = false;
    }

    // Kiểm tra mật khẩu
    if (!password) {
        document.getElementById("errorPassword").textContent = "Mật khẩu không được bỏ trống!";
        isValid = false;
    }

    // Kiểm tra xác nhận mật khẩu
    if (password !== confirmPassword) {
        document.getElementById("cfPassword").textContent = "Xác nhận mật khẩu không trùng khớp!";
        isValid = false;
    }

    return isValid;
}

// Hàm kiểm tra sự tồn tại của email trong localStorage
function isEmailRegistered(email) {
    const users = JSON.parse(localStorage.getItem("users")) || []; // Lấy danh sách người dùng từ localStorage
    return users.some(user => user.email === email); // Kiểm tra email đã tồn tại hay chưa
}

// Hàm lưu tài khoản vào localStorage
function registerUser(email, password) {
    const users = JSON.parse(localStorage.getItem("users")) || []; // Lấy danh sách người dùng từ localStorage
    users.push({ email, password }); // Thêm người dùng mới vào danh sách
    localStorage.setItem("users", JSON.stringify(users)); // Lưu danh sách người dùng vào localStorage
    alert("Đăng ký tài khoản thành công!"); // Thông báo thành công
}

// Hàm xử lý khi người dùng nhấn nút đăng ký
function checkData() {
    const email = document.getElementById("email").value.trim(); // Lấy giá trị email
    const password = document.getElementById("password").value.trim(); // Lấy giá trị mật khẩu
    const confirmPassword = document.getElementById("confirm-password").value.trim(); // Lấy giá trị xác nhận mật khẩu

    // Kiểm tra thông tin hợp lệ
    if (!validateUserInput(email, password, confirmPassword)) {
        return;
    }

    // Kiểm tra email đã tồn tại
    if (isEmailRegistered(email)) {
        document.getElementById("errorEmail").textContent = "Email đã được đăng ký!";
        return;
    }

    // Lưu tài khoản nếu hợp lệ
    registerUser(email, password);
}