const pageSize = 3;
let currentPage = 1;

// Lấy dữ liệu từ localStorage, nếu chưa có thì tạo mảng trống
function getEmployees() {
    const data = localStorage.getItem("employees");
    return data ? JSON.parse(data) : [];
}

// Lưu lại dữ liệu vào localStorage
function saveEmployees(list) {
    localStorage.setItem("employees", JSON.stringify(list));
}

// Thêm nhân viên mới
function addEmployee() {
    const name = document.getElementById("name").value.trim();
    const position = document.getElementById("position").value.trim();

    if (!name || !position) {
        alert("Vui lòng nhập đủ thông tin!");
        return;
    }

    const employees = getEmployees();
    employees.push({ name, position });
    saveEmployees(employees);

    document.getElementById("name").value = "";
    document.getElementById("position").value = "";

    currentPage = Math.ceil(employees.length / pageSize);  // Chuyển sang trang cuối
    renderTable();
}

// Hiển thị bảng nhân viên
function renderTable() {
    const employees = getEmployees();
    const tableBody = document.getElementById("employeeTable");
    tableBody.innerHTML = "";

    const start = (currentPage - 1) * pageSize;
    const pageEmployees = employees.slice(start, start + pageSize);

    pageEmployees.forEach((emp, index) => {
        const row = `<tr>
            <td>${start + index + 1}</td>
            <td>${emp.name}</td>
            <td>${emp.position}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });

    renderPagination(employees.length);
}

// Hiển thị nút phân trang
function renderPagination(totalItems) {
    const totalPages = Math.ceil(totalItems / pageSize);
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    const prevBtn = `<button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>Previous</button>`;
    pagination.innerHTML += prevBtn;

    for (let i = 1; i <= totalPages; i++) {
        const activeClass = i === currentPage ? "active" : "";
        pagination.innerHTML += `<button class="${activeClass}" onclick="changePage(${i})">${i}</button>`;
    }

    const nextBtn = `<button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>Next</button>`;
    pagination.innerHTML += nextBtn;
}

// Chuyển trang
function changePage(page) {
    const employees = getEmployees();
    const totalPages = Math.ceil(employees.length / pageSize);
    if (page < 1 || page > totalPages) return;

    currentPage = page;
    renderTable();
}

// Khởi động trang
renderTable();
