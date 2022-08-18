// core deliverable 1
const ramenMenu = document.querySelector('#ramen-menu');

// fetch GET request 
fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(data => displayRamens(data))

function displayRamens(ramens){
    ramens.forEach(ramen => {
        displayRamen(ramen);
    });
}
// core deliverables 1 and 2 met at this point
const newRamenForm = document.querySelector('#new-ramen');

newRamenForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const newRamenObj = {}
    newRamenObj.name = document.getElementById('new-name').value
    newRamenObj.restaurant = document.getElementById('new-restaurant').value
    newRamenObj.image = document.getElementById('new-image').value
    newRamenObj.rating = document.getElementById('new-rating').value
    newRamenObj.comment = document.getElementById('new-comment').value
    displayRamen(newRamenObj)
});

function displayRamen(ramen) {
    const createImg = document.createElement('img');
    createImg.src = ramen.image;
    ramenMenu.appendChild(createImg);

    createImg.addEventListener('click', () => {
        document.querySelector('.detail-image').src = ramen.image;
        document.querySelector('.name').textContent = ramen.name;
        document.querySelector('.restaurant').textContent = ramen.restaurant;
        document.querySelector('#rating-display').textContent = ramen.rating;
        document.querySelector('#comment-display').textContent = ramen.comment;
    })
}