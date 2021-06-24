const buttonDarkMode = document.querySelector('.btn-dark-mode');
const body = document.body;
buttonDarkMode.addEventListener('click', function(event) {
    body.classList.toggle('dark-mode');
    event.target.classList.toggle('active');
});
