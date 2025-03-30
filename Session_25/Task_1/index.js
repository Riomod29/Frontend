function findMinValue(arr) {
    // Kiểm tra nếu tham số không phải là mảng
    if (!Array.isArray(arr)) {
        return "Giá trị không hợp lệ";
    }

    // Kiểm tra nếu mảng rỗng
    if (arr.length === 0) {
        return "Mảng không chứa phần tử";
    }

    // Tìm giá trị nhỏ nhất trong mảng
    const minValue = Math.min(...arr);
    return `Phần tử nhỏ nhất trong mảng là ${minValue}`;
}

// Test
console.log(findMinValue([2, 4, 8, 1, 9])); // Output: Phần tử nhỏ nhất trong mảng là 1
console.log(findMinValue([]));              // Output: Mảng không chứa phần tử
console.log(findMinValue("abc"));           // Output: Giá trị không hợp lệ
console.log(findMinValue([5, 2, 7, 5, 4])); // Output: Phần tử nhỏ nhất trong mảng là 2