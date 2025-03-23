let n = Number(prompt("Moi ban nhap so nguyen n: "));
console.log(`Tong cac so nguyen tu 1 - ${n} la: `);
if (isNaN(n)) {
    alert("So khong hop le");
} else {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    console.log(sum);
}
