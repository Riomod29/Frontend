let hour = parseInt(prompt("Nhập giờ (0-23):"));
let minute = parseInt(prompt("Nhập phút (0-59):"));
let second = parseInt(prompt("Nhập giây (0-59):"));

// Kiểm tra giá trị hợp lệ
if (
    hour >= 0 && hour <= 23 &&
    minute >= 0 && minute <= 59 &&
    second >= 0 && second <= 59
) {
    // Xác định AM hoặc PM
    let period = hour >= 12 ? "PM" : "AM";

    // Chuyển đổi sang định dạng 12 giờ
    let hour12 = hour % 12;
    hour12 = hour12 === 0 ? 12 : hour12; // Nếu giờ là 0 hoặc 12, hiển thị là 12

    console.log(`Thời gian: ${hour12}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')} ${period}`);
} else {
    console.log("Dữ liệu không hợp lệ. Vui lòng nhập lại.");
}