// const users = localStorage.getItem("users") //String

// const inputValue = document.getElementById("email").value.trim()

// [{ "email": "it.coder.nct@gmail.com", "password": "123456" },
//     { "email": "new.email@example.com", "password": "newpassword" }
// ]
// if (users.some((users) => users.email === inputValue)) {
//     alert("Email đã tồn tại")
// }

const inputValue = document.getElementById("email").value.trim()
const inputPassword = document.getElementById("password").value.trim()

const users = [
    {
        username: inputValue,
        password: inputPassword
    }
]

let users = JSON.parse(usersString) || []

localStorage.setItem("users", JSON.stringify(users))