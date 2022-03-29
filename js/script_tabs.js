const tabs = document.querySelectorAll('.tabheader__item');
const tabsContent = document.querySelectorAll('.tabcontent');
const tabsParent = document.querySelector('.tabheader__items');

// FUNCTION
const hideTabContent = () => {
  tabsContent.forEach(item => {
    item.style.display = 'none';
  });

  tabs.forEach(tab => {
    tab.classList.remove('tabheader__item_active');
  });
};

const showTabContent = (i = 0) => {
  tabsContent[i].style.display = 'block';
  tabs[i].classList.add('tabheader__item_active');
};

// listen to click tabs
tabsParent.addEventListener('click', (event) => {
  const target = event.target;

  if (target && target.classList.contains('tabheader__item')) {
    tabs.forEach((item, i) => {
      if (target == item) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});

// WORK
hideTabContent();
showTabContent();
