const buttonToHide = document.getElementById('button-hide');
const abs = document.querySelector('.abs');
const asideSection = document.getElementById('aside-section');
const mainContent = document.querySelector('.main-content');

const hide = () => {
  asideSection.classList.add('hide');
  buttonToHide.style.transform = 'rotate(90deg)';;
  mainContent.style.marginTop = '0';
};

buttonToHide.addEventListener('click', () => {
  
  if (!asideSection.className.includes('hide')) {
    hide();
  } else {
    asideSection.classList.remove('hide');
    buttonToHide.style.transform = 'rotate(0deg)';
    mainContent.style.marginTop = '415px';
  }
});
