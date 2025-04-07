// Dữ liệu mẫu
let todoList = [
    { id: 1, task: 'Hit the gym', completed: false },
    { id: 2, task: 'Pay bills', completed: true },
    { id: 3, task: 'Meet George', completed: false },
    { id: 4, task: 'Buy eggs', completed: false },
    { id: 5, task: 'Read a book', completed: false },
    { id: 6, task: 'Organize office', completed: false },
];

// Lấy các phần tử DOM
const todoListElement = document.getElementById('todoList');
const addBtn = document.getElementById('addBtn');
const newTaskInput = document.getElementById('newTask');

// Hàm hiển thị danh sách công việc
function renderTodoList() {
    todoListElement.innerHTML = ''; // Xóa nội dung cũ
    todoList.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item.task;
        li.className = item.completed ? 'checked' : '';
        li.addEventListener('click', () => toggleTask(item.id));

        // Nút xóa
        const closeBtn = document.createElement('span');
        closeBtn.textContent = '×';
        closeBtn.className = 'close';
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Ngăn sự kiện click vào li
            deleteTask(item.id);
        });

        li.appendChild(closeBtn);
        todoListElement.appendChild(li);
    });
}

// Hàm thêm công việc mới
function addTask() {
    const task = newTaskInput.value.trim();
    if (task) {
        todoList.push({ id: Date.now(), task, completed: false });
        newTaskInput.value = ''; // Xóa nội dung ô input
        renderTodoList();
    } else {
        alert('Please enter a task!');
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

// Gắn sự kiện cho nút "Add"
addBtn.addEventListener('click', addTask);

// Hiển thị danh sách công việc ban đầu
renderTodoList();