let isOpen = true;

const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
  isOpen = !isOpen;
  sidebar.classList.toggle('sidebar-closed');
});

