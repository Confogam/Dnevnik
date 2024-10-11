document.addEventListener('DOMContentLoaded', function() {
  // Устанавливаем позицию слайдера после загрузки всех элементов
  window.onload = function() {
    // После загрузки страницы добавьте класс "loaded" к телу
    document.body.classList.add("loaded");
  };

  const iframe = document.getElementById('content');

  // Приём сообщения от iframe
  window.addEventListener('message', function(event) {
    if (event.data.type === 'iframeHeight') {
      document.getElementById('myIframe').style.height = event.data.height + 'px';
    }
  });
});

// Функция для отображения модального окна
function showModal() {
  var modal = document.getElementById("myModal");
  if (modal) {
    modal.style.display = "block";
  }
}

// Функция для закрытия модального окна
function closeModal() {
  var modal = document.getElementById("myModal");
  if (modal) {
    modal.style.display = "none";
  }
}

// Закрытие модального окна при нажатии на крестик
var closeBtn = document.getElementsByClassName("close")[0];
if (closeBtn) {
  closeBtn.onclick = function() {
    closeModal();
  };
}

// Закрытие модального окна при нажатии вне его
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
};

if (window.parent !== window) {
  document.querySelector('.iframeDetector').classList.add('hidden');
}

// Показ модального окна с файлом
function openModalLink(link) {
  // Предотвращаем переход по ссылке
  event.preventDefault(); 

  document.getElementById('link-modal-iframe').src = link.href;
  document.getElementById('link-modal').style.display = 'block';
}

function closeModalLink() {
  document.getElementById('link-modal').style.display = 'none';
}