window.onload = function () {
    const username = localStorage.getItem("loggedInUser") || sessionStorage.getItem("loggedInUser");

    if (!username) {
        window.location.href = "login.html";
        return;
    }

    document.getElementById("welcome").innerText = `Xin chào, ${username}! 👋`;
}

function logout() {
    localStorage.removeItem("loggedInUser");
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}
