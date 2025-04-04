let contact = {
    id: 1,
    name: "Rio",
    email: "tru113112111@gmail.com",
    phone: "1234567890",
}
function showMenu() {
    alert("\n --- QUẢN LÝ DANH BẠ --- \n"
        + "1. Thêm mới danh bạ \n"
        + "2. Hiển thị danh bạ \n"
        + "3. Tìm kiếm danh bạ \n"
        + "4. Cập nhật danh bạ \n"
        + "5. Xóa liên hệ \n"
        + "6. Thoát \n"
        + "--------------------------------- \n"
        + "Vui lòng chọn chức năng: \n"
        + "--------------------------------- \n"
    )
}
function handleMenu() {
    switch () {
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng chọn lại!");
            showMenu();      
    }
}
