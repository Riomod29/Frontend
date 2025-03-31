function filterValidEmails(emailList) {
    // Bước 1: Kiểm tra tính hợp lệ của mảng
    if (!Array.isArray(emailList) || emailList.some(item => typeof item !== "string")) {
        return "Dữ liệu không hợp lệ";
    }

    // Bước 2: Lọc các email hợp lệ
    const validEmails = emailList.filter(email => email.includes("@") && !email.includes(" "));

    // Bước 3: Xử lý trường hợp mảng rỗng
    if (validEmails.length === 0) {
        return "Mảng không có phần tử nào";
    }

    // Trả về mảng email hợp lệ
    return validEmails;
}

// Ví dụ sử dụng
console.log(filterValidEmails(["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"])); 
// Output: ["john.doe@gmail.com", "hello@domain.net"]

console.log(filterValidEmails([])); 
// Output: "Mảng không có phần tử nào"

console.log(filterValidEmails("abc")); 
// Output: "Dữ liệu không hợp lệ"