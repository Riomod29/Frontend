
// filter được sử dụng để lọc các sinh viên thỏa mãn điều kiện.
// Hàm callback trong filter trả về true nếu sinh viên có điểm trung bình >= 8.
// Sử dụng destructuring để lấy điểm Toán, Anh, Văn từ student.scores.
// Tính điểm trung bình bằng công thức:
// const average = (math + english + literature) / 3
// Sinh viên có điểm trung bình >= 8 sẽ được thêm vào danh sách topStudents.


let  students=[
    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature : 7 } },
    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature : 5} },
    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature : 9 } }
   ];

function filterTopStudents(student) {
    return student.filter(student => {
        const { math, english, literature } = student.scores;
        const average = (math + english +  literature) / 3;
        return average >= 8;
    });
}

const topStudents = filterTopStudents(students);
console.log("Danh sách sinh viên có điểm trung bình >= 8:", topStudents);

