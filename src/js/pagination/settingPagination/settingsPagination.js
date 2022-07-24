import { checkInset } from "../../dataSetting/dataSetting.js";


const products = {
   itemsPerPage: 6,
   currentPage: 1,
   getQuantity: function () {
      return checkInset().length;
   }
};
export default products;
