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
        img: 'https://media.istockphoto.com/photos/beautiful-african-american-female-model-picture-id910856488?k=6&m=910856488&s=612x612&w=0&h=r2YM9JLkSKBbs6gRrpUtK0ywxL7I9Vrt8cZELskqfs4=',
        heading: 'wow i lost 20 pounds in 1 month',
        desc: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illum reprehenderit earum, laborum voluptates perferendis, incidunt eum modi aperiam magnam vero impedit quibusdam, architecto quasi exercitationem repellendus magni ',
        name: 'fatou jawara'
    },

    {
        id: 1,
        img: 'https://media.gettyimages.com/photos/side-portrait-of-laughing-african-american-man-looking-up-picture-id1142003972?b=1&k=6&m=1142003972&s=612x612&w=0&h=tKbmg-ttIJ-93zCYFZspK071_wY0MQl3Fb2TnM6SA5U=',
        heading: 'this gym has all the equipments',
        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat possimus suscipit cupiditate. Incidunt ullam, dolore illum reiciendis assumenda odit! Officiis vero neque voluptas dolore facilis, praesentium possimus molestiae porro asperiores.',
        name: 'muhammed touray'

    },

    {
        id: 1,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9UZYu-s4xib8HAmaXCTEF6nfP2tIIPNZRwg&usqp=CAU',
        heading: 'finally i can train at night',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vel, saepe eaque ex vero nam quasi aperiam non autem! Eius eligendi tempore deleniti necessitatibus dolorum porro vitae ratione autem voluptas nesciunt nemo adipisci,',
        name: 'mariam jobe'
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
}); 

btnPrev.addEventListener('click', ()=> {
    showPerson(currentItem);
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length -1;
    }
}); 

