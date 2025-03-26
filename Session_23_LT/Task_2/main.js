let numericArray = [1, 2, 3, 4, 5, 6]; // Bạn có thể thay đổi mảng này để kiểm tra

if (numericArray.length === 0) {
  console.log("Không có số lớn nhất");
} else {
  // Tìm số lớn nhất và vị trí của nó
  let maxNumber = numericArray[0]; // Giả sử phần tử đầu tiên là lớn nhất
  let maxIndex = 0; // Vị trí của phần tử lớn nhất

  for (let i = 1; i < numericArray.length; i++) {
    if (numericArray[i] > maxNumber) {
      maxNumber = numericArray[i]; // Cập nhật số lớn nhất
      maxIndex = i; // Cập nhật vị trí của số lớn nhất
    }
  }

  // Hiển thị kết quả
  console.log(`Số lớn nhất: ${maxNumber}`);
  console.log(`Vị trí: ${maxIndex}`);
}
