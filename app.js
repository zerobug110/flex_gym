// nav variables
const hamburger = document.querySelector('.line');
const show = document.querySelector('.show');
const navList = document.querySelector('.navList');


// hamburger menu 
// show.addEventListener('click', ()=>{
//     navList.classList.toggle('show');
// });

// review variables
const reviewImg = document.querySelector('.review__img');
const reviewHeading = document.querySelector('.review__heading');
const reviewText = document.querySelector('.review__text');
const name = document.querySelector('.review__name');
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');



const reviews = [
    {
        id: 1,
        img: '../images/review-1.jpg',
        heading: 'wow i lost 20 pounds in 1 month',
        desc: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illum reprehenderit earum, laborum voluptates perferendis, incidunt eum modi aperiam magnam vero impedit quibusdam, architecto quasi exercitationem repellendus magni ',
        name: 'muhammed touray'
    },

    {
        id: 1,
        img: '../images/review-2.jpg',
        heading: 'this gym has all the equipments',
        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat possimus suscipit cupiditate. Incidunt ullam, dolore illum reiciendis assumenda odit! Officiis vero neque voluptas dolore facilis, praesentium possimus molestiae porro asperiores.',
        name: 'fatou jawara'

    },

    {
        id: 1,
        img: '../images/review-3.jpg',
        heading: 'finally i can train at night',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vel, saepe eaque ex vero nam quasi aperiam non autem! Eius eligendi tempore deleniti necessitatibus dolorum porro vitae ratione autem voluptas nesciunt nemo adipisci,',
        name: 'anna kane'
    },
];

// set starting item
let currentItem = 0;

window.addEventListener('DOMContentLoaded', ()=> {
    showPerson(currentItem);
    
});

function showPerson(person) {
    const item = reviews[person];
    reviewImg.src = item.img;
    reviewHeading.textContent = item.heading;
    reviewText.textContent = item.desc;
    name.textContent = item.name;
}

btnNext.addEventListener('click', ()=> {
    showPerson(currentItem);
    currentItem++;
    if(currentItem > reviews.length -1) {
        currentItem = 0;
    }
}) 

btnPrev.addEventListener('click', ()=> {
    showPerson(currentItem);
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length -1;
    }
}); 

