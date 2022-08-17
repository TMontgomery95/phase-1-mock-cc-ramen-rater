// write your code here
const getRamenData = 
    fetch('http://localhost:3000/ramens')
    .then(resp => resp.json())
    .then(ramenData => ramenData.forEach(ramen => {
        createRamenImage(ramen)
    }));
        
const imgUrl = 'http://localhost:3000/ramens'

function createRamenImage (imgUrl) {
    let container = document.querySelector('#ramen-menu');
    let ramenImg = document.createElement('img');
    ramenImg.src = imgUrl.image;

    container.appendChild(ramenImg);

    ramenImg.addEventListener('click', (e) => {
        grabRamen(e.target.id);
    })
}

function grabRamen(ramenId) {
    fetch('http://localhost:3000/ramens')
        .then(resp => resp.json)
        .then(ramen => {
            renderRamenDetails(ramen)
        })
}

function renderRamenDetails(ramenData) {
    const img = document.querySelector('.detail-image');
    const h2 = document.querySelector('.name');
    const h3 = document.querySelector('.restaurant');
    const ramenRating = document.querySelector('#rating-display');
    img.src = ramenData.image;
    h2.textContent = ramenData.name;
    h3.textContent = ramenData.restaurant;
    ramenRating.textContent = ramenData.rating;
}