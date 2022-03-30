// Modal
const modalTrigger = document.querySelectorAll('[data-modal]'),
  modal = document.querySelector('.modal'),
  modalCloseBtn = document.querySelector('[data-close');

modalTrigger.forEach(item => {
  item.addEventListener('click', () => {
    modal.style.display = 'block';
    // not scroll
    document.body.style.overflow = 'hidden';
  });
});

// close modal
const closeModal = () => {
  modal.style.display = 'none';
  // again scroll
  document.body.style.overflow = '';
};

modalCloseBtn.addEventListener('click', () => {
  closeModal();
});

// for click outside open block
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// when click button ESC
document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape') {
    closeModal();
  }
});