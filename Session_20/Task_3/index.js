let n = prompt("Moi ban nhap vao mot chuoi so nguyen:");
if (isNaN(Number(n))) {
    alert("So khong hop le");
} else {
    let reversed = n.split('').reverse().join(''); //split(''): tach chuoi thanh cac mang ky tu, join(''): ghep cac ky tu lai thanh chuoi
    if (n === reversed) {
        console.log("La so doi xung");
    } else {
        console.log("Khong phai la so doi xung");
    }
}