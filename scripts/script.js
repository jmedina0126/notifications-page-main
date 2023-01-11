// Get DOM Elements

const mark = document.querySelector('.mark');
const notif = document.querySelector('.notifs');
const messages = document.querySelectorAll('.wrapper');
const redNot = document.querySelectorAll('.rdnot');

// Mark as read event

mark.addEventListener('click', () => {
    notif.innerHTML = 0;
});
messages.forEach(messages => {
    mark.addEventListener('click', () => messages.style.background = '#fff');
});
redNot.forEach(redNot => {
    mark.addEventListener('click', () => redNot.style.display = 'none');
});