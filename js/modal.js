// Modal
const modalTrigger = document.querySelectorAll('[data-modal]'),
  modal = document.querySelector('.modal'),
  modalCloseBtn = document.querySelector('[data-close'),
  modalGetInterval = 3000;

// close modal
const closeModal = () => {
  modal.style.display = 'none';
  // again scroll
  document.body.style.overflow = '';
};

// open modal
const openModal = () => {
  modal.style.display = 'block';
  // not scroll
  document.body.style.overflow = 'hidden';
  clearInterval(modalTimerId);


};

modalTrigger.forEach(item => {
  item.addEventListener('click', openModal);
});

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

// call modal through time
// const modalTimerId = setTimeout(openModal, modalGetInterval);

// open modal, when scroll to end of page. It will be onle once
const showModalByScroll = () => {
  let isScroll = window.pageYOffset + document.documentElement.clientHeight;
  if (isScroll >= document.documentElement.scrollHeight) {
    openModal();
    window.removeEventListener('scroll', showModalByScroll);
  }
};

window.addEventListener('scroll', showModalByScroll);