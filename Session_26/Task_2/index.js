function filterLongStrings(arr) {
    // Bước 1: Kiểm tra tính hợp lệ của mảng
    if (!Array.isArray(arr) || arr.some(item => typeof item !== "string")) {
        return "Dữ liệu không hợp lệ";
    }

    // Bước 2: Lọc các chuỗi có độ dài lớn hơn 5 ký tự
    const filteredArr = arr.filter(str => str.length > 5);

    // Bước 3: Xử lý trường hợp mảng rỗng
    if (filteredArr.length === 0) {
        return "Mảng không có phần tử nào";
    }

    // Trả về mảng kết quả
    return filteredArr;
}

// Ví dụ sử dụng
console.log(filterLongStrings(["apple", "banana", "cat", "elephant", "dog"])); // ["banana", "elephant"]
console.log(filterLongStrings([])); // "Mảng không có phần tử nào"
console.log(filterLongStrings("abc")); // "Dữ liệu không hợp lệ"