let n = Number(prompt("Nhap so luon so fibonacci can in: "));

if (isNaN(n) || n <= 0) {
    console.log("Nhap mot so nguyen duong");
} else {
    let a = 0, b = 1, temp;

    console.log(`${n} so fibonacci dau tien: `);
    for (let i = 0; i < n; i++) {
        console.log(a);
        temp = a + b;
        a = b;
        b = temp;
    }
}