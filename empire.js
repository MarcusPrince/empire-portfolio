import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const box = document.querySelector('.box');

window.addEventListener('scroll', () => {
  const boxPosition = box.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.5;

  if (boxPosition < screenPosition) {
    box.classList.add('visible');
  }
});







