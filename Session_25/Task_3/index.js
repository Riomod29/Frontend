function findEvenNumbers(arr) {
    // Kiểm tra nếu tham số không phải là mảng
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }

    // Lọc các số chẵn trong mảng
    const evenNumbers = arr.filter(num => Number.isInteger(num) && num % 2 === 0);

    // Kiểm tra nếu không có số chẵn
    if (evenNumbers.length === 0) {
        return "Mảng không chứa số chẵn";
    }

    // Trả về các số chẵn
    return evenNumbers.join(", ");
}

// Test cases
console.log(findEvenNumbers([11, 4, 65, 6])); // Output: 4, 6
console.log(findEvenNumbers([1, 3, 5, 17]));  // Output: Mảng không chứa số chẵn
console.log(findEvenNumbers("text"));         // Output: Dữ liệu không hợp lệ
console.log(findEvenNumbers([2, 8, 10]));     // Output: 2, 8, 10