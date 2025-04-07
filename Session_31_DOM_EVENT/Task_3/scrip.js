const boxes = document.querySelectorAll('.color-box'); // Lấy tất cả các ô màu

boxes.forEach(box => {
  box.addEventListener('click', function() { // Lắng nghe sự kiện click trên từng ô màu
    document.body.style.backgroundColor = this.style.backgroundColor; // Đổi màu nền của body theo màu của ô được nhấn
  });
});