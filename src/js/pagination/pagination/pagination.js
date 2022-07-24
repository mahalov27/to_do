import { checkInset } from '../../dataSetting/dataSetting.js';
import { createToDoList } from '../../createToDoList/createToDoList.js';
import products from '../settingPagination/settingsPagination.js';
import { createPageNumber } from '../../templates/templatePagination.js';

const paginationList = document.querySelector('.pagination-items');
const paginationDiv = document.querySelector('.pagination');

export const setPagination = () => {
  const numberPage = Math.ceil(products.getQuantity() / products.itemsPerPage);
  let paginationBlocks = '';

  for (let i = 1; i <= numberPage; i += 1) {
    paginationBlocks += createPageNumber(
      i,
      i === products.currentPage,
      products
    );
  }
  paginationList.innerHTML = paginationBlocks;

  if (numberPage > 0) {
    paginationDiv.classList.add('paginationActive');
  } else {
    paginationDiv.classList.remove('paginationActive');
  }
};

export const initPagination = () => {
  paginationList.addEventListener('click', setPage);
  document
    .querySelectorAll('.js-arrow-btn')
    .forEach(item => item.addEventListener('click', actionArrowBtns));

  setPagination();
};

export const filterIndexProductCard = () => {
  const filter = checkInset().filter((_item, idx) => {
    return (
      idx >=
        products.currentPage * products.itemsPerPage - products.itemsPerPage &&
      idx < products.currentPage * products.itemsPerPage
    );
  });
  return filter;
};

export const deletePagination = () => {
  const pagination = document.querySelector('.pagination-items');
  const newPaginationLength = Math.ceil(
    products.getQuantity() / products.itemsPerPage
  );
  if (
    products.currentPage !== 1 &&
    pagination.children.length !== newPaginationLength &&
    pagination.children.length === products.currentPage
  ) {
    products.currentPage -= 1;
  }
};

const setPage = event => {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  products.currentPage = Number(event.target.textContent);
  const activePage = document.querySelector('.activePage');

  activePage && activePage.classList.remove('activePage');

  event.target.classList.add('activePage');
  createToDoList();
};

const actionArrowBtns = event => {
  if (
    event.target.dataset.arrow === 'next' &&
    products.currentPage < paginationList.childNodes.length
  ) {
    products.currentPage += 1;
  }
  if (event.target.dataset.arrow === 'prev' && products.currentPage > 1) {
    products.currentPage -= 1;
  }

  setPagination();
  createToDoList(true);
};
