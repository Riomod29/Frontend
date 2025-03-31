// Bước 1: Nhập dữ liệu từ người dùng
let arrNew = [];
for (let i = 0; i < 10; i++) {
    let input = prompt(`Nhập phần tử thứ ${i + 1}:`);
    arrNew.push(input);
}

// Bước 2: Kiểm tra tính hợp lệ
let isValid = true;
for (let i = 0; i < arrNew.length; i++) {
    if (isNaN(arrNew[i]) || arrNew[i] === "") {
        isValid = false;
        break;
    }
}

if (!isValid) {
    console.log("Dữ liệu không hợp lệ");
} else {
    // Chuyển các phần tử sang kiểu số
    arrNew = arrNew.map(Number);

    // Bước 3: Lọc các số lớn hơn hoặc bằng 10
    let filteredArr = arrNew.filter(num => num >= 10);

    // Bước 4: Hiển thị kết quả
    if (filteredArr.length === 0) {
        console.log("Mảng không có phần tử nào");
    } else {
        console.log(`Các số lớn hơn hoặc bằng 10: [${filteredArr.join(", ")}]`);
    }
}



// let n = prompt("Nhập vào số lượng");
// let arrNew = []

// let arrMin = []
// for (let i = 0; i < n; i++){
//     let input = prompt("Nhập các phần tử: ")
//     arrNew.push(input)
// } 



// // function isNumber(arrNew){
// //     for (let i = 0; i < n; i++){
// //         if (isNaN(arrNew[i])){
// //             return true;
// //         }
// //         return false;
// //     }
// // }
// // if (!isNumber(arrNew)){
// //     console.log("Mang k co phan tu nao")
// // }


// for(let i = 0; i < arrNew.length; i++){
//     if(isNaN(arrNew[i])){
//         console.log("Mang khong hop le")
//     }
// }
// let minValue = arrNew[0]
// for(let i = 0; i < arrNew.length; i++){
//     if(arrNew[i] < minValue){
//         minValue = arrNew[i]
//     }
// }
// console.log(`Phần tử nhỏ nhất là ${minValue}`)