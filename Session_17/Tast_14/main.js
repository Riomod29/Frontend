// Hàm tính chu vi đáy
function calculateCircumference(radius) {
  return 2 * Math.PI * radius; // Công thức tính chu vi đáy
}

// Hàm tính diện tích xung quanh
function calculateLateralSurfaceArea(radius, height) {
  return 2 * Math.PI * radius * height; // Công thức tính diện tích xung quanh
}

// Hàm tính diện tích toàn phần
function calculateTotalSurfaceArea(radius, height) {
  return 2 * Math.PI * radius * (radius + height); // Công thức tính diện tích toàn phần
}

// Hàm tính thể tích hình trụ
function calculateVolume(radius, height) {
  return Math.PI * Math.pow(radius, 2) * height; // Công thức tính thể tích hình trụ
}

// Hàm chính để lấy đầu vào và hiển thị kết quả
function main() {
  const radius = parseFloat(prompt("Nhập vào bán kính:")); // Lấy bán kính từ người dùng
  const height = parseFloat(prompt("Nhập vào chiều cao:")); // Lấy chiều cao từ người dùng

  const circumference = calculateCircumference(radius); // Tính chu vi đáy
  const lateralSurfaceArea = calculateLateralSurfaceArea(radius, height); // Tính diện tích xung quanh
  const totalSurfaceArea = calculateTotalSurfaceArea(radius, height); // Tính diện tích toàn phần
  const volume = calculateVolume(radius, height); // Tính thể tích hình trụ

  console.log(`Chu vi đáy: ${circumference.toFixed(2)}`); // Hiển thị chu vi đáy
  console.log(`Diện tích xung quanh: ${lateralSurfaceArea.toFixed(2)}`); // Hiển thị diện tích xung quanh
  console.log(`Diện tích toàn phần: ${totalSurfaceArea.toFixed(2)}`); // Hiển thị diện tích toàn phần
  console.log(`Thể tích hình trụ: ${volume.toFixed(2)}`); // Hiển thị thể tích hình trụ
}

// Chạy hàm chính
main();
