const menuBtn = document.getElementById('menu-btn-toggle');
const menuList = document.querySelector('ul');
let isClicked = false;

menuBtn.addEventListener('click', () => {
    if(!isClicked) {
        menuList.style.left = 0;
        isClicked = true;
    } else {
        menuList.style.left = '-100%';
        isClicked = false;
    }
}, false);