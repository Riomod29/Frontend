let n = Number(prompt("Enter a number:"));
for (i = 1; i <= n; i++) {
    if (n % i === 0) {
        console.log(`${i} là ước của ${n}`);
    }
}