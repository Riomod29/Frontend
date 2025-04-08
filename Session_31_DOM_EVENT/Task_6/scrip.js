// Tài khoản cố định
const validUsername = "huanrose@gmail.com";
const validPassword = "123456";

// Lấy các phần tử từ DOM
const loginButton = document.getElementById("loginButton"); //loginButton đang lưu gì: document.getElementById("loginButton")
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

// Xử lý sự kiện khi nhấn nút "login"
loginButton.addEventListener("click", () => {
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    if (enteredUsername === validUsername && enteredPassword === validPassword) {
        console.log("Đăng nhập thành công!");
    } else {
        console.log("Đăng nhập thất bại!");
    }
});