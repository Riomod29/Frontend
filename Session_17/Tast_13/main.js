let coin_send = parseInt(prompt("Enter the amount of coins you want to send"));
let month_send = parseInt(prompt("Enter the month"));
const interest = (43/1000)/12;
let total = interest * coin_send * month_send;
document.write("Tổng số tiền bạn sẽ nhận được sau " + month_send + " tháng là: " + total.toLocaleString('vi-VN') + "VNĐ");