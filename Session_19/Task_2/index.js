let insert = prompt("Nhập vào một ký tự bất kỳ: ");
if (/^[a-zA-Z]$/.test(insert)) {
    alert("Đây là một chữ cái.");
} else {
    alert("Đây không phải là một chữ cái.");
}
