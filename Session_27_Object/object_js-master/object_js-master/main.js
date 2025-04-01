console.log("Hello World!");

let studentA = {
    studentCode: "PTIT_HCM_10000",
    studentName: "Nguyen Van A",
    studentAge: 20,
    studentGender: "Male"
}

let studentB = {
    studentCode: "PTIT_HCM_10000",
    studentName: "Nguyen Van A",
    studentAge: 20,
    "student Gender": true,
    parent: {
        parentName: "Nguyen Van A",
        parentAge: 50,
        parentGender: "Male"
    },
    certificate: [
        "Toeic",
        "IElst"
    ]
}
studentB.parent
studentB.studentCode
studentB["student Gender"]

// let numbers = [1,2,3,4]
// numbers[0]
// numbers.length

// let numberObject = {
//     "1": 1,
//     "2": 2,
//     "3": 3,
//     "4": 4,
//     length: 4,
//     push: function(value) {
//         this.length++;
//         numberObject[this.length] = value;
//     },
//     pop: function() {
//         let result = this[this.length];
//         delete this[this.length];
//         this.length--;
//         return result;
//     }
// }
// numberObject["1"]
// numberObject.length

// let numbers1 = new Array(``)

// let studentB = new Object();
// studentB.studentCode = "PTIT_HCM_10001";
// studentB.studentName = "Nguyen Van B";
// studentB.studentAge = 21;


// function StudentObject(studentCode, studentName, studentAge, studentGender) {
//     this.studentCode = studentCode;
//     this.studentName = studentName;
//     this.studentAge = studentAge; 
//     this.studentGender = studentGender;
// }

// let studentC = new StudentObject("PTIT_HCM_10002", "Nguyen Van C", 22, "Male");

// class Student {
//     studentCode;
//     studentName;
//     studentAge;
//     studentGender;

//     constructor(studentCode, studentName, studentAge, studentGender) {
//         this.studentCode = studentCode;
//         this.studentName = studentName;
//         this.studentAge = studentAge;
//         this.studentGender = studentGender;
//     }


//     go() {
//         console.log("Go to school");
//     }
// }

// let studentD = new Student("PTIT_HCM_10002", "Nguyen Van C", 22, "Male");