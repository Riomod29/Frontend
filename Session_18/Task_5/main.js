let yearsOfExperience = parseFloat(prompt("Nhập số năm kinh nghiệm của nhân viên:"));

if (yearsOfExperience < 1) {
    console.log("Mới vào nghề");
} else if (yearsOfExperience >= 1 && yearsOfExperience <= 3) {
    console.log("Nhân viên có kinh nghiệm");
} else if (yearsOfExperience >= 4 && yearsOfExperience <= 6) {
    console.log("Chuyên viên");
} else if (yearsOfExperience > 6) {
    console.log("Quản lý");
} else {
    console.log("Dữ liệu không hợp lệ");
}