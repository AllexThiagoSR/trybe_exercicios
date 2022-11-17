const buttonToHide = document.getElementById('button-hide');
const abs = document.querySelector('.abs');
const asideSection = document.getElementById('aside-section');

const hide = () => {
  asideSection.style.setProperty('display', 'none');
buttonToHide.style.transform = 'rotate(90deg)';
};

buttonToHide.addEventListener('click', () => {
  
  const display = window.getComputedStyle(asideSection).display;
  if (display === 'flex') {
    hide();
  } else {
    asideSection.style.setProperty('display', 'flex');
    buttonToHide.style.transform = 'rotate(0deg)';
  }
});
