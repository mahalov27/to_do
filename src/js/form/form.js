import createToDoItems from '../createToDoItems/createToDoItems.js';

const formToDo = document.querySelector('.js-form-toDo');

export const openFormTodo = () => {
  const close = document.querySelector('.close');
  close && formToDo.classList.remove('close');
  formToDo.classList.remove('hidden');
};
export const closeFormTodo = () => {
  formToDo.classList.add('hidden');
};

export const actionFormToDo = event => {
  event.preventDefault();

  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  if (event.target.dataset.action === 'cancel') {
    formToDo.classList.add('close');
    setTimeout(closeFormTodo, 300);
    return;
  }
  if (event.target.dataset.action === 'add') {
    createToDoItems();
    formToDo.classList.add('close');
    setTimeout(closeFormTodo, 300);
  }
};

formToDo.addEventListener('click', actionFormToDo);
