export let toDos = {};

export const createTemplateForLocalStorage = () => {
  const toDosTemplate = {
    toDo: [],
    inProgress: [],
    did: [],
    search: [],
  };
  if (localStorage.getItem('toDos') === null) {
    localStorage.setItem('toDos', JSON.stringify(toDosTemplate));
  }
  toDos = JSON.parse(localStorage.getItem('toDos'));
};

export const getStatusProgress = () => {
  toDos.inProgress = toDos.toDo.filter(toDo => toDo.status === 'inProgress');
  localStorage.setItem('toDos', JSON.stringify(toDos));
};

export const saveActiveInset = value => {
  localStorage.setItem('inset', JSON.stringify(value));
};

export const checkInset = () => {
  let checkedInset = [];
  const savesInset = JSON.parse(localStorage.getItem('inset'));
  if (savesInset === 'toDo') {
    checkedInset = toDos.toDo;
  }
  if (savesInset === 'inProgress') {
    checkedInset = toDos.inProgress;
  }
  if (savesInset === 'did') {
    checkedInset = toDos.did;
  }
  if (savesInset === 'search') {
    checkedInset = toDos.search;
  }
  return checkedInset;
};
