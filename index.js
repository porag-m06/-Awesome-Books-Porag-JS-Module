/* eslint-disable no-use-before-define */
import BooksClass from './modules/book.js';
import { showHome, setEventsToNavItems } from './modules/navigation.js';
import { DateTime } from './modules/es6/luxon.js';

// NAVIGATION
const menuItems = document.querySelectorAll('.menu-item');
showHome();
setEventsToNavItems(menuItems);

// CURRENT DATE
const currentDate = document.querySelector('.current-date');
const date = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
currentDate.append(document.createElement('p').innerHTML = `${date}`);

// BOOKS - ADD, SHOW
const newBk = document.querySelector('#new-bk');

const awesomeBooksIn = new BooksClass();
if (awesomeBooksIn.getLocalStorage().length > 0) {
  awesomeBooksIn.ShowAllBooks();
}

newBk.addEventListener('submit', (e) => {
  e.preventDefault();
  const bookTitle = document.querySelector('#bk-title').value;
  const bookAuthor = document.querySelector('#bk-author').value;
  const awesomeBooks = new BooksClass(bookTitle, bookAuthor);
  awesomeBooks.AddBook();
  awesomeBooks.ShowAllBooks();
  newBk.reset();
});
