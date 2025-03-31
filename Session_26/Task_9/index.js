function processArray(input) {
    if (!Array.isArray(input)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    if (input.length === 0) {
        console.log("Mảng không có dữ liệu");
        return;
    }

    const totalEven = input.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
    const totalOdd = input.filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);

    console.log(`totalEven = ${totalEven}`);
    console.log(`totalOdd = ${totalOdd}`);
}

// Test cases
processArray([1, 2, 3, 4, 5, 6, 7, 8, 9]); // totalEven = 20, totalOdd = 25
processArray([]); // Mảng không có dữ liệu
processArray("abc"); // Dữ liệu không hợp lệ