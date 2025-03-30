function countPositiveIntegers(arr) {
    // Kiểm tra nếu tham số không phải là mảng
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }

    // Lọc các số nguyên dương trong mảng
    const positiveIntegers = arr.filter(num => Number.isInteger(num) && num > 0);

    // Kiểm tra nếu không có số nguyên dương
    if (positiveIntegers.length === 0) {
        return "Không có số nguyên dương trong mảng";
    }

    // Trả về số lượng các số nguyên dương
    return positiveIntegers.length;
}

// Test cases
console.log(countPositiveIntegers([4, 5.4, 6, -2])); // Output: 2
console.log(countPositiveIntegers([1, 2, 5, 7, -8, 6])); // Output: 5
console.log(countPositiveIntegers([1.2, -3, -6])); // Output: Không có số nguyên dương trong mảng
console.log(countPositiveIntegers("text")); // Output: Dữ liệu không hợp lệ
console.log(countPositiveIntegers([])); // Output: Không có số nguyên dương trong mảng