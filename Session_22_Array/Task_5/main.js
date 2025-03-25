// Khai báo mảng số nguyên gồm 5 phần tử ngẫu nhiên
let numberArray = [9, 2, 6, 8, 5];

// Tính tổng các số chẵn
let evenSum = numberArray
  .filter((num) => num % 2 === 0) // Lọc các số chẵn
  .reduce((sum, num) => sum + num, 0); // Tính tổng

// Tính tổng các số lẻ
let oddSum = numberArray
  .filter((num) => num % 2 !== 0) // Lọc các số lẻ
  .reduce((sum, num) => sum + num, 0); // Tính tổng

// Hiển thị kết quả
console.log(`Tổng các số chẵn: ${evenSum}`);
console.log(`Tổng các số lẻ: ${oddSum}`);
