// Dữ liệu mẫu
let todoList = [
    { id: 1, task: 'Quét nhà', completed: false },
    { id: 2, task: 'Giặt quần áo', completed: true },
    { id: 3, task: 'Học lập trình', completed: false },
    { id: 4, task: 'Nấu ăn', completed: false },
];

// Lấy các phần tử DOM
const todoListElement = document.getElementById('todoList');
const addBtn = document.getElementById('addBtn');
const newTaskInput = document.getElementById('newTask');
const errorMessage = document.getElementById('errorMessage');
const progressElement = document.getElementById('progress');

// Hàm hiển thị danh sách công việc
function renderTodoList() {
    todoListElement.innerHTML = ''; // Xóa nội dung cũ
    todoList.forEach((item) => {
        const li = document.createElement('li');
        li.className = item.completed ? 'checked' : '';

        // Checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = item.completed;
        checkbox.addEventListener('click', () => toggleTask(item.id));

        // Nội dung công việc
        const taskText = document.createElement('span');
        taskText.textContent = item.task;

        // Nút xóa
        const closeBtn = document.createElement('i');
        closeBtn.className = 'fa-solid fa-trash';
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Ngăn sự kiện click vào li
            deleteTask(item.id);
        });

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(closeBtn);
        todoListElement.appendChild(li);
    });

    updateProgress();
}

// Hàm thêm công việc mới
function addTask() {
    const task = newTaskInput.value.trim();
    if (task) {
        todoList.push({ id: Date.now(), task, completed: false });
        newTaskInput.value = ''; // Xóa nội dung ô input
        errorMessage.style.display = 'none';
        renderTodoList();
    } else {
        errorMessage.textContent = 'Tên công việc không được phép để trống.';
        errorMessage.style.display = 'block';
    }
}

// Hàm xóa công việc
function deleteTask(id) {
    todoList = todoList.filter((item) => item.id !== id);
    renderTodoList();
}

// Hàm đánh dấu hoàn thành công việc
function toggleTask(id) {
    const task = todoList.find((item) => item.id === id);
    if (task) {
        task.completed = !task.completed;
        renderTodoList();
    }
}

// Hàm cập nhật tiến độ
function updateProgress() {
    const completedTasks = todoList.filter((item) => item.completed).length;
    const totalTasks = todoList.length;
    const progress = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
    progressElement.textContent = `Tiến độ hoàn thành: ${progress}%`;
}

// Gắn sự kiện cho nút "Thêm"
addBtn.addEventListener('click', addTask);

// Hiển thị danh sách công việc ban đầu
renderTodoList();