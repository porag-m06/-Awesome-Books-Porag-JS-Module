const collection = document.querySelector('.collection');
const add = document.querySelector('.add-books-section');
const info = document.querySelector('.contact-section');

const hideAll = () => {
  collection.style.display = 'none';
  add.style.display = 'none';
  info.style.display = 'none';
};

const showHome = () => {
  collection.style.display = 'block';
  add.style.display = 'none';
  info.style.display = 'none';
};

const setEventsToNavItems = (menuItems) => {
  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      const key = item.getAttribute('value');
      switch (key) {
        case 'list':
        {
          hideAll();
          collection.style.display = 'block'; break;
        }

        case 'add':
        {
          hideAll();
          add.style.display = 'block'; break;
        }

        case 'info':
        {
          hideAll();
          info.style.display = 'block'; break;
        }

        default: collection.style.display = 'block';
          break;
      }
    });
  });
};

export { showHome, setEventsToNavItems };