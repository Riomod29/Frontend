// Nhập vào 5 số nguyên từ bàn phím và tính tổng của chúng.
// let a = Number(prompt("Enter a number: "));
// let b = Number(prompt("Enter b number: "));
// let c = Number(prompt("Enter c number: "));
// let d = Number(prompt("Enter d number: "));
// let e = Number(prompt("Enter e number: "));
// Tính tổng các số lẻ
// let sum = 0; // Khởi tạo biến tổng
// if (a % 2 !== 0) { // Nếu a là số lẻ
//     sum += a; // Cộng a vào tổng
// }
// if (b % 2 !== 0) {
//     sum += b;
// }
// if (c % 2 !== 0) {
//     sum += c;
// }
// if (d % 2 !== 0) {
//     sum += d;
// }
// if (e % 2 !== 0) {
//     sum += e;
// }
// console.log(`Tổng các số lẻ là: ${sum}`);

let sum = 0;
let number;
for (let i = 0; i < 5; i++) {
    number = parseInt(prompt("Nhập số nguyên: "));
    if (number % 2 !== 0) {
        sum += number;
    }
}
alert(`Tổng các số lẻ là: ${sum}`);