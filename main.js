const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelector('.menu-items');


const menuItem = document.querySelectorAll('.menu-item')

menuBtn.addEventListener('click', ()=> {
    menuBtn.classList.toggle('open');
    menuItems.classList.toggle('open');
});

menuItem.forEach(item => {

    
});


