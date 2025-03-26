const prompt = require("prompt-sync")(); // Dùng để nhập dữ liệu từ người dùng

// Nhập số lượng phần tử
let n = parseInt(prompt("Nhập số lượng phần tử của mảng: "));

if (n < 0) {
  console.log("Số lượng phần tử không hợp lệ");
} else if (n === 0) {
  console.log("Mảng không có phần tử");
} else {
  // Nhập các phần tử của mảng
  let numericArray = [];
  for (let i = 0; i < n; i++) {
    let num = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}: `));
    numericArray.push(num);
  }

  // Đếm số lượng số nguyên âm
  let negativeCount = numericArray.filter((num) => num < 0).length;

  // Hiển thị kết quả
  console.log(`Số lượng số nguyên âm: ${negativeCount}`);
}
