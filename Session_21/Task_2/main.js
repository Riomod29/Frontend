let number = 0;
let sochan = 0;
let sole =0;
for (let i=0; i<5; i++){
    number = parseInt(prompt("Nhập số nguyên: "));
    if (number % 2 !== 0){
        sole++;
    } else {
        sochan++;
    }
}
alert('Tổng số lẻ là ' + sole + ', tổng số chẵn là ' + sochan);
// alert(`Tổng số lẻ là ${sole}, tổng số chẵn là ${sochan}`);