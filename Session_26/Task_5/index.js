const input = prompt("Nhập vào số nguyên") // "3,4,5,6,7, jj"
const arr = input.split(",") // ["3","4"]
let check = true

for (let i = 0; i < arr.length; i++){
    if (isNaN(arr[i])) {
        check = false
        console.log("Dữ liệu không hợp lệ")
        break
    } else {
        arr[i] = Number(arr[i])
    }
}

if (check) {
let maxNumber = arr[0]
let maxIndex = 0
for (let index in arr){
    if(arr[index] > maxNumber){
    maxNumber = arr[index]
    maxIndex = index
    }
    // console.log(index)   
}
console.log("max ", maxNumber)
console.log("position", maxIndex)
}