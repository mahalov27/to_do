import { createTemplateForLocalStorage } from './js/dataSetting/dataSetting.js';
import { initPagination } from './js/pagination/pagination/pagination.js';
import header from './js/header/header.js';
import style from './css/index.css';


createTemplateForLocalStorage();
initPagination();
header();

