function sumNumbersInArray(n, array) {
  if (n < 0) {
      return "Số lượng phần tử không được âm";
  }
  if (n === 0) {
      return "Mảng không có phần tử";
  }

  let sum = 0; // Biến lưu tổng các số
  let hasNumber = false; // Kiểm tra xem có số nào trong mảng hay không

  for (let i = 0; i < array.length; i++) {
      const number = parseFloat(array[i]); // Cố gắng chuyển phần tử thành số
      if (!isNaN(number)) { // Nếu là số hợp lệ
          sum += number;
          hasNumber = true;
      }
  }

  return hasNumber ? sum : "Không có phần tử nào là số";
}

// Ví dụ minh họa
console.log(sumNumbersInArray(5, ['a', '-2', 'd', '5', 'e'])); // Output: 3
console.log(sumNumbersInArray(3, ['a', 'c', 'd']));            // Output: "Không có phần tử nào là số"
console.log(sumNumbersInArray(0, []));                         // Output: "Mảng không có phần tử"
console.log(sumNumbersInArray(-1, []));                        // Output: "Số lượng phần tử không được âm"