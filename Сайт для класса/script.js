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
