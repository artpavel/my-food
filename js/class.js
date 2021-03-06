// class for card
class MenuCard {
  constructor(src, alt, title, descr, price, parentSelector, ...classes) {
    this.src = src;
    this.alt = alt;
    this.title = title;
    this.descr = descr;
    this.price = price;
    this.classes = classes; // array
    this.parent = document.querySelector(parentSelector);
    this.transfer = 27;
    this.changeToUAN();
  }

  changeToUAN() {
    this.price = this.price * this.transfer;
  }

  render() {
    const element = document.createElement('div');

    if (this.classes.length === 0) {
      this.element = 'menu__item';
      element.classList.add(this.element);
    } else {
      this.classes.forEach((className) => element.classList.add(className));
    }

    element.innerHTML = `
      <img src=${this.src} alt=${this.alt} />
      <h3 class="menu__item-subtitle">${this.title}</h3>
      <div class="menu__item-descr">${this.descr}</div>
      <div class="menu__item-divider"></div>
      <div class="menu__item-price">
      <div class="menu__item-cost">Цена:</div>
      <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
      </div>   
    `;
    this.parent.append(element);
  }
}
//1
new MenuCard(
  'img/tabs/vegy.jpg',
  'vegy',
  'Меню "Фитнес"',
  'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежых овощей и фруктов. Продукт активных и здоровых',
  9,
  '.menu .container',
  'menu__item'
).render();
//2
new MenuCard(
  'img/tabs/elite.jpg',
  'elite',
  'Меню “Премиум”',
  'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба',
  14,
  '.menu .container',
  'menu__item'
).render();
//3
new MenuCard(
  'img/tabs/post.jpg',
  'post',
  'Меню "Постное"',
  'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения',
  21,
  '.menu .container',
  'menu__item'
).render();
