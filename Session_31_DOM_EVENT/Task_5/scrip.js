// Dữ liệu nhân viên
const employees = [
    { id: 1, name: 'John', age: 18, address: 'New York' },
    { id: 2, name: 'Mike', age: 22, address: 'Canada' },
    { id: 3, name: 'Linda', age: 19, address: 'California' },
    { id: 4, name: 'Peter', age: 25, address: 'London' },
    { id: 5, name: 'Tony', age: 17, address: 'New York' },
];

// Lấy phần tử chứa bảng
const tableContainer = document.getElementById('employeeTable');

// Tạo bảng
const table = document.createElement('table');

// Tạo tiêu đề bảng
const thead = document.createElement('thead');
thead.innerHTML = `
    <tr>
        <th>STT</th>
        <th>NAME</th>
        <th>AGE</th>
        <th>ADDRESS</th>
    </tr>
`;
table.appendChild(thead);

// Tạo nội dung bảng
const tbody = document.createElement('tbody');
employees.forEach((employee, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${employee.name}</td>
        <td>${employee.age}</td>
        <td>${employee.address}</td>
    `;
    tbody.appendChild(row);
});
table.appendChild(tbody);

// Thêm bảng vào container
tableContainer.appendChild(table);