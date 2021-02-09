// select DOM variables modal-btn,modal-overlay,close-btn
const openModal = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeModal = document.querySelector('.close-btn');


// Event listeners
// listen for click events on modal-btn and close-btn

// when user clicks modal-btn add .open-modal to modal-overlay
openModal.addEventListener('click', () => {
  modalOverlay.classList.add('open-modal');
});

// when user clicks close-btn remove .open-modal from modal-overlay
closeModal.addEventListener('click', () => {
  modalOverlay.classList.remove('open-modal')
})




