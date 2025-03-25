let input = prompt("Nhập vào một dãy số: "); //Cho người dùng nhập vào
let numberArray = input.split(''); //

if (numberArray.some(isNaN)) {
    alert("Dãy không hợp lệ");
};

let reversedArray = numberArray.reverse();
alert(reversedArray.join(""));