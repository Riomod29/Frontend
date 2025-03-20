let money = parseInt(prompt("Nhập số tiền cần chuyển đổi: "));
let choice = parseInt(prompt("1. USD -> VND, 2. VND -> USD: "));
if (choice === 1) {
    let usd = money / 23000;
    console.log(`Số tiền sau khi chuyển đổi: ${usd.toFixed(2)} USD`);
} else {
    let vnd = money * 23000;
    console.log(`Số tiền sau khi chuyển đổi: ${vnd} VND`);
}