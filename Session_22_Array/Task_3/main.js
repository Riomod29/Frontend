let input = prompt("Nhập vào một dãy số: "); //Cho người dùng nhập vào
let numberArray = input.split(''); //
// Kiểm tra dãy số nhập vào có phải là dãy số không
if (numberArray.some(isNaN)) {
    alert("Dãy không hợp lệ");
};
// Đảo ngược dãy số
let reversedArray = numberArray.reverse();
alert(reversedArray.join(""));