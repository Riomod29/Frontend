let a = parseFloat(prompt('Enter a: '));
let b = parseFloat(prompt('Enter b: '));
let c = parseFloat(prompt('Enter c: '));

Number(d=(a+b+c)/3);

if(d>=8){
    console.log(`${d} Điểm loại giỏi`);
}
else if(d>=6.5){
    console.log(`${d} Điểm loại khá`);
}
else if(d>=5){
    console.log(`${d} Điểm loại trung bình`);
}
else{
    console.log(`${d} Điểm loại yếu`);
}