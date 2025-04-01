// Hàm hiển thị menu và thực hiện các phép tính hình học
function geometryMenu() {
    let choice; // Biến lưu lựa chọn của người dùng
    do {
        // Hiển thị menu
        console.log("Chọn một chức năng:");
        console.log("1. Tính diện tích hình tròn.");
        console.log("2. Tính chu vi hình tròn.");
        console.log("3. Tính diện tích hình chữ nhật.");
        console.log("4. Tính chu vi hình chữ nhật.");
        console.log("5. Thoát.");
        
        // Yêu cầu người dùng nhập lựa chọn
        choice = parseInt(prompt("Nhập lựa chọn của bạn (1-5):"));

        // Kiểm tra lựa chọn và thực hiện chức năng tương ứng
        switch (choice) {
            case 1:
                // Gọi hàm tính diện tích hình tròn
                calculateCircleArea();
                break;
            case 2:
                // Gọi hàm tính chu vi hình tròn
                calculateCircleCircumference();
                break;
            case 3:
                // Gọi hàm tính diện tích hình chữ nhật
                calculateRectangleArea();
                break;
            case 4:
                // Gọi hàm tính chu vi hình chữ nhật
                calculateRectanglePerimeter();
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

// Hàm tính diện tích hình tròn
function calculateCircleArea() {
    let radius = parseFloat(prompt("Nhập bán kính hình tròn:")); // Nhập bán kính
    if (radius > 0) {
        let area = Math.PI * Math.pow(radius, 2); // Công thức tính diện tích hình tròn
        console.log(`Diện tích hình tròn là: ${area.toFixed(2)}`); // Hiển thị kết quả
    } else {
        console.log("Bán kính phải lớn hơn 0."); // Thông báo nếu bán kính không hợp lệ
    }
}

// Hàm tính chu vi hình tròn
function calculateCircleCircumference() {
    let radius = parseFloat(prompt("Nhập bán kính hình tròn:")); // Nhập bán kính
    if (radius > 0) {
        let circumference = 2 * Math.PI * radius; // Công thức tính chu vi hình tròn
        console.log(`Chu vi hình tròn là: ${circumference.toFixed(2)}`); // Hiển thị kết quả
    } else {
        console.log("Bán kính phải lớn hơn 0."); // Thông báo nếu bán kính không hợp lệ
    }
}

// Hàm tính diện tích hình chữ nhật
function calculateRectangleArea() {
    let length = parseFloat(prompt("Nhập chiều dài hình chữ nhật:")); // Nhập chiều dài
    let width = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:")); // Nhập chiều rộng
    if (length > 0 && width > 0) {
        let area = length * width; // Công thức tính diện tích hình chữ nhật
        console.log(`Diện tích hình chữ nhật là: ${area.toFixed(2)}`); // Hiển thị kết quả
    } else {
        console.log("Chiều dài và chiều rộng phải lớn hơn 0."); // Thông báo nếu kích thước không hợp lệ
    }
}

// Hàm tính chu vi hình chữ nhật
function calculateRectanglePerimeter() {
    let length = parseFloat(prompt("Nhập chiều dài hình chữ nhật:")); // Nhập chiều dài
    let width = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:")); // Nhập chiều rộng
    if (length > 0 && width > 0) {
        let perimeter = 2 * (length + width); // Công thức tính chu vi hình chữ nhật
        console.log(`Chu vi hình chữ nhật là: ${perimeter.toFixed(2)}`); // Hiển thị kết quả
    } else {
        console.log("Chiều dài và chiều rộng phải lớn hơn 0."); // Thông báo nếu kích thước không hợp lệ
    }
}

// Gọi hàm để chạy chương trình
geometryMenu();