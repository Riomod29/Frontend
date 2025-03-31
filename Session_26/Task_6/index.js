function convertDateFormat(dateList) {
    // Bước 1: Kiểm tra tính hợp lệ của mảng
    if (!Array.isArray(dateList) || dateList.some(item => typeof item !== "string")) {
        return "Dữ liệu không hợp lệ";
    }

    // Biểu thức chính quy để kiểm tra định dạng YYYY-MM-DD
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    // Bước 2: Chuyển đổi định dạng ngày tháng
    const convertedDates = dateList
        .filter(date => dateRegex.test(date)) // Lọc các chuỗi ngày tháng hợp lệ
        .map(date => {
            const [year, month, day] = date.split("-"); // Tách chuỗi theo dấu "-"
            return `${day}/${month}/${year}`; // Sắp xếp lại theo định dạng DD/MM/YYYY
        });

    // Bước 3: Xử lý trường hợp mảng rỗng
    if (convertedDates.length === 0) {
        return "Mảng không có phần tử nào";
    }

    // Trả về mảng ngày tháng đã chuyển đổi
    return convertedDates;
}

// Ví dụ sử dụng
console.log(convertDateFormat(["2025-03-10", "2024-12-25", "2023-07-01"])); 
// Output: ["10/03/2025", "25/12/2024", "01/07/2023"]

console.log(convertDateFormat([])); 
// Output: "Mảng không có phần tử nào"

console.log(convertDateFormat("abc")); 
// Output: "Dữ liệu không hợp lệ"