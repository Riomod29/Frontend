let coin = parseInt(prompt("Enter the coin value: "));
console.log("The coin value is: " + coin);
document.write("The coin value is: " + coin.toLocaleString('vi-VN') + "VNĐ");


// const formatter = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
//     minimumFractionDigits: 2
//   })
   
//   // "$1,000.00"
//   formatter.format(1000);
   
//   // "$10.00"
//   formatter.format(10);
   
//   // "$1,234,567,890.00"
//   formatter.format(1234567890);
  