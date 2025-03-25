// Khai báo mảng số nguyên gồm 10 phần tử
let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];

// Tạo một đối tượng để đếm số lần xuất hiện của từng phần tử
let frequency = {};

// Duyệt qua mảng và đếm số lần xuất hiện của từng phần tử
numbers.forEach((num) => {
  frequency[num] = (frequency[num] || 0) + 1;
});

// Tìm phần tử có số lần xuất hiện nhiều nhất
let maxFrequency = 0;
let mostFrequentNumbers = [];

for (let num in frequency) {
  if (frequency[num] > maxFrequency) {
    maxFrequency = frequency[num];
    mostFrequentNumbers = [parseInt(num)];
  } else if (frequency[num] === maxFrequency) {
    mostFrequentNumbers.push(parseInt(num));
  }
}

// Tìm phần tử nhỏ nhất trong các phần tử có số lần xuất hiện nhiều nhất
let result = Math.min(...mostFrequentNumbers);

// Hiển thị kết quả
console.log(`Phần tử có số lần xuất hiện nhiều nhất là: ${result}`);
