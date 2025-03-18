// Hàm tính thể tích hình cầu
function calculateVolume(radius) {
  return (4 / 3) * Math.PI * Math.pow(radius, 3); // Công thức tính thể tích hình cầu
}

// Hàm tính diện tích bề mặt hình cầu
function calculateSurfaceArea(radius) {
  return 4 * Math.PI * Math.pow(radius, 2); // Công thức tính diện tích bề mặt hình cầu
}

// Hàm tính chu vi lớn nhất của hình cầu
function calculateCircumference(radius) {
  return 2 * Math.PI * radius; // Công thức tính chu vi lớn nhất của hình cầu
}

// Hàm chính để lấy đầu vào và hiển thị kết quả
function main() {
  const radius = parseFloat(prompt("Nhập vào bán kính của hình cầu:")); // Lấy bán kính từ người dùng

  if (isNaN(radius) || radius <= 0) {
    // Kiểm tra bán kính có hợp lệ không
    console.log("Vui lòng nhập một bán kính hợp lệ."); // Thông báo lỗi nếu bán kính không hợp lệ
    return; // Kết thúc hàm nếu bán kính không hợp lệ
  }

  const volume = calculateVolume(radius); // Tính thể tích hình cầu
  const surfaceArea = calculateSurfaceArea(radius); // Tính diện tích bề mặt hình cầu
  const circumference = calculateCircumference(radius); // Tính chu vi lớn nhất của hình cầu

  console.log(`Thể tích hình cầu: ${volume.toFixed(2)}`); // Hiển thị thể tích hình cầu
  console.log(`Diện tích bề mặt hình cầu: ${surfaceArea.toFixed(2)}`); // Hiển thị diện tích bề mặt hình cầu
  console.log(`Chu vi lớn nhất của hình cầu: ${circumference.toFixed(2)}`); // Hiển thị chu vi lớn nhất của hình cầu
}

// Chạy hàm chính
main();
