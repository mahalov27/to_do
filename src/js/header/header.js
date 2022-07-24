import products from '../pagination/settingPagination/settingsPagination.js';
import { createToDoList } from '../createToDoList/createToDoList.js';
import { saveActiveInset } from '../dataSetting/dataSetting.js';
import { switchToolBar, startToolBar } from '../toolBar/toolBar.js';

const navigation = document.querySelector('.nav');

const activeNavButton = event => {
  event.preventDefault();
  const activeButton = navigation.querySelector('.active');
  if (event.target === event.currentTarget) {
    return;
  }
  activeButton && activeButton.classList.remove('active');

  event.target.classList.add('active');

  actionMode(event.target);
};

const checkMode = () => {
  saveActiveInset(navigation.children[0].dataset.action);
  startToolBar();
  createToDoList(true);
};

const actionMode = eventTarget => {
  saveActiveInset(eventTarget.dataset.action);
  products.currentPage = 1;
  createToDoList(true);
  switchToolBar(eventTarget);
};

const header = () => {
  checkMode();

  navigation.addEventListener('click', activeNavButton);
};

export default header;
