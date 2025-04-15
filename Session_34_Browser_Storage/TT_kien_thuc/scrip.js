// Session Storage

console.log(sessionStorage)

/*
// GET - Lấy dữ liệu nằm trong session Storage
console.log(sessionStorage.email); // "nct@gmail.com"
console.log(sessionStorage.password); // "123123"

// .getItem(); = Lấy dữ liệu trong session Storage
let email = sessionStorage.getItem("email"); //"nct@gmail.com"
console.log(email); */

/*
//CREATE - Thêm mới dữ lệu vào trong session Storage
sessionStorage.username = "nct123123";

// .setItem();
sessionStorage.setItem("dob", "29/5/2003"); //Thêm mới dữ liệu vào session Storage
*/

/*
//UPDATE - Cập nhật dữ liệu trong session Storage
sessionStorage.dob = "30/1/1995"; //Cập nhập lại data
sessionStorage.dob = "29/05/2003";
*/
/*
// DELETE - Xoá dữ liệu nằm trong session Storage
delete sessionStorage.dob; //xoá

sessionStorage.removeItem("username"); //xoá
*/

// =====================================================

sessionStorage.name = "Hello world";

console.log(sessionStorage.name); //"Hello world"

sessionStorage.age = 18;
console.log(sessionStorage.age); //18

sessionStorage.status = true;
console.log(sessionStorage.status);

// Dữ liệu được lưu trữ trong session storage được lưu dưới dạng
// JSON: JavaScipt Object Notation

sessionStorage.dobb = "31/1/1995";

let student = [
    {
        id: 1,
        name: "Nguyễn Công Trứ"
    },
    {
        id: 2,
        name: "Nguyễn Văn B"
    }
]

console.log(localStorage.test);