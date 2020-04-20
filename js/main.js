let cartButton = document.getElementById('cart-button');
let modal = document.querySelector('.modal');
let modalClose = document.querySelector('.modal-close');

// cartButton.addEventListener('click', function(event) {
//     modal.classList.add('is-open');
// });

// modalClose.addEventListener('click', function(event) {
//     modal.classList.remove('is-open');
// });


cartButton.addEventListener('click', toggleModal);

modalClose.addEventListener('click', toggleModal);


// включает, выключает класс
function toggleModal() {
    modal.classList.toggle('is-open');
}

new WOW().init();
