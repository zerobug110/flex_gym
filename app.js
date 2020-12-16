                          //nav slider
//select variable
const navList = document.querySelector('.nav__list');
const navToggle = document.querySelector('.lines');

navToggle.addEventListener('click', ()=> {
    navList.classList.toggle('show');    
});

//generate the current date

const currentDate = document.getElementById('current-date');
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
        desc: 'I cant still believe i lost 20 pound in just one month, flex gym is absolute the best and you gym in the country can challenge them their customer service is just amazing, they tread all the client equally the same',
        name: 'fatou jawara'
    },

    {
        id: 1,
        img: 'https://media.gettyimages.com/photos/side-portrait-of-laughing-african-american-man-looking-up-picture-id1142003972?b=1&k=6&m=1142003972&s=612x612&w=0&h=tKbmg-ttIJ-93zCYFZspK071_wY0MQl3Fb2TnM6SA5U=',
        heading: 'this gym has all the equipments',
        desc: 'I was blown away when i first enter the gym because their equipments, they have all the equipment that any standard gym should have, Sometime i think their price is so low because of the the quality equipments.',
        name: 'muhammed touray'

    },

    {
        id: 1,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9UZYu-s4xib8HAmaXCTEF6nfP2tIIPNZRwg&usqp=CAU',
        heading: 'finally i can train at night',
        desc: 'I have been looking for a gym that offers night training over the pass nine months and could not find it till i find out about flex gym. I have regularly train and work during the day time.',
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

