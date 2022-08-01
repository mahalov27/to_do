import { toDos } from '../dataSetting/dataSetting.js';
import { createToDoList } from '../createToDoList/createToDoList.js';
import { templateToDoItem } from '../templates/templatesToDoItem.js';
import { getId } from '../getId/getId.js';

const createToDoItems = () => {
  const form = document.forms.itemCreateForm;
  const titleOfTodo = form.elements.title;
  const descriptionOfTodo = form.elements.description;
  const listItems = document.querySelector('.toDo-list');
  const date = new Date();

  const toDoItem = {
    id: getId(toDos),
    date: `${date.getDate()}`.padStart(2, '0') +
      '.' +
      `${date.getMonth()}`.padStart(2, '0') +
      '.' +
      `${date.getFullYear()}`,
    status: 'noStatus',
    title: titleOfTodo.value,
    description: descriptionOfTodo.value,
  };
  form.reset();

  toDos.toDo.unshift(toDoItem);

  const getData = JSON.parse(localStorage.getItem('toDos'));
  getData.toDo.unshift(toDoItem);
  localStorage.setItem('toDos', JSON.stringify(getData));

  listItems.insertAdjacentHTML('afterbegin', templateToDoItem(toDoItem));
  createToDoList(true);
};
export default createToDoItems;
