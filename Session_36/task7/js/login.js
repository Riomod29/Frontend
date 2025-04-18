function loginUser() {
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value.trim();
    const remember = document.getElementById("remember").checked;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        if (remember) {
            localStorage.setItem("loggedInUser", username);
        } else {
            sessionStorage.setItem("loggedInUser", username);
        }
        window.location.href = "home.html";
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
}

window.onload = function () {
    const loggedUser = localStorage.getItem("loggedInUser") || sessionStorage.getItem("loggedInUser");
    if (loggedUser) {
        window.location.href = "home.html";
    }
}
