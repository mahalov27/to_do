export const getId = (data) => {
   const basicValue = {
      arrayId: [],
      min: 1000000000000,
      max: 9999999999999,
      id: 1,
   };

   data.toDo.forEach(idItem => {
      basicValue.arrayId.push(idItem.id);
   })

   let testId = '';
   let filter = ''

   do {
     const forId = basicValue.min - 0.5 + Math.random() * (basicValue.max - basicValue.min + 1);
     testId = Math.floor(forId).toString();
     filter = basicValue.arrayId.includes(testId);
   } while (filter);

   basicValue.id = testId;

   return basicValue.id
};
