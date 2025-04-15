let students = [
    {
        id: 1,
        name: "P"
    },
    {
        id: 2,
        name: "C"
    }, {
        id: 3,
        name: "P"
    },
    {
        id: 4,
        name: "C"
    },
    {
        id: 5,
        name: "P"
    },
    {
        id: 6,
        name: "C"
    }
]

/* khởi tạo dữ liệu vào local */
if (!localStorage.getItem("students")) {
    localStorage.setItem("students", JSON.stringify(students))
} else {
    students = JSON.parse(localStorage.getItem("students"))
}


function updateData() {
    localStorage.setItem("students", JSON.stringify(students))
}


let ulEL = document.querySelector("ul")

function addStudent() {
    let newStudent = {
        id: Date.now(),
        name: prompt("nhập tên")
    }

    students.push(newStudent)
    updateData()
    renderData()
}

function deleteStudent(index) {
    students.splice(index, 1)
    renderData()
    updateData()
}

function editStudent(index) {
    students[index] = {
        id: prompt("nhập mã số mới", students[index].id),
        name: prompt("nhập mã số mới", students[index].name)
    }
    renderData()
    updateData()
}


/* phân trang */
const urlParams = new URLSearchParams(window.location.search);
const targetPage = urlParams.get('page');

const maxItem = 2
const countPage = Math.ceil(students.length / maxItem)
let curPage = targetPage

let paginBoxEL = document.querySelector(".pagin_box")

function renderPagin() {
    let paginHtml = ``

    for (let i = 1; i <= countPage; i++) {
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





