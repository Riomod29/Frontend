let input = prompt("Nhập vào một dãy số: "); // Cho người dùng nhập vào
let numberArray = input.split(''); // Chuyển chuỗi thành mảng ký tự

// Kiểm tra xem mảng có chứa ký tự không phải số hay không
if (numberArray.some(char => isNaN(char))) {
    alert("Dãy số không hợp lệ");
} else {
    // Chuyển các phần tử trong mảng thành số
    let numericArray = numberArray.map(Number);

    // Tìm số lớn nhất trong mảng
    let maxNumber = Math.max(...numericArray);

    // Hiển thị kết quả
    alert(`${maxNumber} là số lớn nhất trong dãy số`);
}