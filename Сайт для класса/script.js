document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const slider = document.querySelector('.slider');
    const iframe = document.getElementById('content');

    navLinks.forEach((link, index) => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const url = this.getAttribute('data-url');
            const linkWidth = this.offsetWidth;

            iframe.src = url;
            slider.style.left = (index * linkWidth) + 'px';
        });
    });
});

// Функция для отображения модального окна
function showModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

// Функция для закрытия модального окна
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Показать модальное окно после загрузки страницы
window.onload = function() {
    showModal();
};

// Закрытие модального окна при нажатии на крестик
var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
    closeModal();
};

// Закрытие модального окна при нажатии вне его
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
};