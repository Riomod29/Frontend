function registerUser() {
    const username = document.getElementById("register-username").value.trim();
    const password = document.getElementById("register-password").value.trim();

    if (!username || !password) {
        alert("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const isExist = users.some(user => user.username === username);

    if (isExist) {
        alert("Tên đăng nhập đã tồn tại!");
    } else {
        users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Đăng ký thành công! Quay lại đăng nhập.");
        window.location.href = "login.html";
    }
}
