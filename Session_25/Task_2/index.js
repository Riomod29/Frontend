function sumTwoNumbers(a, b) {
    // Kiểm tra nếu cả hai tham số không phải là số nguyên
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "Dữ liệu không hợp lệ";
    }

    // Tính tổng hai số
    return a + b;
}

// Test cases
console.log(sumTwoNumbers(2, 6));       // Output: 8
console.log(sumTwoNumbers(3, "text")); // Output: Dữ liệu không hợp lệ
console.log(sumTwoNumbers(7, -7));     // Output: 0
console.log(sumTwoNumbers(4.5, 3));    // Output: Dữ liệu không hợp lệ