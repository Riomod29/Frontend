let matrix =[];
let rows = 0;
let cols = 0;

function menu(){
    return Number(prompt(
        "1.Nhập mảng Hai Chiều\n"+
        "2.Hiển Thị Mảng Hai Chiều\n"+
        "3.Tính Tổng Các Phần Tử Trong Mảng Hai Chiều\n"+
        "4.Tính Tổng Đường Chéo Chính\n"+
        "5.Tính Tổng Đường Chéo Phụ\n"+
        "6.Tính trung Bình Cộng Của Hột Hàng Hay Một Cột Do Người Dùng Chọn\n"+
        "7.Thoát Chương Trình"+
        "Vui lòng chọn một chức năng (1-7):"));
}

function nhapmang(){
    matrix =[];
    rows = parseInt(prompt("Nhập Số Hàng"));
    cols = parseInt(prompt("Nhập Số Cột"));
    for(let i=0;i<rows;i++){
        let row=[];
        for(let j=0;j<cols;j++){
            let value = parseInt(prompt("Nhập Phần Tử Thứ ["+i+"]["+j+"] :"));
            if(isNaN(value)){
                alert("Vui lòng nhập số hợp lệ!");
                j--;
            }
            else{
                row.push(value);
            }
        }
        matrix.push(row);
    }
}

function hienThiMang(){
    if(matrix.length ===0){
        alert("Mảng rỗng!");
        return;
    }
    else{
        let result ="Mảng:\n";
        for(let i=0;i<rows;i++){
            result += matrix[i].join(", ") + "\n";
        }
        alert(result);
    }
}