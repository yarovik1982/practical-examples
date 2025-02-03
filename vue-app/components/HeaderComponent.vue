<template>
   <div class="header">
     <button class="mobile-menu-button" @click="$emit('toggle-mobile-menu')">&#9776;</button>
     <div class="nav-links" :class="{ active: isMobileMenuOpen }">
       <a href="#home">Главная</a>
       <a href="#about">О нас</a>
       <a href="#contact">Контакты</a>
       <button @click="$emit('open-modal')">Вход</button>
     </div>
   </div>
 </template>
 
 <script>
 export default {
   data() {
     return {
       isMobileMenuOpen: false
     };
   },
   methods: {
     toggleMenu() {
       this.isMobileMenuOpen = !this.isMobileMenuOpen;
     }
   },
   mounted() {
     window.addEventListener('resize', () => {
       if (window.innerWidth > 768) {
         this.isMobileMenuOpen = false;
       }
     });
   }
 };
 </script>