// variables
const hamburger = document.querySelector('.line');
const show = document.querySelector('.show');
const navList = document.querySelector('.navList');

show.addEventListener('click', ()=>{
    navList.classList.toggle('show');
});

