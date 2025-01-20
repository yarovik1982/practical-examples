export function useModal() {
   let state = {
      isModal: false,
      modalId: null,
   };

   function createModal(id, content) {
      const existingModal = document.querySelector('.modal');
      if (existingModal) {
         existingModal.remove();
      }
      state = {
         ...state,
         isModal: true,
         modalId: id,
      };
      const modal = document.createElement('div');
      modal.classList.add('modal', `modal-${id}`);
      modal.id = `modal-${id}`;
      modal.appendChild(content);

      document.body.appendChild(modal);
      return state;
   }

   function closeModal() {
      const modal = document.querySelector('.modal');
      if (modal) {
         modal.remove();
      }
      state = {
         ...state,
         isModal: false,
         modalId: null,
      };
      return state;
   }

   return {
      createModal,
      closeModal,
      getStateModal: () => state,
   };
}