// Lấy các phần tử cần thiết
const openModalButton = document.getElementById('openModal');
const closeModalButton = document.getElementById('closeModal');
const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modalOverlay');

// Hiển thị Modal
openModalButton.addEventListener('click', () => {
    modal.style.display = 'block'; // Hiển thị modal
    modalOverlay.style.display = 'block'; // Hiển thị overlay
});

// Ẩn Modal
closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none'; // Ẩn modal
    modalOverlay.style.display = 'none'; // Ẩn overlay
});

// Ẩn Modal khi click vào overlay
modalOverlay.addEventListener('click', () => {
    modal.style.display = 'none'; // Ẩn modal
    modalOverlay.style.display = 'none'; // Ẩn overlay
});