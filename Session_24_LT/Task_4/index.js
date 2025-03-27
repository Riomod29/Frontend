let matrix = [];
let rows = 0;
let cols = 0;

function menu() {
    return parseInt(prompt(
        "1. Nhập mảng 2 chiều\n" +
        "2. Hiển thị mảng 2 chiều\n" +
        "3. Tính tổng các phần tử trong mảng\n" +
        "4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó\n" +
        "5. Tính trung bình cộng các phần tử của một hàng cụ thể\n" +
        "6. Đảo ngược các hàng trong mảng\n" +
        "7. Thoát chương trình\n" +
        "Vui lòng chọn một chức năng (1-7):"
    ));
}

function nhapMang() {
    matrix = [];
    rows = parseInt(prompt("Nhập số hàng:"));
    cols = parseInt(prompt("Nhập số cột:"));    
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            let value = parseInt(prompt(`Nhập phần tử thứ [${i}][${j}]:`));
            if (isNaN(value)) {
                alert("Vui lòng nhập số hợp lệ!");
                j--; // yêu cầu nhập lại nếu giá trị không hợp lệ
            } else {
                row.push(value);
            }
        }
        matrix.push(row);
    }
}

function hienThiMang() {
    if (matrix.length === 0) {
        alert("Mảng rỗng!");
    } else {
        let result = "Mảng 2 chiều:\n";
        for (let i = 0; i < rows; i++) {
            result += matrix[i].join(", ") + "\n";
        }
        alert(result);
    }
}

function tinhTong() {
    let sum = 0;
    if (matrix.length === 0) {
        alert("Mảng rỗng!");
    } else {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                sum += matrix[i][j];
            }
        }
        alert(`Tổng các phần tử trong mảng: ${sum}`);
    }
}

function timMax() {
    if (matrix.length === 0) {
        alert("Mảng rỗng!");
    } else {
        let max = matrix[0][0];
        let maxRow = 0;
        let maxCol = 0;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (matrix[i][j] > max) {
                    max = matrix[i][j];
                    maxRow = i;
                    maxCol = j;
                }
            }
        }
        alert(`Phần tử lớn nhất: ${max} ở vị trí [${maxRow}][${maxCol}]`);
    }
}

function tinhTrungBinh() {
    if (matrix.length === 0) {
        alert("Mảng rỗng!");
    } else {
        let row = parseInt(prompt("Nhập hàng cần tính trung bình cộng:"));
        if (isNaN(row) || row < 0 || row >= rows) {
            alert("Hàng không hợp lệ!");
            return;
        }
        let sum = 0;
        for (let j = 0; j < cols; j++) {
            sum += matrix[row][j];
        }
        let avg = sum / cols;
        alert(`Trung bình cộng của hàng ${row}: ${avg}`);
    }
}

function daoNguocMang() {
    if (matrix.length === 0) {
        alert("Mảng rỗng!");
    } else {
        matrix.reverse(); // Đảo ngược thứ tự các hàng trong mảng
        alert("Mảng đã được đảo ngược!");
    }
}

function main() {
    let choose;
    do {
        choose = menu();
        switch (choose) {
            case 1:
                nhapMang();
                break;
            case 2:
                hienThiMang();
                break;
            case 3:
                tinhTong();
                break;
            case 4:
                timMax();
                break;
            case 5:
                tinhTrungBinh();
                break;
            case 6:
                daoNguocMang();
                break;
            case 7:
                alert("Thoát chương trình!");
                return;
            default:
                alert("Vui lòng chọn chức năng từ 1-7!");
        }
    } while (choose !== 7);
}

main();