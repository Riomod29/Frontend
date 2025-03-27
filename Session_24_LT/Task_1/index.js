// function displayMenu(){
//     alert("1. Nhập mảng\n"
//     +"2. Hiển thị mảng\n"
//     +"3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng\n"
//     +"4. Tính tổng các phần tử trong mảng\n"
//     +"5. Tìm số lần xuất hiện của một phần tử trong mảng\n"
//     +"6. Sắp xếp mảng tăng dần\n"
//     +"7. Thoát chương trình\n")
// }
// let arr1 = []
// while(true){
//     displayMenu()
//     let n = parseInt(prompt("Nhập choice của bạn: "))

//     switch(n){
//         case 1:
//             let sizeOfArray = parseInt(prompt("Nhập sô lượng vào: "))
//             for (let i = 0; i < sizeOfArray; i++){
//                 arr1.push(Number(prompt("Nhập vào phần tử " +i)))  //+i nối chuỗi + vào i
//             }
//             break;
//         case 2:
//             alert(`Hiển thị nè: ${arr1}`)
//             break;
//         case 3:
//             let maxNumber = arr1[0]
//             let minNumber = arr1[0]
//         //Tìm phần tử lớn nhất
//             for (let i = 0; i < arr1.length; i++){
//                 if (arr1[i] > maxNumber){
//                     maxNumber = arr1[i]
//                 }
//             }
//             // Tìm phần tử nhỏ nhất
//             for (let i = 0; i < arr1.length; i++){
//                 if (arr1[i] < minNumber){
//                     minNumber = arr1[i]
//                 }
//             }
//             alert(`Phan tu lon nhat: ${maxNumber}, phan tu nho nhat la: ${minNumber}`)
//             break;
//         case 4:
//             let sum = 0
//             for (let i of arr1){
//                 sum += i //sum = sum + i
//             }
//             alert(`Tong cac phan tu trong mang la: ${sum}`)
//             break;
//         case 5:
//             let count = 0
//             let input = parseInt(prompt("Nhap vao so can check"))
//             for (let i = 0; i < arr1.length; i++){
//                 if(input == arr1[i]){
//                     count++
//                 }
//             }
//             alert(`Phan tu ${input} xuat hien ${count} lan`)
//             break;
//         case 6:
//                     for (let i = 0; i < arr1.length - 1; i++){
//                     for (let j = 0; j < arr1.length - 1 - i; j++){
                        
//                         if (arr1[j] > arr1[j + 1]) { //Ly nuoc
//                         let temp = arr1[j]
//                         arr1[j] = arr1[j + 1]
//                         arr1[j + 1] = temp
//                         }
//                     }
//                 }
//             alert(`Da sap xep xong ${arr1}`)
//             break;
//         case 7:
//             break;
//     }
//     if(n == 7){
//         break;
//     }
// }







function displayMenu (){
    alert("1. Nhập mảng\n"
        +"2. Hiển thị mảng\n"
        +"3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng\n"
        +"4. Tính tổng các phần tử trong mảng\n"
        +"5. Tìm số lần xuất hiện của một phần tử trong mảng\n"
        +"6. Sắp xếp mảng tăng dần\n"
        +"7. Thoát chương trình")
        }

let arr = []
let sizeOfArray = 0

while(true){
    displayMenu();
    let n = Number(prompt("Nhập chức năng"))
    if (n ==  7){
        break
    }
    switch(n){
            case 1:
            sizeOfArray = Number(prompt("Nhap so luong phan tu"))
            for (let i = 0; i < sizeOfArray; i++){
                arr[i] = Number(prompt("Nhap vao gia tri phan tu"))
            }
                break;
            case 2:
                    alert(`${arr}`)
                break;
            case 3:
                let maxNumber = arr[0]
                let minNumber = arr[0]

                for (let i = 0; i < sizeOfArray; i++){
                    if (arr[i] > maxNumber){
                        maxNumber = arr[i]
                    }
                }
                for (let i = 0; i < sizeOfArray; i++){
                    if (arr[i] < minNumber){
                        minNumber = arr[i]
                    }
                }
                alert(`Phan tu lon nhat la: ${maxNumber}, Phan tu nho nhat la: ${minNumber}`)
                        break;
            case 4:
                let sum = 0;
                for (let i = 0; i < sizeOfArray; i++){
                    sum += arr[i];
                }
                alert(`${sum}`)
                        break;
            case 5:
                let count = 0
                let input = Number(prompt("Nhap so can check"))
                for (let i = 0; i < sizeOfArray; i++){
                    if (input == arr[i]){
                        count ++
                    }
                }
                alert(`Phan tu xuat hien ${count} lan`)
                    break;
            case 6:
                let temp = 0
                    for (let i = 0; i < arr.length -1; i++) {
                    for (let j = 0; j < arr.length - 1 - i; j++) {
                        if (arr[j] > arr[j + 1]){
                            temp = arr[j]
                            arr[j] = arr[j + 1]
                            arr[j + 1] = temp
                        }
                    }
                }
                alert(`${arr}`)
                    break;
            case 7:
                break;
                }
            }