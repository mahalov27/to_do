export const templateToolBarElementToDo = () => {
  return `<div class="tool_bar_item tool_bar_item-todo">
            <button class="button_add js-button-add">add to do</button>
            <div class="block_search">
               <input type="text" class="input_search js-input-search" name="searchToDo" data-search="input-search-toDo" placeholder="search...">
               <img src="./images/icon-search.png" alt="">
            </div>
         </div>`;
};

export const templateToolBarElementInprogress = () => {
  return `<div class="tool_bar_item tool_bar_item-inprogress">
            <div class="block_search">
               <input type="text" class="input_search js-input-search" name="searchIProgress" data-search="input-search-inProgress" placeholder="search...">
               <img src="./images/icon-search.png" alt="">
            </div>
         </div>`;
};

export const templateToolBarElementDid = () => {
  return `<div class="tool_bar_item tool_bar_item-inprogress">
            <button class="button_add js-button-clear-all">clear all</button>
         </div>`;
};
