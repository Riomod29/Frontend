// Khai báo mảng số nguyên gồm 10 phần tử
let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];

// Nhập số nguyên từ người dùng
let input = parseInt(prompt("Nhập một số nguyên: "), 10);

// Đếm số lần xuất hiện của số trong mảng
let count = numbers.filter((num) => num === input).length;

// Hiển thị kết quả
if (count > 0) {
  console.log(`Số ${input} xuất hiện ${count} lần trong mảng`);
} else {
  console.log(`Số ${input} không tồn tại trong mảng`);
}
