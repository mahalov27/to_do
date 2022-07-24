export const createPageNumber = (num, i, products) => {
  const activePageNumber = 'activePage';

  return `<li data-page="${num}" class="${
    num === products.currentPage ? activePageNumber : null
  }">${num}</li>`;
};
