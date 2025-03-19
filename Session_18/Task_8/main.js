let a = parseFloat(prompt("Nhập độ dài cạnh thứ nhất:"));
let b = parseFloat(prompt("Nhập độ dài cạnh thứ hai:"));
let c = parseFloat(prompt("Nhập độ dài cạnh thứ ba:"));

// Kiểm tra tam giác hợp lệ
if (a + b > c && a + c > b && b + c > a) {
    console.log("Đây là một tam giác hợp lệ.");

    // Kiểm tra loại tam giác
    if (a === b && b === c) {
        console.log("Đây là tam giác đều.");
    } else if (a === b || b === c || a === c) {
        console.log("Đây là tam giác cân.");
    } else if (
        a * a + b * b === c * c ||
        a * a + c * c === b * b ||
        b * b + c * c === a * a
    ) {
        console.log("Đây là tam giác vuông.");
    } else {
        console.log("Đây là tam giác thường.");
    }
} else {
    console.log("Ba cạnh không tạo thành một tam giác hợp lệ.");
}