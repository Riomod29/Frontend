// ấn buton Hide text thì ẩn text h1
// ấn buton Show text thì hiện text h1
const hideButton = document.getElementById('hideButton');
const showButton = document.getElementById('showButton');
const textElement = document.querySelector('h1');

hideButton.addEventListener('click', () => {
    textElement.style.display = 'none';
});

showButton.addEventListener('click', () => {
    textElement.style.display = 'block';
});