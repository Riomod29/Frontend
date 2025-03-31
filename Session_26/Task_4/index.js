// const input = prompt("Nhập vào số nguyên") // "3,4,5,6,7, jj"
// const arr = input.split(",") // ["3","4"]
// let check = true

// for (let i = 0; i < arr.length; i++){
//     if (isNaN(arr[i])) {
//         check = false
//         console.log("Dữ liệu không hợp lệ")
//         break
//     } else {
//         arr[i] = Number(arr[i])
//     }
// }



const input = prompt("Nhập vào số nguyên (cách nhau bởi dấu phẩy)").trim(); 

if (input === "") {
    console.log("Mảng không có phần tử nào");
} else {
    const arr = input.split(",").map(item => item.trim()); 
    let check = true;
    let numberArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i]) || arr[i] === "") { 
            check = false;
            console.log("Dữ liệu không hợp lệ");
            break;
        } else {
            numberArray.push(Number(arr[i]));
        }
    }

    if (check) {
        // Lọc số nguyên tố
        const isPrime = num => {
            if (num < 2) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false;
            }
            return true;
        };

        const primeNumbers = numberArray.filter(isPrime);
        console.log(primeNumbers.length > 0 ? primeNumbers : "Không có số nguyên tố nào");
    }
}
