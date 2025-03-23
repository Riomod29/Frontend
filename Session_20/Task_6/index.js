let n = Number(prompt("Moi ban nhap vao mot so: "));
if (isNaN(n) || n <= 1) {
    alert("Vui long nhap so lon hon 1");
    } else {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
        isPrime = false;
        break;
        }
    }
    if (isPrime) {
        console.log(`${n} la so nguyen to`);
    } else {
        console.log(`${n} khong phai la so nguyen to`);
    }
    }