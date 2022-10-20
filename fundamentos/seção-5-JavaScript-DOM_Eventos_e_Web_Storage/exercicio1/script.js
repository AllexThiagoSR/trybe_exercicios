const he_cont = document.getElementById('header-container');
const emer_cont = document.querySelectorAll('.emergency-tasks div');
const no_emer = document.querySelectorAll('.no-emergency-tasks div');
const foo_cont = document.getElementById('footer-container')

he_cont.style.backgroundColor = '#4DCC35';

for(let i = 0;i < emer_cont.length; i += 1){

    //section emergency-tasks
    let div_h3 = emer_cont[i];

    div_h3.style.backgroundColor = '#FF9F84';
    div_h3.style.position = 'relative';
    div_h3.querySelector('h3').style.backgroundColor = '#A500F3';
    div_h3.querySelector('h3').style.position = 'absolute';
    div_h3.querySelector('h3').style.right = '0';
    div_h3.querySelector('h3').style.left = '0';

    //section no-emergency-tasks
    div_h3 = no_emer[i];

    div_h3.style.backgroundColor = '#F9DB5E';
    div_h3.style.position = 'relative';
    div_h3.querySelector('h3').style.backgroundColor = '#A500F3';
    div_h3.querySelector('h3').style.position = 'absolute';
    div_h3.querySelector('h3').style.right = '0';
    div_h3.querySelector('h3').style.left = '0';
}

foo_cont.style.backgroundColor = '#034422'; 
