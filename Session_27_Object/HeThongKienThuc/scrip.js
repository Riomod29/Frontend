let person = {
    name: "Rio",
    age: 22,
    homeTown: "Hồ Chí Minh",
    job: "Lập trình viên DEV",
    single: true,
    hobbies: ["Listening to music, movie, video game", "Travel and Chill"],
    sayHi: function () {
        console.log ("Hello everyone");
    },
};

// // ============================================================
// //Truy xuất các thuộc tính bà phương thức => Dot notation (.)
// person.name //Bước 1
// console.log(person.name); //Bước 2 in ra Rio

// console.log(person.hobbies); //["Listening to music, movie, video game", "Travel and Chill"]

// console.log(person.sayHi);
// // ƒ () {
// //     console.log ("Hello everyone");
// // }

// person.sayHi(); //Hello everyone
// // ====================================================

// Bracket nonation ([])
// Dot nonation (.)

for (let key in person) {
    console.log(person[key]);
}
//Lần lặp 1: Duyệt qua name: person[key] === person["name"] === person.name
//Lần lặp 1: Duyệt qua age: person[key] === person["age"] === person.age

person.weight = "70kg"; //Thêm vào
person.height = "172cm"; //add vào

person.job = "DJ" //Update

delete person.job; //Xóa job

person.introduce = function () {
    console.log("Xin chào, tôi tên lả Rio");
}
 console.log (person);

    // ======================================================
let studentList = {
    {
        id: 1,
        name: "Tru",
        age: 18,
    },
    {
        id: 2,
        name: "Rio",
        age: 22,
    },
    {
        id: 3,
        name: "Hòa Minz",
        age: 80,
    },
}

console.log(studentList[0].id);
console.log(studentList[0].name);
console.log(studentList[0].age);
