const toggler = document.getElementById('toggler');
let isDark = localStorage.getItem('theme') === 'dark';


document.body.dataset.theme = isDark ? 'dark' : 'light';

toggler.addEventListener('click', () => {
   isDark = !isDark;
   document.body.dataset.theme = isDark ? 'dark' : 'light';

   localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
