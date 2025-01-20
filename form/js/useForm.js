// useForm.js
export function useForms(html) {
   let state = {
      isActive: false,
      activeFormId: null,
   };

   function createForm(id) {
      state = {
         ...state,
         isActive: true,
         activeFormId: id,
      };
      const form = document.createElement('form');
      form.id = id;
      form.classList.add('form', `form-${id}`);
      form.innerHTML = html[id];
      return form;
   }

   function closeForm() {
      state = {
         ...state,
         isActive: false,
         activeFormId: null,
      };
      const form = document.querySelector('.form-active');
      if (form) {
         form.remove();
      }
      return state;
   }

   return {
      createForm,
      closeForm,
      getState: () => state,
   };
}


// export function useForms(forms) {
//    let state = {
//       isActive: false,
//       activeFormId: null
//    };

//    function setActiveForm(id) {
//       state = {
//          ...state,
//          isActive: true,
//          activeFormId: id
//       };

//       const activeForm = document.querySelector('.form-active');
//       if (activeForm) {
//          activeForm.classList.remove('form-active');
//       }

//       const newActiveForm = document.getElementById(id);
//       if (newActiveForm) {
//          newActiveForm.classList.add('form-active');
//       }

//       return state;
//    }

//    function deactivateForm() {
//       state = {
//          ...state,
//          isActive: false,
//          activeFormId: null
//       };

//       const activeForm = document.querySelector('.form-active');
//       if (activeForm) {
//          activeForm.classList.remove('form-active');
//       }

//       return state;
//    }

//    return {
//       setActiveForm,
//       deactivateForm,
//       getState: () => state
//    };
// }
