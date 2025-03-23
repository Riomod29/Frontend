let a = Number(prompt("Moi ban nhap so a: "));
let b = Number(prompt("Moi ban nhap so b: "));
if(isNaN(a) || isNaN(b) || b < 0){
    alert("So khong hop le");
} else{
    let result = 1;
    for(let i = 1; i <= b; i++ ){
        result *= a;
    }
    console.log(`Luy thua bac ${b} cua ${a} la: ${result}`);
}