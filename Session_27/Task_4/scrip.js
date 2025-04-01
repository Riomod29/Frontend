// Khởi tạo danh sách số nguyên (mảng rỗng ban đầu)
let numberList = [];

// Hàm hiển thị menu xử lý số nguyên
function numberProcessingMenu() {
    let choice; // Biến lưu lựa chọn của người dùng
    do {
        // Hiển thị menu
        console.log("Chọn một chức năng:");
        console.log("1. Nhập danh sách số nguyên.");
        console.log("2. Tính trung bình các số.");
        console.log("3. Tìm số chẵn lớn nhất.");
        console.log("4. Tìm số lẻ nhỏ nhất.");
        console.log("5. Thoát.");
        
        // Yêu cầu người dùng nhập lựa chọn
        choice = parseInt(prompt("Nhập lựa chọn của bạn (1-5):"));

        // Kiểm tra lựa chọn và thực hiện chức năng tương ứng
        switch (choice) {
            case 1:
                // Gọi hàm nhập danh sách số nguyên
                inputNumberList();
                break;
            case 2:
                // Gọi hàm tính trung bình các số
                calculateAverage();
                break;
            case 3:
                // Gọi hàm tìm số chẵn lớn nhất
                findLargestEvenNumber();
                break;
            case 4:
                // Gọi hàm tìm số lẻ nhỏ nhất
                findSmallestOddNumber();
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

// Hàm nhập danh sách số nguyên
function inputNumberList() {
    let count = parseInt(prompt("Nhập số lượng số nguyên:")); // Nhập số lượng số nguyên
    for (let i = 0; i < count; i++) {
        let number = parseInt(prompt(`Nhập số nguyên thứ ${i + 1}:`)); // Nhập từng số nguyên
        numberList.push(number); // Thêm số vào danh sách
    }
    console.log("Danh sách số nguyên đã được nhập thành công."); // Thông báo hoàn thành
}

// Hàm tính trung bình các số
function calculateAverage() {
    if (numberList.length === 0) {
        console.log("Danh sách số nguyên trống."); // Thông báo nếu danh sách trống
    } else {
        let sum = numberList.reduce((total, num) => total + num, 0); // Tính tổng các số
        let average = sum / numberList.length; // Tính trung bình
        console.log(`Trung bình các số là: ${average.toFixed(2)}`); // Hiển thị kết quả
    }
}

// Hàm tìm số chẵn lớn nhất
function findLargestEvenNumber() {
    let evenNumbers = numberList.filter(num => num % 2 === 0); // Lọc các số chẵn
    if (evenNumbers.length === 0) {
        console.log("Không có số chẵn trong danh sách."); // Thông báo nếu không có số chẵn
    } else {
        let largestEven = Math.max(...evenNumbers); // Tìm số chẵn lớn nhất
        console.log(`Số chẵn lớn nhất là: ${largestEven}`); // Hiển thị kết quả
    }
}

// Hàm tìm số lẻ nhỏ nhất
function findSmallestOddNumber() {
    let oddNumbers = numberList.filter(num => num % 2 !== 0); // Lọc các số lẻ
    if (oddNumbers.length === 0) {
        console.log("Không có số lẻ trong danh sách."); // Thông báo nếu không có số lẻ
    } else {
        let smallestOdd = Math.min(...oddNumbers); // Tìm số lẻ nhỏ nhất
        console.log(`Số lẻ nhỏ nhất là: ${smallestOdd}`); // Hiển thị kết quả
    }
}

// Gọi hàm để chạy chương trình
numberProcessingMenu();