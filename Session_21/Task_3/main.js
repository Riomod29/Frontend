let email = prompt("Enter your email");
let password = prompt("Enter your password");

while (email !== "admin@gmail.com" || password !== "14785") {
    alert("Tài khoảng và mật khẩu sai, vui lòng nhập lại");
}
alert("Đăng nhập thành công");  