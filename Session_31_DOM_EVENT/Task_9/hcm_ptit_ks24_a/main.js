// Khởi tạo danh sách công việc mặc định
let taskList = [
    {
        title: "Task 1",
        isDone: true
    },
    {
        title: "Task 2",
        isDone: false
    }
]

// Kiểm tra xem có dữ liệu trong localStorage không
// Nếu chưa có thì lưu danh sách mặc định, nếu có thì lấy dữ liệu đã lưu
if (!localStorage.getItem("taskList")) {
    localStorage.setItem("taskList", JSON.stringify(taskList))
}else {
    taskList = JSON.parse(localStorage.getItem("taskList"))
}

// Lấy các phần tử DOM cần thiết
const dataBoxEL = document.querySelector(".data_box")
const resultTextEL = document.querySelector(".result-text")

// Hiển thị danh sách công việc lên giao diện
function renderData() {
    let dataHTML = ``;
    let i = 0;
    // Sắp xếp công việc theo trạng thái hoàn thành và tạo HTML
    for (item of taskList.sort((a, b) =>{
        return a.isDone - b.isDone
    })) {
        dataHTML += `
            <div class="data_item">
                <div>
                    <input onchange="checkDone(event, ${i})" type="checkbox" ${item.isDone ? "checked disabled" : ""}/>
                    <span style="text-decoration: ${item.isDone ? "line-through" : "none"};">${item.title}</span>
                </div>
                <i onclick="deleteTask(${i})" class="fa-solid fa-trash"></i>
            </div>
        `
        i++;
    }

    dataBoxEL.innerHTML = dataHTML;
}

// Tính toán và hiển thị phần trăm hoàn thành
function renderResult() {
    let countDone = taskList.reduce((cur, next) => {
        return cur + (next.isDone ? 1 : 0)
    }, 0)

    resultTextEL.innerText = countDone == taskList.length ? "ĐÃ HOÀN THÀNH TẤT CẢ" : `ĐÃ HOÀN THÀNH ${Math.ceil(countDone * 100 / taskList.length)}%`
}

// Thêm công việc mới vào danh sách
function addTask() {
    let taskText = document.querySelector(".input_task_title").value.trim()

    // Kiểm tra input rỗng
    if (taskText == "") {
        alert("Vui lòng nhập tên công việc")
        return
    }

    // Kiểm tra công việc đã tồn tại chưa
    let taskExisted = taskList.find((taskItem) => {
        return taskItem.title.toLocaleLowerCase() == taskText.toLocaleLowerCase()
    })

    if (taskExisted) {
        alert("Công việc đã tồn tại")
        return
    }

    // Thêm công việc mới và xóa input
    taskList.push({
        title: taskText,
        isDone: false
    })

    document.querySelector(".input_task_title").value = ""

    // Lưu vào localStorage và cập nhật giao diện
    localStorage.setItem("taskList", JSON.stringify(taskList))
    reloadView()
}

// Xóa công việc theo index
function deleteTask(index) {
    taskList.splice(index, 1)

    // Lưu thay đổi và cập nhật giao diện
    localStorage.setItem("taskList", JSON.stringify(taskList))
    reloadView()
}

// Cập nhật lại toàn bộ giao diện
function reloadView() {
    renderData()
    renderResult()
}

// Đánh dấu công việc đã hoàn thành
function checkDone(e, index) {
    if (!e.target.checked) {
        return
    }

    taskList[index].isDone = true
    reloadView()

    // Lưu thay đổi vào localStorage
    localStorage.setItem("taskList", JSON.stringify(taskList))
}

// Khởi tạo giao diện lần đầu
reloadView()