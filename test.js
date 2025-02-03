const notificationsTypesList = [
   {
     id: 232321,
     name: 'Превышение скорости',
     icon: '#notofications--speed',
   },
   {
     id: 12232,
     name: 'Въезд и выезд из геозоны',
     icon: '#figure-polygon',
     hidden: () => true,
   },
   {
     id: 2342432,
     name: 'Сработка тревожной кнопки',
     icon: '#notofications--sos',
   },
   {
     id: 2323756521,
     name: 'Сработка дискретного датчика',
     icon: '#notofications--digital_sensor',
   },
   {
     id: 232567576321,
     name: 'Значение аналогового датчика',
     icon: '#notofications--analog_sensor',
   },
 ];
 
 
 Object.defineProperty(notificationsTypesList, 'filtered', {
   get: function () {
     return this.filter(item => {
       if (typeof item.hidden === 'function') {
         return !item.hidden();
       }
       return true;
     });
   },
 });
 console.log(notificationsTypesList.filtered);
// const notificationsTypesList = [
//    {
//      id: 232321,
//      name: 'Превышение скорости',
//      icon: '#notofications--speed',
//    },
//    {
//      id: 12232,
//      name: 'Въезд и выезд из геозоны',
//      icon: '#figure-polygon',
//      hidden: () => true,
//    },
//    {
//      id: 2342432,
//      name: 'Сработка тревожной кнопки',
//      icon: '#notofications--sos',
//    },
//    {
//      id: 2323756521,
//      name: 'Сработка дискретного датчика',
//      icon: '#notofications--digital_sensor',
//    },
//    {
//      id: 232567576321,
//      name: 'Значение аналогового датчика',
//      icon: '#notofications--analog_sensor',
//    },
//  ];
//  console.log(notificationsTypesList.length);
//  const createComboboxData = (
//    arr,
//    valueField,
//    labelField,
//    filterFn = null,
//    sortFn = null
//  ) => {
//    const arrData = [];
 
//    if (!arr || arr.length === 0) return [];
 
//    arr.forEach((item) => {
//      const value = typeof valueField === 'function' ? valueField(item) : item?.[valueField];
//      const label = typeof labelField === 'function' ? labelField(item) : item?.[labelField];
 
//      if (value !== undefined && label !== undefined) {
//        arrData.push({ value, label });
//      }
//    });
 
//    const filtered = filterFn ? arrData.filter(filterFn) : arrData;
//    const sorted = sortFn ? filtered.sort(sortFn) : filtered;
//    return sorted;
//  };
 
//  const notificationsTypesListHiddenFiltered = (item) => {
//    // Проверяем, существует ли hidden и является ли он функцией
//    if (typeof item.hidden === 'function') {
//      return item.hidden() !== true; // Если функция возвращает true, исключаем элемент
//    }
//    return true; // Если hidden не существует или не является функцией, включаем элемент
//  };
 
//  const notificationsTypesComboData = createComboboxData(
//    notificationsTypesList,
//    'id',
//    'name',
//    notificationsTypesListHiddenFiltered
//  );
 
//  console.log(notificationsTypesComboData);
//  console.log(notificationsTypesComboData.length);
