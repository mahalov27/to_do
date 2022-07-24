import {
  filterIndexProductCard,
  setPagination,
} from '../pagination/pagination/pagination.js';
import toDosControl from '../toDoControl/toDoControl.js';
import {
  templateToDoItem,
  templateToDoItemDid,
} from '../templates/templatesToDoItem.js';

export const createToDoList = withPagination => {
  const listItems = document.querySelector('.toDo-list');
  const filtered = filterIndexProductCard();
  const markup = filtered.reduce((acc, item) => {
    if (JSON.parse(localStorage.getItem('inset')) === 'did') {
      return (acc += templateToDoItemDid(item));
    }
    if (JSON.parse(localStorage.getItem('inset')) !== 'did') {
      return (acc += templateToDoItem(item));
    }
  }, '');

  listItems.innerHTML = markup;
  if (withPagination) {
    setPagination();
  }

  toDosControl();
};
