var a;
// Lấy giá trị từ người dùng
a = prompt("Nhập vào số a", "0");
 
// Chuyển sang kiểu number
a = parseInt(a);
 
// Kiểm tra số chẵn và lẽ
if (a % 2 == 0){
    document.write(a + " là số chẵn");
}
else{
    document.write(a + " là số lẽ");
}