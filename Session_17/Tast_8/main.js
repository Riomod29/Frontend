// let Shortdate_1 = parseInt(prompt("Enter the first number: "));
// let Shortdate_2 = parseInt(prompt("Enter the first number: "));

// let firstDate = new Date(Shortdate_1);
// let secondDate = new Date(Shortdate_2);

// let diffTime = Math.abs(secondDate - firstDate);
// let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

// document.write(`The difference between two dates is ${diffDays} days`);


// let date1 = prompt("Enter the first date (YYYY-MM-DD):");
// let date2 = prompt("Enter the second date (YYYY-MM-DD):");

// let firstDate = new Date(date1);
// let secondDate = new Date(date2);

// let diffTime = Math.abs(secondDate - firstDate);
// let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); //

// document.write(`Khung thời gian trên cách nhau ${diffDays} days`);




let day3 = prompt("Nhập vào năm tháng ngày(YYYY-MM_DD");
let day4 = prompt("Tiếp tục nhập vào năm tháng ngày(YYYY-MM_DD");

let firstDay = new Date(day3);
let secondDay= new Date(day4);

document. write("Khoảng thời gian giữa 2 cột móc trên là: " +  Math.abs(secondDay - firstDay) / (1000 * 60 * 60 * 24) + " ngày");