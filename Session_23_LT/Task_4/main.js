const prompt = require("prompt-sync")(); // Dùng để nhập dữ liệu từ người dùng

// Nhập số lượng phần tử
let n = parseInt(prompt("Nhập số lượng phần tử của mảng: "));

if (n <= 0) {
  console.log("Không có ký tự số");
} else {
  // Nhập các phần tử của mảng
  let charArray = [];
  for (let i = 0; i < n; i++) {
    let char = prompt(`Nhập phần tử thứ ${i + 1}: `);
    charArray.push(char);
  }

  // Tìm các ký tự số
  let digitChars = [];
  for (let i = 0; i < charArray.length; i++) {
    if (!isNaN(charArray[i]) && charArray[i].trim() !== "") {
      digitChars.push(charArray[i]);
    }
  }

  // Hiển thị kết quả
  if (digitChars.length > 0) {
    console.log(`Ký tự số: ${digitChars.join(" ")}`);
  } else {
    console.log("Không có ký tự số");
  }
}
