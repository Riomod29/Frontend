function isPrimeNumber(num) {
    // Kiểm tra nếu tham số không phải là số nguyên dương
    if (!Number.isInteger(num) || num <= 0) {
        return "Dữ liệu không hợp lệ";
    }

    // Số nguyên tố phải lớn hơn 1
    if (num === 1) {
        return "Không phải là số nguyên tố";
    }

    // Kiểm tra tính nguyên tố
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return "Không phải là số nguyên tố";
        }
    }

    return "Là số nguyên tố";
}

// Test cases
console.log(isPrimeNumber(17));  // Output: Là số nguyên tố
console.log(isPrimeNumber(6));   // Output: Không phải là số nguyên tố
console.log(isPrimeNumber("text")); // Output: Dữ liệu không hợp lệ
console.log(isPrimeNumber(1));   // Output: Không phải là số nguyên tố
console.log(isPrimeNumber(-5));  // Output: Dữ liệu không hợp lệ