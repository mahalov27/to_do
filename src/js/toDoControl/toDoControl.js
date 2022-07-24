import { createToDoList } from '../createToDoList/createToDoList.js';
import { toDos, getStatusProgress } from '../dataSetting/dataSetting.js';
import { deletePagination } from '../pagination/pagination/pagination.js';

const getActions = event => {
  const { action } = event.target.dataset;

  action === 'delete-btn' && deleteToDo(event.target);
  action === 'in-progress-btn' && toInProgress(event.target);
  action === 'complete-btn' && toDid(event.target);
};

const getId = eventTarget => {
  const cardItem = eventTarget.closest('.js-list-item');
  const { id } = cardItem.dataset;

  return id;
};

const deleteToDo = eventTarget => {
  const id = getId(eventTarget);

  if (JSON.parse(localStorage.getItem('inset')) !== 'did') {
    toDos.toDo = [...toDos.toDo.filter(toDo => toDo.id !== id)];
  } else {
    toDos.did = [...toDos.did.filter(toDo => toDo.id !== id)];
  }

  localStorage.setItem('toDos', JSON.stringify(toDos));
  deletePagination();
  getStatusProgress();
  createToDoList(true);
};

const toInProgress = eventTarget => {
  const id = getId(eventTarget);
  toDos.toDo.forEach(toDo => {
    if (toDo.id === id) {
      toDo.status = 'inProgress';
      eventTarget.closest('.list-item').classList.add('in-progress');
      getStatusProgress();
    }
  });
};

const toDid = eventTarget => {
  const id = getId(eventTarget);
  toDos.toDo.forEach(toDo => {
    if (toDo.id === id) {
      toDo.status = 'did';
      toDos.did.push(toDo);
      toDos.toDo = [...toDos.toDo.filter(toDo => toDo.id !== id)];
      getStatusProgress();
      createToDoList(true);
    }
  });
};

const toDosControl = () => {
  const actionBtns = document.querySelectorAll('.js-action-btns');

  actionBtns.forEach(item => item.addEventListener('click', getActions));
};

export default toDosControl;
