function isPalindrome(str) {
    // Loại bỏ khoảng trắng và chuyển chuỗi về chữ thường
    const normalizedStr = str.toLowerCase().replace(/\s+/g, "");

    // Đảo ngược chuỗi
    const reversedStr = normalizedStr.split("").reverse().join("");

    // So sánh chuỗi gốc và chuỗi đảo ngược
    return normalizedStr === reversedStr;
}

// Nhập chuỗi từ người dùng
const userInput = prompt("Nhập vào một chuỗi để kiểm tra:");

// Kiểm tra và hiển thị kết quả
if (isPalindrome(userInput)) {
    alert(`${userInput} là chuỗi đối xứng`);
} else {
    alert(`${userInput} không phải chuỗi đối xứng`);
}