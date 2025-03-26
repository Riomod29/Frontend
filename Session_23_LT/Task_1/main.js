let numericArray = [1, 22, 12, 8, 7, 9]; // Bạn có thể thay đổi mảng này để kiểm tra

// Lọc các số lớn hơn hoặc bằng 10
let numbersGreaterThan10 = numericArray.filter(num => num >= 10);

// Đếm số lượng phần tử lớn hơn hoặc bằng 10
let countGreaterThanOrEqual10 = numbersGreaterThan10.length;

// Hiển thị kết quả
if (countGreaterThanOrEqual10 > 0) {
  console.log(
    `Các số lớn hơn hoặc bằng 10: ${numbersGreaterThan10.join(", ")}`
  );
  console.log(`Số lượng: ${countGreaterThanOrEqual10}`);
} else {
  console.log("Không có số nào lớn hơn 10");
}
