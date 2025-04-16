// Account Management (Registration and Login)
class Account {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}

let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

function updateLocalStorageAccounts() {
    localStorage.setItem("accounts", JSON.stringify(accounts));
}

// Clear Errors Function (Used by Both Registration and Login)
function clearErrors() {
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");

    if (emailError) emailError.style.display = "none";
    if (passwordError) passwordError.style.display = "none";
    if (confirmPasswordError) confirmPasswordError.style.display = "none";
    if (emailInput) emailInput.classList.remove("valid", "invalid");
    if (passwordInput) passwordInput.classList.remove("valid", "invalid");
    if (confirmPasswordInput) confirmPasswordInput.classList.remove("valid", "invalid");
}

// Registration Validation
function validateForm(event) {
    event.preventDefault();

    const newEmail = event.target.email.value;
    const newPassword = event.target.password.value;
    const cfPassword = event.target.cfPassword.value;

    let isValid = true;

    clearErrors();
    const successMessage = document.getElementById("successMessage");
    if (successMessage) successMessage.style.display = "none";

    if (!newEmail) {
        document.getElementById("emailError").textContent = "Email cannot be empty.";
        document.getElementById("emailError").style.display = "block";
        document.getElementById("email").classList.add("invalid");
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(newEmail)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        document.getElementById("emailError").style.display = "block";
        document.getElementById("email").classList.add("invalid");
        isValid = false;
    } else if (accounts.some((account) => account.email === newEmail)) {
        document.getElementById("emailError").textContent = "This email is already registered.";
        document.getElementById("emailError").style.display = "block";
        document.getElementById("email").classList.add("invalid");
        isValid = false;
    } else {
        document.getElementById("email").classList.add("valid");
    }

    if (!newPassword) {
        document.getElementById("passwordError").textContent = "Password cannot be empty.";
        document.getElementById("passwordError").style.display = "block";
        document.getElementById("password").classList.add("invalid");
        isValid = false;
    } else if (newPassword.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters long.";
        document.getElementById("passwordError").style.display = "block";
        document.getElementById("password").classList.add("invalid");
        isValid = false;
    } else {
        document.getElementById("password").classList.add("valid");
    }

    if (newPassword !== cfPassword) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        document.getElementById("confirmPasswordError").style.display = "block";
        document.getElementById("confirm-password").classList.add("invalid");
        isValid = false;
    } else if (newPassword && cfPassword) {
        document.getElementById("confirm-password").classList.add("valid");
    }

    if (isValid) {
        const newAccount = new Account(newEmail, newPassword);
        accounts.push(newAccount);
        document.getElementById("successMessage").style.display = "block";
        document.getElementById("registerForm").reset();
        updateLocalStorageAccounts();
    }

    return isValid;
}

// Login Validation
function validateLogin(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    let isValid = true;

    clearErrors();

    if (!email) {
        document.getElementById("emailError").textContent = "Email cannot be empty.";
        document.getElementById("emailError").style.display = "block";
        document.getElementById("email").classList.add("invalid");
        isValid = false;
    }

    if (!password) {
        document.getElementById("passwordError").textContent = "Password cannot be empty.";
        document.getElementById("passwordError").style.display = "block";
        document.getElementById("password").classList.add("invalid");
        isValid = false;
    }

    if (isValid) {
        const account = accounts.find(acc => acc.email === email && acc.password === password);
        if (!account) {
            document.getElementById("passwordError").textContent = "Email or password is incorrect.";
            document.getElementById("passwordError").style.display = "block";
            document.getElementById("email").classList.add("invalid");
            document.getElementById("password").classList.add("invalid");
            isValid = false;
        }
    }

    if (isValid) {
        localStorage.setItem("loggedInUser", email);
        window.location.href = "index.html";
    }

    return isValid;
}

// Logout
function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}

// Task Management
class Course {
    constructor(id, content, dueDate, status, assignedTo) {
        this.id = id;
        this.content = content;
        this.dueDate = dueDate;
        this.status = status;
        this.assignedTo = assignedTo;
    }
}

let courses = JSON.parse(localStorage.getItem("courses")) || [];
let editIndex = null;

function updateCourses() {
    localStorage.setItem("courses", JSON.stringify(courses));
}

const courseData = document.querySelector("#course-data");
const errorMessage = document.querySelector("#error-message");

function renderCourses() {
    if (!courseData) return;
    let data = "";
    courses.forEach((course, index) => {
        data += `
            <tr>
                <td>${index + 1}</td>
                <td>${course.content}</td>
                <td>${course.dueDate}</td>
                <td>${course.status}</td>
                <td>${course.assignedTo}</td>
                <td class="action-buttons">
                    <button class="edit" onclick="loadEditCourse(${index})">Sửa</button>
                    <button class="delete" onclick="deleteCourse(${index})">Xóa</button>
                </td>
            </tr>`;
    });
    courseData.innerHTML = data;
}

function validateInputs(content, dueDate, status, assignedTo) {
    if (!content.trim()) return "Content is required.";
    if (!dueDate) return "Due date is required.";
    if (!status) return "Status is required.";
    if (!assignedTo.trim()) return "Assigned to is required.";
    return "";
}

function clearForm() {
    document.querySelector("input[name='content']").value = "";
    document.querySelector("input[name='dueDate']").value = "";
    document.querySelector("select[name='status']").value = "";
    document.querySelector("input[name='assignedTo']").value = "";
    document.querySelector("button").innerText = "Submit";
    editIndex = null;
    if (errorMessage) errorMessage.textContent = "";
}

function addCourse(content, dueDate, status, assignedTo) {
    const id = courses.length > 0 ? Math.max(...courses.map(c => c.id)) + 1 : 1;
    const course = new Course(id, content, dueDate, status, assignedTo);
    courses.push(course);
}

function updateCourse(index, content, dueDate, status, assignedTo) {
    const course = new Course(courses[index].id, content, dueDate, status, assignedTo);
    courses[index] = course;
}

function handleSubmit() {
    const content = document.querySelector("input[name='content']").value;
    const dueDate = document.querySelector("input[name='dueDate']").value;
    const status = document.querySelector("select[name='status']").value;
    const assignedTo = document.querySelector("input[name='assignedTo']").value;

    const error = validateInputs(content, dueDate, status, assignedTo);
    if (error) {
        errorMessage.textContent = error;
        return;
    }

    if (editIndex === null) {
        addCourse(content, dueDate, status, assignedTo);
    } else {
        updateCourse(editIndex, content, dueDate, status, assignedTo);
    }

    updateCourses();
    renderCourses();
    clearForm();
}

function deleteCourse(index) {
    courses.splice(index, 1);
    updateCourses();
    renderCourses();
}

function loadEditCourse(index) {
    const course = courses[index];
    document.querySelector("input[name='content']").value = course.content;
    document.querySelector("input[name='dueDate']").value = course.dueDate;
    document.querySelector("select[name='status']").value = course.status;
    document.querySelector("input[name='assignedTo']").value = course.assignedTo;
    document.querySelector("button").innerText = "Cập nhật";
    editIndex = index;
    if (errorMessage) errorMessage.textContent = "";
}

// Check if user is logged in on Task Management page
if (window.location.pathname.includes("index.html")) {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
        window.location.href = "login.html";
    } else {
        renderCourses();
    }
}