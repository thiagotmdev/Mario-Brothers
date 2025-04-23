const btncontact = document.querySelector('.contact-button');
const form = document.querySelector('form');
const formMask = document.querySelector('.form-mask');
const smartMenu = document.querySelector('.smart-menu');
const smartMenuInt = document.querySelector('.smart-menu-int');
const contactUs = document.querySelector('.contact-link');

function openForm(){
    form.style.left = '40%';
    formMask.style.display = 'block';
    form.style.transition = '.8s ease-in-out';
}

function closeForm(){
    form.style.left = '-350px';
    formMask.style.display = 'none';
}

window.onload = function() {
    smartMenu.addEventListener('click', function(){

        const displayStyle = window.getComputedStyle(smartMenuInt).display;

        if(displayStyle == 'none'){
            smartMenuInt.style.display = 'flex';
            smartMenuInt.style.right = '0';
            smartMenuInt.style.transition = '.3s ease-in-out';
        }else{
            smartMenuInt.style.display = 'none';
        }
    })
}


if(btncontact){
    btncontact.addEventListener('click', openForm);
}

formMask.addEventListener('click', closeForm);

contactUs.addEventListener('click', openForm);