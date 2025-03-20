let a = parseInt(prompt("Enter a number: "));
let b = parseInt(prompt("Enter a number: "));
let c = parseInt(prompt("Enter a number: "));

let max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
alert("Số lớn nhất trong 3 số là: " + max);