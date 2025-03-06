export function useStartGame(parent, onStartGame) {
   let isStart = false;
   let btnStart = null;

   function create() {
      if (isStart) return;

      btnStart = document.createElement('button');
      btnStart.classList.add('btnStart');
      btnStart.textContent = 'START';
      parent.appendChild(btnStart);

      btnStart.addEventListener('click', destroy);

      isStart = true;
   }

   function destroy() {
      if (btnStart) {
         btnStart.remove();
         btnStart = null;
         isStart = false;
         if (typeof onStartGame === 'function') {
            onStartGame();
         }
      }
   }

   return {
      create,
      destroy,
      get isStart() {
         return isStart;
      }
   };
}


