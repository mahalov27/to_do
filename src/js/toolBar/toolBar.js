import {
  templateToolBarElementToDo,
  templateToolBarElementInprogress,
  templateToolBarElementDid,
} from '../templates/templatesToolBar.js';
import { openFormTodo, closeFormTodo } from '../form/form.js';
import { toDos } from '../dataSetting/dataSetting.js';
import { createToDoList } from '../createToDoList/createToDoList.js';

const toolBarBlock = document.querySelector('.tool_bar');

export const startToolBar = () => {
  toolBarBlock.innerHTML = templateToolBarElementToDo();
  toolBarElements();
};

export const switchToolBar = eventTarget => {
  const { action } = eventTarget.dataset;

  if (action === 'toDo') {
    toolBarBlock.innerHTML = templateToolBarElementToDo();
  }
  if (action === 'inProgress') {
    toolBarBlock.innerHTML = templateToolBarElementInprogress();
  }
  if (action === 'did') {
    toolBarBlock.innerHTML = templateToolBarElementDid();
  }

  closeFormTodo();
  toolBarElements();
};

const clearAllinDid = () => {
  toDos.did = [...toDos.did.filter(toDo => toDo.status !== 'did')];
  createToDoList(true);
};

const search = event => {
  localStorage.setItem('inset', JSON.stringify('search'));

  const { value } = event.target;

  if (event.target.name === 'searchToDo') {
    toDos.search = [
      ...toDos.toDo.filter(toDo => toDo.title.toLowerCase().includes(value)),
    ];
  }
  if (event.target.name === 'searchIProgress') {
    toDos.search = [
      ...toDos.inProgress.filter(toDo =>
        toDo.title.toLowerCase().includes(value)
      ),
    ];
  }

  createToDoList();
  toDos.search = [];
};

const toolBarElements = () => {
  const buttonAdd = document.querySelector('.js-button-add');
  const clearAllBtn = document.querySelector('.js-button-clear-all');
  const searchInput = document.querySelector('.js-input-search');

  buttonAdd && buttonAdd.addEventListener('click', openFormTodo);
  clearAllBtn && clearAllBtn.addEventListener('click', clearAllinDid);
  searchInput && searchInput.addEventListener('input', search);
};
