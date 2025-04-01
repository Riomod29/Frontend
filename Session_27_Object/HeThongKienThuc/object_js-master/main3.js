let student = {
    id: 1,
    name: "John",
    age: 20
}

// let student2 = {
//     id: 1,
//     name: "John",
//     age: 20,
//     sex: true
// }

// let student2 = student;
// student2.sex = true;

let student2 = {
    ...student, // spred (ES6)
    sex: true
}

let {id, name} = student; // destructuring (ES6)



// console.log("giá trị id là: ", student.id);

// console.log("giá trị id là: ", student["id"]);


// console.log("giá trị id là: ", id);

// console.log("giá trị name là: ", name);


let numberA = ["a","b",100, () => {
    alert("Xin chào Mọi người")
}]


let [phanTuThu1, phanTuThu2, phanTuThu3, xinchao] = numberA;

console.log("giá trị phanTuThu1 là: ", phanTuThu1); // numberA[0]

console.log("giá trị phanTuThu2 là: ", phanTuThu2);

console.log("giá trị phanTuThu3 là: ", phanTuThu3);

xinchao()