let students = [ // Tạo mảng students chứa danh sách sinh viên
    {
        id: 1,
        name: "Nguyễn Công Trứ"
    },
    {
        id: 2,
        name: "Trần Trung Kiên"
    }, {
        id: 3,
        name: "Lê Duy Đông"
    },
    {
        id: 4,
        name: "Nguyễn Văn Thái"
    },
    {
        id: 5,
        name: "Nguyễn Quang Sơn"
    },
    {
        id: 6,
        name: "Lê Công Thành"
    }
]

/* khởi tạo dữ liệu vào local */
if (!localStorage.getItem("students")) { // Kiểm tra xem localStorage có dữ liệu hay không
    localStorage.setItem("students", JSON.stringify(students)) // Nếu không có, lưu mảng students vào localStorage
} else { // Nếu có, lấy dữ liệu từ localStorage
    students = JSON.parse(localStorage.getItem("students")) // Chuyển đổi chuỗi JSON thành mảng students
}

function updateData() { // Cập nhật dữ liệu vào local
    localStorage.setItem("students", JSON.stringify(students)) // Chuyển đổi mảng students thành chuỗi JSON và lưu vào localStorage
}

let ulEL = document.querySelector("ul") // Tạo biến ulEL để lưu trữ phần tử ul trong HTML

function addStudent() { // Hàm thêm sinh viên mới
    let newStudent = { // Tạo đối tượng sinh viên mới
        id: Date.now(), // Sử dụng thời gian hiện tại làm mã số sinh viên
        // id: students.length + 1, // Hoặc sử dụng độ dài của mảng students cộng với 1 làm mã số sinh viên
        name: prompt("nhập tên") // Yêu cầu người dùng nhập tên sinh viên
    }

    students.push(newStudent) // Thêm sinh viên mới vào mảng students
    updateData()
    renderData()
}

function deleteStudent(index) { // Hàm xóa sinh viên
    students.splice(index, 1) // Xóa sinh viên tại vị trí index trong mảng students
    // students = students.filter((item, i) => i != index) // Hoặc sử dụng phương thức filter để tạo mảng mới không chứa sinh viên đã xóa
    renderData()
    updateData()
}

function editStudent(index) { // Hàm chỉnh sửa thông tin sinh viên
    students[index] = { // Tạo đối tượng sinh viên mới với thông tin đã chỉnh sửa
        id: prompt("nhập mã số mới", students[index].id), // Yêu cầu người dùng nhập mã số mới
        name: prompt("nhập mã số mới", students[index].name) // Yêu cầu người dùng nhập tên mới
    }
    renderData()
    updateData()
}


/* phân trang */
const urlParams = new URLSearchParams(window.location.search); // Lấy tham số từ URL
const targetPage = urlParams.get('page'); // Lấy giá trị tham số "page" từ URL

const maxItem = 2 // Số lượng sinh viên hiển thị trên mỗi trang
const countPage = Math.ceil(students.length / maxItem) // Tính số trang cần thiết dựa trên số lượng sinh viên và số lượng sinh viên hiển thị trên mỗi trang
let curPage = targetPage // Lấy trang hiện tại từ tham số URL, nếu không có thì mặc định là 1

let paginBoxEL = document.querySelector(".pagin_box") // Tạo biến paginBoxEL để lưu trữ phần tử chứa phân trang trong HTML

function renderPagin() { // Hàm để hiển thị phân trang
    let paginHtml = `` // Tạo biến paginHtml để lưu trữ HTML của phân trang

    for (let i = 1; i <= countPage; i++) { // Vòng lặp để tạo các nút phân trang
        paginHtml += ` 
            <button onclick="setPage(${i})" style="color: ${i == curPage ? "red" : ""}">${i}</button>
        `
    }


    paginBoxEL.innerHTML = `
        <button onclick="setPage(${curPage - 1})">pre</button>
            ${paginHtml}
        <button onclick="setPage(${curPage + 1})">next</button>
    `

}


function renderData() {

    let ulHTML = ``;

    let data = students.slice(curPage * maxItem - maxItem, curPage * maxItem)

    for (let i = 0; i < data.length; i++) {
        ulHTML += `
            <li>Name: 
            ${data[i].name}, Id: ${data[i].id}
            <button onclick="deleteStudent(${i})">delete</button>   
            <button onclick="editStudent(${i})">edit</button>
            </li>
        `
    }

    ulEL.innerHTML = ulHTML
}

function setPage(pageNumber) {
    if (pageNumber == 0) {
        pageNumber = 1
    }

    if (pageNumber > countPage) {
        pageNumber = countPage
    }

    curPage = pageNumber
    // window.location.href="http://127.0.0.1:5500/?page=" + curPage

    window.history.pushState({}, '', "http://127.0.0.1:5500/?page=" + curPage);
    renderData()
    renderPagin()
}

renderData()
renderPagin()

// cur*maxItem - maxItem





