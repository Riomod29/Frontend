let rectangle = {
    with: 10,
    height: 5,

    getArea: function() {
        return this.with * this.height;
    }
};
console.log("Diện tích hình chữ nhật là: ", rectangle.getArea());

// let rectangle = {
//     width: 10,
//     height: 5,
    
//     // Phương thức tính diện tích
//     getArea: function() {
//         return this.width * this.height;    
//     }
// };

// console.log("Diện tích hình chữ nhật là: ", rectangle.getArea());
