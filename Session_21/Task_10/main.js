let n = parseInt(prompt("Nhập vào số nguyên tố đê"));
let count=0;
let number=2;

while (count < n){ 
    let status = true;
    for (let i = 2; i<=Math.sqrt(number); i++){
        if (number % i === 0) {
        status = false;
        break;
        }
    }
    if (status) {
        console.log(`${number} là số nguyên tố thứ ${count + 1}`);
        count++;
    } 
    number++;
}
