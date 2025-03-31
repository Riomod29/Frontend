// Hàm kiểm tra một số có phải là số nguyên tố hay không
function isPrime(num) {
    if (num < 2) return false; // Số nhỏ hơn 2 không phải là số nguyên tố
    for (let i = 2; i <= Math.sqrt(num); i++) { // Kiểm tra từ 2 đến căn bậc hai của số
        if (num % i === 0) return false; // Nếu chia hết cho i thì không phải số nguyên tố
    }
    return true; // Nếu không chia hết cho số nào thì là số nguyên tố
}

// Hàm xử lý đầu vào và lọc các số nguyên tố lẻ
function processArray(input) {
    // Kiểm tra nếu input không phải là một mảng
    if (!Array.isArray(input)) {
        return "Dữ liệu không hợp lệ"; // Trả về thông báo lỗi
    }

    // Kiểm tra nếu mảng rỗng
    if (input.length === 0) {
        return "Mảng không có dữ liệu"; // Trả về thông báo lỗi
    }

    // Lọc các số nguyên tố lẻ
    const result = input.filter(num => {
        return typeof num === "number" && num % 2 !== 0 && isPrime(num); // Kiểm tra số lẻ và là số nguyên tố
    });

    return result; // Trả về mảng kết quả
}

// Ví dụ sử dụng
const input1 = [10, 2, 3, 5, 7, 9];
console.log(processArray(input1)); // Output: [3, 5, 7]

const input2 = [];
console.log(processArray(input2)); // Output: "Mảng không có dữ liệu"

const input3 = "abc";
console.log(processArray(input3)); // Output: "Dữ liệu không hợp lệ"