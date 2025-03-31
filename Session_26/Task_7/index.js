function processArray(arr) {
    // Bước 1: Kiểm tra tính hợp lệ của mảng
    if (!Array.isArray(arr) || arr.some(item => typeof item !== "number")) {
        return "Dữ liệu không hợp lệ";
    }

    // Bước 2: Bình phương các phần tử trong mảng
    const squaredArray = arr.map(num => num ** 2);

    // Bước 3: Lọc ra các số chẵn
    const evenNumbers = squaredArray.filter(num => num % 2 === 0);

    // Bước 4: Xử lý trường hợp mảng rỗng
    if (evenNumbers.length === 0) {
        return "Mảng không có dữ liệu";
    }

    // Trả về mảng kết quả
    return evenNumbers;
}

// Ví dụ sử dụng
console.log(processArray([2, 5, 10])); 
// Output: [4, 100]

console.log(processArray([])); 
// Output: "Mảng không có dữ liệu"

console.log(processArray("abc")); 
// Output: "Dữ liệu không hợp lệ"