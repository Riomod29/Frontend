/* splice(index bắt đầu, index xóa, "add1", "add2", ...) => Thêm phần tử vào mảng
// Ta sẽ tạo một mảng menu gồm 4 phần tử
// Sau đó sử dụng phương thức splice để thêm 2 phần tử vào mảng menu
let menu = [
    "gà", //index 0
    "vịt", //1
    "Chó", //2
    "Mèo", //3
];
//splice(index, index xóa, "add1, add2, ...");
menu.splice(4, 2, "Chim", "Cá");
// Kết quả: ["gà", "vịt", "Chó", "Mèo", "Chim", "Cá"]
console.log(menu);
*/

/* cconcat(array1, array2, ...) => Nối mảng
let newMenu = [
    "Hổ",
    "Sư tử",
    "Cọp",
    "Beo",
];
// concat(array1, array2, ...)
let concatMenu = menu.concat(newMenu); //[array1 + array2]
// Kết quả: ["gà", "vịt", "Chó", "Mèo", "Hổ", "Sư tử", "Cọp", "Beo"];
console.log(concatMenu);
*/

/* indexOf("element") => Lấy địa chỉ của index
let newMenu = [
    "Hổ",
    "Sư tử",
    "Cọp",
    "Beo",
];
let index = menu.indexOf("Ngựa");// indexOf = Lấy địa chỉ của index
console.log(index); // -1

includes("element") => true/false = Kiểm tra tồn tại trong mảng
let isInmenu = menu.includes("gà"); // true
console.log(isInmenu);
*/
//reverse() => Đảo ngược phần tử trong mảng


/* split; join
let randomString = "Hello World";

    // split("") => tách chuỗi thành mảng
    let randomStringLetters = randomString.split(" "); // ["Hello", "World"]
    let randomStringLetters = randomString.split(""); // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
        console.log(randomStringLetters);

    // join("") => nối các phần tử trong mảng với nhau
    let joinString = randomStringLetters.join(""); // "Hello World"
        console.log(joinString);
*/


let menu = [
    "Cá",
    "Bò",
    "Trâu",
    "Heo",
];
for (let i = 0; i <=menu.length -1; i = i + 1) {
    console.log(menu[i]);
}
for (let index in menu) {
    console.log(menu[index]);
}

for (let element of menu) {
    console.log(element);
}

