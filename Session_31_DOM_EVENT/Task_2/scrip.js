const toggleButton = document.querySelector('button'); // Lấy nút "Toggle dark mode"
const body = document.body; // Lấy thẻ body

toggleButton.addEventListener('click', () => {
    // Kiểm tra nếu body đang ở chế độ dark mode
    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = 'white'; // Đổi background thành trắng
        body.style.color = 'black'; // Đổi chữ thành đen
    } else {
        body.style.backgroundColor = 'black'; // Đổi background thành đen
        body.style.color = 'white'; // Đổi chữ thành trắng
    }
});