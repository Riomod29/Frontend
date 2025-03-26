// Khai báo mảng
let array = ["", false, 0, 5, 10, "Hello world!"];

// Tạo mảng mới để lưu các giá trị "truthy"
let filteredArray = [];

for (let i = 0; i < array.length; i++) {
  // Kiểm tra nếu phần tử không phải là "falsy"
  if (array[i]) {
    filteredArray.push(array[i]); // Thêm phần tử vào mảng mới
  }
}

// Hiển thị kết quả
console.log(filteredArray);