let str = prompt("Moi ban nhap mot chuoi: ")
let char = prompt("Moi ban nhap vao ki tu muon tim kiem: ");
if(str.includes(char)){
    console.log(`Ky tu "${char}" co trong chuoi ${str}`)
} else {
    console.log(`Ky tu "${char}" khong co trong chuoi ${str}`)
}