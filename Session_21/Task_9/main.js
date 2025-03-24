// Yêu cầu người dùng nhập một số nguyên và chuyển đổi giá trị nhập vào thành kiểu số
let number = Number(prompt("Nhập 1 số nguyên"));

// Khởi tạo biến boolean `a` với giá trị ban đầu là true, giả định số nhập vào là số nguyên tố
let a = true;

// Vòng lặp kiểm tra từ 2 đến căn bậc hai của số đã nhập
for (let i = 2; i <= Math.sqrt(number); i++) {
  // Kiểm tra nếu số đã nhập chia hết cho `i`
  if (number % i === 0) {
    // Nếu chia hết, gán `a` bằng false (không phải số nguyên tố) và thoát vòng lặp
    a = false;
    break;
  }
}

// Kiểm tra giá trị của `a` để xác định số đã nhập có phải là số nguyên tố hay không
if (a) {
  // Nếu `a` là true, in ra thông báo đây là số nguyên tố
  console.log("Đây là một số nguyên tố");
} else {
  // Nếu `a` là false, in ra thông báo đây không phải là số nguyên tố
  console.log("Đây không phải là số nguyên tố");
}
