// Mô tả
// Xây dựng ứng dụng quản lý khóa học và người dùng đăng ký khóa học.

// Một đối tượng khóa học sẽ bao gồm các thuộc tính và giá trị:
// 	id: id khóa học,
// 	name: tên khóa học,
// 	instructor: giáo viên dạy,
// 	students: [] ( danh sách người dùng đăng ký khóa học)

// Một đối tượng người dùng sẽ bao gồm các thuộc tính và giá trị:
// 	id: id người dùng,
// 	name: tên người dùng,
// 	registeredCourses: [] (danh sách khóa học user đã đăng ký học)

// Ứng dụng sẽ gồm các chức năng:
// Quản lý khóa học.
// Thêm khóa học.
// Tìm kiếm khóa học theo tên.
// Xóa khóa học.
// Khi xóa khóa học thì phải xóa tất cả id khóa học khỏi danh sách registeredCourses người dùng đã đăng ký.
// Thoát.
// Quản lý người dùng.
// Thêm người dùng mới.
// Đăng ký khóa học.
// Hủy đăng ký khóa học.
// Hiển thị danh sách khóa học của một người dùng.
// Thoát.

// Quản lý khóa học và người dùng đăng ký khóa học

let courses = []; // Danh sách khóa học
let users = [];   // Danh sách người dùng

function addCourse() {
    let id = +prompt("Nhập ID khóa học:");
    let name = prompt("Nhập tên khóa học:");
    let instructor = prompt("Nhập tên giáo viên:");
    courses.push({ id, name, instructor, students: [] });
    console.log(`Khóa học "${name}" đã được thêm thành công.`);
}
function searchCourseByName() {
    let searchName = prompt("Nhập tên khóa học cần tìm:");
    let foundCourses = courses.filter(course => course.name.toLowerCase().includes(searchName.toLowerCase()));
    if (foundCourses.length > 0) {
        console.log("Kết quả tìm kiếm:");
        foundCourses.forEach(course => {
            console.log(`ID: ${course.id}, Tên: ${course.name}, Giáo viên: ${course.instructor}`);
        });
    } else {
        console.log("Không tìm thấy khóa học nào.");
    }
}
function deleteCourse() {
    let courseId = +prompt("Nhập ID khóa học cần xóa:");
    let courseIndex = courses.findIndex(course => course.id === courseId);

    if (courseIndex !== -1) {
        courses.splice(courseIndex, 1);
        users.forEach(user => {
            user.registeredCourses = user.registeredCourses.filter(id => id !== courseId);
        });
        console.log(`Khóa học với ID ${courseId} đã được xóa.`);
    } else {
        console.log("Không tìm thấy khóa học với ID này.");
    }
}
function addUser() {
    let id = +prompt("Nhập ID người dùng:");
    let name = prompt("Nhập tên người dùng:");
    users.push({ id, name, registeredCourses: [] });
    console.log(`Người dùng "${name}" đã được thêm thành công.`);
}
function registerCourse() {
    let userId = +prompt("Nhập ID người dùng:");
    let courseId = +prompt("Nhập ID khóa học cần đăng ký:");

    let user = users.find(user => user.id === userId);
    let course = courses.find(course => course.id === courseId);

    if (user && course) {
        if (!user.registeredCourses.includes(courseId)) {
            user.registeredCourses.push(courseId);
            course.students.push(userId);
            console.log(`Người dùng "${user.name}" đã đăng ký khóa học "${course.name}".`);
        } else {
            console.log("Người dùng đã đăng ký khóa học này.");
        }
    } else {
        console.log("Người dùng hoặc khóa học không tồn tại.");
    }
}
function unregisterCourse() {
    let userId = +prompt("Nhập ID người dùng:");
    let courseId = +prompt("Nhập ID khóa học cần hủy đăng ký:");

    let user = users.find(user => user.id === userId);
    let course = courses.find(course => course.id === courseId);

    if (user && course) {
        user.registeredCourses = user.registeredCourses.filter(id => id !== courseId);
        course.students = course.students.filter(id => id !== userId);
        console.log(`Người dùng "${user.name}" đã hủy đăng ký khóa học "${course.name}".`);
    } else {
        console.log("Người dùng hoặc khóa học không tồn tại.");
    }
}
function displayUserCourses() {
    let userId = +prompt("Nhập ID người dùng:");
    let user = users.find(user => user.id === userId);

    if (user) {
        if (user.registeredCourses.length > 0) {
            console.log(`Danh sách khóa học của người dùng "${user.name}":`);
            user.registeredCourses.forEach(courseId => {
                let course = courses.find(course => course.id === courseId);
                console.log(`- ID: ${course.id}, Tên: ${course.name}, Giáo viên: ${course.instructor}`);
            });
        } else {
            console.log("Người dùng chưa đăng ký khóa học nào.");
        }
    } else {
        console.log("Không tìm thấy người dùng với ID này.");
    }
}

function menu() {
    let choice;
    do {
        choice = +prompt(
            "-----------------------------------------------------\n" +
            "1. Quản lý khóa học\n" +
            "   1.1. Thêm khóa học\n" +
            "   1.2. Tìm kiếm khóa học theo tên\n" +
            "   1.3. Xóa khóa học\n" +
            "2. Quản lý người dùng\n" +
            "   2.1. Thêm người dùng mới\n" +
            "   2.2. Đăng ký khóa học\n" +
            "   2.3. Hủy đăng ký khóa học\n" +
            "   2.4. Hiển thị danh sách khóa học của một người dùng\n" +
            "3. Thoát\n" +
            "-----------------------------------------------------"
        );

        switch (choice) {
            case 1:
                let courseChoice = +prompt("1.1. Thêm khóa học\n1.2. Tìm kiếm khóa học theo tên\n1.3. Xóa khóa học\n");
                if (courseChoice === 1) addCourse();
                else if (courseChoice === 2) searchCourseByName();
                else if (courseChoice === 3) deleteCourse();
                break;
            case 2:
                let userChoice = +prompt(
                    "2.1. Thêm người dùng mới\n2.2. Đăng ký khóa học\n2.3. Hủy đăng ký khóa học\n2.4. Hiển thị danh sách khóa học của một người dùng\n"
                );
                if (userChoice === 1) addUser();
                else if (userChoice === 2) registerCourse();
                else if (userChoice === 3) unregisterCourse();
                else if (userChoice === 4) displayUserCourses();
                break;
            case 3:
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ.");
        }
    } while (choice !== 3);
}

// Chạy chương trình
menu();