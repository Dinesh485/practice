window.addEventListener('load', () =>{

   const menuBtn = document.querySelector('.burger-icon')
   const menu = document.querySelector('header nav')
  
   menuBtn.addEventListener('click', () =>{
      menu.classList.toggle('menu-open')
      menuBtn.classList.toggle('menu-open-btn')
   })
})