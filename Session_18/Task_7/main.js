let a = parseFloat(prompt("Nhập số thứ nhất (a):"));
let b = parseFloat(prompt("Nhập số thứ hai (b):"));
let operator = prompt("Nhập phép tính (+, -, *, /):");

let result;

switch (operator) {
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * b;
        break;
    case "/":
        if (b !== 0) {
            result = a / b;
        } else {
            result = "Không thể chia cho 0";
        }
        break;
    default:
        result = "Phép tính không hợp lệ";
}

alert(`Kết quả: ${result}`);