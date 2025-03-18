let n = parseInt(prompt("Enter a number"));
// Convert n có phải là số chính phương không
let sqrt = Math.sqrt(n);
// Kiểm tra sqrt có phải là số nguyên không
// Nếu sqrt là số nguyên thì n là số chính phương   
let status = Number.isInteger(sqrt) ? "Là số chính phương" : "Không phải số chính phương";
console.log(status);