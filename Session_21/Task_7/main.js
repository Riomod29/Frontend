let money = Number(prompt("Tiền ban đầu"));
let ls = Number(prompt("Lãi suất"))/100; 
let month = Number(prompt("Số tháng"));

let a = money;
for (let i=0; i<month; i++){
    money += money*ls;
} 
let b = money - a;
console.log(money);
console.log(b);