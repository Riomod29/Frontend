const prompt = require("prompt-sync")(); // Dùng để nhập dữ liệu từ người dùng

// Nhập số lượng phần tử
let n = parseInt(prompt("Nhập số lượng phần tử của mảng: "));

if (n < 0) {
  console.log("Số lượng phần tử không được nhỏ hơn 0");
} else if (n === 0) {
  console.log("Mảng không có phần tử nào");
} else {
  // Nhập các phần tử của mảng
  let array = [];
  for (let i = 0; i < n; i++) {
    let num = parseInt(prompt(`Nhập phần tử thứ ${i + 1}: `));
    array.push(num);
  }

  // Tìm số lớn thứ hai
  let max1 = -Infinity; // Số lớn nhất
  let max2 = -Infinity; // Số lớn thứ hai

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max1) {
      max2 = max1; // Cập nhật max2
      max1 = array[i]; // Cập nhật max1
    } else if (array[i] > max2 && array[i] < max1) {
      max2 = array[i]; // Cập nhật max2
    }
  }

  // Hiển thị kết quả
  if (max2 === -Infinity) {
    console.log("Không tìm thấy số lớn thứ hai");
  } else {
    console.log(`Số lớn thứ hai: ${max2}`);
  }
}
