// useModal.js



// index.js
import { useForms } from './useForm.js';
import { html } from './html.js';
import { useModal } from './useModal.js';

const { createForm, closeForm, getState } = useForms(html);
const { createModal, closeModal, getStateModal } = useModal();

document.addEventListener('click', e => {
   const current = e.target;
   const currentId = current.dataset.id;
   if (current && currentId) {
      const form = createForm(currentId);
      createModal(currentId, form);
   } else {
      closeForm();
      closeModal();
   }
   console.log(getState());
   console.log(getStateModal());
});
