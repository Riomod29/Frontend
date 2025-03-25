// Khai báo mảng số nguyên gồm 10 phần tử
let numbers = [2, 1, 7, 1, 8, 6, 2, 2, 7];

// Loại bỏ các phần tử trùng nhau bằng cách sử dụng Set
let uniqueNumbers = [...new Set(numbers)];

// Sắp xếp mảng theo thứ tự tăng dần
uniqueNumbers.sort((a, b) => a - b);

// Hiển thị kết quả
console.log(
  "Mảng sau khi loại bỏ phần tử trùng và sắp xếp tăng dần:",
  uniqueNumbers
);
