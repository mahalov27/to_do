export const templateToDoItem = ({ id, date, title, description, status }) => {
  const classForStatus = 'in-progress';

  return `
      <li class="list-item js-list-item ${
        status === 'inProgress' ? classForStatus : null
      }" data-id="${id}">
         <div class="list-item-title">
            <h2>${title}</h2>
            <p>${date}</p>
         </div>
         <div class="list-item-description">
            <p>${description}</p>
         </div>
         <div class="js-action-btns">
            <button class="delete-btn" data-action="delete-btn">&#x2718</button>
            <button class="in-progress-btn" data-action="in-progress-btn">&#10140</button>
            <button class="complete-btn" data-action="complete-btn">&#x2714</button>
         </div>
      </li>
   `;
};

export const templateToDoItemDid = ({ id, title, description }) => {
  return `
         <li class="list-item-did js-list-item" data-id="${id}">
            <div class="list-item-did-text">
               <div>
                  <h2>${title}</h2>
               </div>
               <div class="list-item-did-discription">
                  <p>${description}</p>
               </div>
            </div>
            <div class="js-action-btns">
               <button class="did-delete-btn" data-action="delete-btn">&#x2718</button>
            </div>
         </li>`;
};
