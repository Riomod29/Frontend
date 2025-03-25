// Tạo một mảng số
let numberArray = [2, 5, 7, 4, 1, 8, 6];

// Hàm kiểm tra một số có trong mảng hay không
function checkNumberInArray(number) {
  if (numberArray.includes(number)) {
    alert("Bingo");
  } else {
    alert("Chúc bạn may mắn lần sau");
  }
}

// Nhập số từ người dùng
// Chuyển chuỗi nhập vào thành số nguyên
// 10 ở đây là cơ số của hệ thập phân
const userInput = parseInt(prompt("Nhập một số: "), 10); 
checkNumberInArray(userInput);
