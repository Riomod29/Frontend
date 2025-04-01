// Hàm hiển thị menu và thực hiện các phép tính
function calculatorMenu() {
    let choice; // Biến lưu lựa chọn của người dùng
    do {
        // Hiển thị menu
        console.log("Chọn một chức năng:");
        console.log("1. Cộng hai số.");
        console.log("2. Trừ hai số.");
        console.log("3. Nhân hai số.");
        console.log("4. Chia hai số.");
        console.log("5. Thoát.");
        
        // Yêu cầu người dùng nhập lựa chọn
        choice = parseInt(prompt("Nhập lựa chọn của bạn (1-5):"));

        // Kiểm tra lựa chọn và thực hiện chức năng tương ứng
        switch (choice) {
            case 1:
                // Gọi hàm cộng hai số
                addTwoNumbers();
                break;
            case 2:
                // Gọi hàm trừ hai số
                subtractTwoNumbers();
                break;
            case 3:
                // Gọi hàm nhân hai số
                multiplyTwoNumbers();
                break;
            case 4:
                // Gọi hàm chia hai số
                divideTwoNumbers();
                break;
            case 5:
                // Thoát chương trình
                console.log("Thoát chương trình.");
                break;
            default:
                // Thông báo nếu nhập sai lựa chọn
                console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        }
    } while (choice !== 5); // Lặp lại cho đến khi người dùng chọn thoát
}

// Hàm cộng hai số
function addTwoNumbers() {
    let a = parseFloat(prompt("Nhập số thứ nhất:")); // Nhập số thứ nhất
    let b = parseFloat(prompt("Nhập số thứ hai:")); // Nhập số thứ hai
    console.log(`Kết quả: ${a} + ${b} = ${a + b}`); // Hiển thị kết quả
}

// Hàm trừ hai số
function subtractTwoNumbers() {
    let a = parseFloat(prompt("Nhập số thứ nhất:")); // Nhập số thứ nhất
    let b = parseFloat(prompt("Nhập số thứ hai:")); // Nhập số thứ hai
    console.log(`Kết quả: ${a} - ${b} = ${a - b}`); // Hiển thị kết quả
}

// Hàm nhân hai số
function multiplyTwoNumbers() {
    let a = parseFloat(prompt("Nhập số thứ nhất:")); // Nhập số thứ nhất
    let b = parseFloat(prompt("Nhập số thứ hai:")); // Nhập số thứ hai
    console.log(`Kết quả: ${a} * ${b} = ${a * b}`); // Hiển thị kết quả
}

// Hàm chia hai số
function divideTwoNumbers() {
    let a = parseFloat(prompt("Nhập số thứ nhất:")); // Nhập số thứ nhất
    let b = parseFloat(prompt("Nhập số thứ hai:")); // Nhập số thứ hai
    if (b !== 0) {
        console.log(`Kết quả: ${a} / ${b} = ${a / b}`); // Hiển thị kết quả nếu b khác 0
    } else {
        console.log("Lỗi: Không thể chia cho 0."); // Thông báo lỗi nếu b = 0
    }
}

// Gọi hàm để chạy chương trình
calculatorMenu();