let arr = [];

function menu() {
    return Number(prompt(
        "Menu:\n" +
        "1. Nhập mảng\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm phần tử chẵn và lẻ\n" +
        "4. Tính Trung Bình Cộng Của Mảng\n" +
        "5. Xóa Phần Tử Tại Vị Trí Chỉ Định \n" +
        "6. Tìm Phần Tử Lớn Thứ Hai Trong Mảng\n" +
        "7. Thoát chương trình\n" +
        "Vui lòng chọn một chức năng (1-7):"
    ));
}

function nhapMang() {
    let n = parseInt(prompt("Nhập Số Phần Tử Của Mảng:"));
    if (isNaN(n) || n <= 0) {
        alert("Vui lòng nhập một số nguyên dương!");
        return;
    } else {
        arr = [];
        for (let i = 0; i < n; i++) {
            let x = parseInt(prompt("Nhập Phần Tử Thứ " + (i + 1) + " :"));
            if (isNaN(x)) {
                alert("Vui lòng nhập một số nguyên hợp lệ!");
                i--;
            } else {
                arr.push(x);
            }
        }
    }
}

function hienThiMang() {
    if (arr.length === 0) {
        alert("Mảng rỗng!");
    } else {
        alert("Mảng: " + arr.join(", "));
    }
}

function timchanle() {
    if (arr.length === 0) {
        alert("Mảng Rỗng");
    } else {
        let chan = [];
        let le = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                chan.push(arr[i]);
            } else {
                le.push(arr[i]);
            }
        }
        alert("Các Phần Tử Chẵn: " + chan.join(", ") + "\nCác Phần Tử Lẻ: " + le.join(", "));
    }
}

function tinhTrungBinhCong() {
    if (arr.length === 0) {
        alert("Mảng Rỗng ");
        return;
    } else {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        let trungbinh = sum / arr.length;
        alert("Trung Bình Cộng Của Mảng: " + trungbinh);
    }
}

function xoaPhantu() {
    let n = parseInt(prompt("Nhập Vị Trí Cần Xóa:"));
    if (isNaN(n) || n < 0 || n >= arr.length) {
        alert("Vị Trí Không Hợp Lệ! Vui lòng nhập số nguyên hợp lệ.");
    } else {
        arr.splice(n, 1);
        alert("Xóa Thành Công!");
    }
}

function timphantulonthuhai() {
    if (arr.length === 0) {
        alert("Mảng Rỗng");
        return;
    } else {
        let max = arr[0];
        let max2 = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max2 = max;
                max = arr[i];
            } else if (arr[i] > max2 && arr[i] < max) {
                max2 = arr[i];
            }
        }
        if (max2 === max) {
            alert("Không có phần tử lớn thứ hai trong mảng!");
        } else {
            alert("Phần Tử Lớn Thứ Hai Trong Mảng: " + max2);
        }
    }
}

function main() {
    do {
        let choose = menu();
        switch (choose) {
            case 1:
                nhapMang();
                break;
            case 2:
                hienThiMang();
                break;
            case 3:
                timchanle();
                break;
            case 4:
                tinhTrungBinhCong();
                break;
            case 5:
                xoaPhantu();
                break;
            case 6:
                timphantulonthuhai();
                break;
            case 7:
                alert("Thoát Chương Trình");
                return;
        }
    } while (choose != 7);
}

main();