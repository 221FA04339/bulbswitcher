// script.js
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggleButton');
    const container = document.querySelector('.container');
    const text = document.getElementById('toggleText');

    button.addEventListener('click', () => {
        const isActive = button.classList.toggle('active');
        container.classList.toggle('active');
        text.classList.toggle('active');

        if (isActive) {
            button.textContent = 'OFF';
            text.textContent = 'Hello World!';
        } else {
            button.textContent = 'ON';
            text.textContent = 'Switch ON';
        }
    });
});
