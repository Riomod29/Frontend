// Function Declaration
let a = Number(prompt("Enter a number:"));
let b = Number(prompt("Enter b number:"));
let c = Number(prompt("Enter c number:"));
// Tính delta
let delta = (b ** 2) - 4 * a * c;
// Kiểm tra delta
if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    alert(`Phương trình có 2 nghiệm phân biệt: x1 = ${x1} và x2 = ${x2}`);
} else if (delta === 0) {
    let x = -b / (2 * a);
    alert(`Phương trình có nghiệm kép: x = ${x}`);
} else {
    alert("Phương trình vô nghiệm");
}