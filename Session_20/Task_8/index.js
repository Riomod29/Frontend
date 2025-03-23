let n = Number(prompt("Mời bạn nhập số lượng số nguyên tố cần in: "));
if (isNaN(n) || n <= 0) {
    alert("Vui lòng nhập một số nguyên dương.");
} else {
    let count = 0;
    let num = 2;
        console.log(`Danh sách ${n} số nguyên tố đầu tiên:`);
    while (count < n) {
        let isPrime = true;
            for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
        break;
        }
        }
            if (isPrime) {
            console.log(num);
            count++;
        }
        num++;
    }
}