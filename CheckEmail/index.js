const email = document.getElementById('email');
const alert = document.querySelector('.alert');

// Biểu thức chính quy dùng cho email
const patternEmail = /^([a-z0-9_.-]+)@([a-zA-Z0-9.-]+)\.([a-z]{2,6})+$/;

function checkText() {
    if (email.value.length === 0) {
        // Chưa nhập email thì thông báo mất đi
        alert.style.padding = '0';
        // Set nội dung thông báo trống
        alert.textContent = '';
    } else {
        // Đã nhập gì đó vào email
        if (email.value.match(patternEmail)) {
            // Đúng định dạng
            alert.textContent = "Email hợp lệ";
            alert.style.color = '#14f0ba';
        } else {
            // Không đúng định dạng
            alert.style.padding = '0px 20px';
            alert.textContent = 'Email không hợp lệ';
            alert.style.color = '#f01448';
        }
    }
}

// Kiểm tra khi người dùng nhập liệu
email.addEventListener('keyup', () => {
    checkText();
});

// Kiểm tra khi người dùng rời khỏi ô nhập liệu
email.addEventListener('blur', () => {
    checkText();
});

// Mở chương trình lên thì kiểm tra ngay
checkText();