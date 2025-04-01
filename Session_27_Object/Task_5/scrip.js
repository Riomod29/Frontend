const company = {
    name: "RikkeiSoft",
    location: "Hà Nội",
    employees: [
        { name: "Nguyễn Văn Luận", position: "Developer" },
        { name: "Nguyễn Văn Hoàng", position: "Tester" },
        { name: "Hoàng Nam Cao", position: "Manager" }
    ]
};
//Hiển thị tên công ty
console.log("Tên công ty:", company.name);

//Hiển thị tên của từng nhân viên
console.log("Danh sách nhân viên: ");
company.employees.forEach(employees => {
    console.log("- Tên nhân viên:", employees.name);
});
// employees trong đoạn mã là tham số của hàm callback được truyền vào forEach.
// Nó đại diện cho từng phần tử trong mảng company.employees khi forEach lặp qua.
// Mỗi phần tử trong mảng employees là một đối tượng chứa thông tin của một nhân viên

// forEach: Lặp qua từng phần tử trong mảng.
// employees: Đại diện cho từng phần tử (đối tượng nhân viên) trong mảng company.employees.