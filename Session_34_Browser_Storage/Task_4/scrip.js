// Lấy danh sách todo từ Local Storage hoặc khởi tạo mảng rỗng
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Hàm hiển thị danh sách todo
function renderTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = ''; // Xóa danh sách cũ

    todos.forEach((todo, index) => {
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';
        todoItem.innerHTML = `
            <span>${todo}</span>
            <button class="delete-btn" onclick="deleteTodo(${index})">Xóa</button>
        `;
        todoList.appendChild(todoItem);
    });
}

// Hàm thêm todo mới
function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        todos.push(todoText);
        localStorage.setItem('todos', JSON.stringify(todos)); // Lưu vào Local Storage
        todoInput.value = ''; // Xóa input sau khi thêm
        renderTodos();
    }
}

// Hàm xóa todo
function deleteTodo(index) {
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos)); // Cập nhật Local Storage
    renderTodos();
}

// Hiển thị danh sách todo khi tải trang
renderTodos();

// Thêm sự kiện Enter để thêm todo
document.getElementById('todoInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});