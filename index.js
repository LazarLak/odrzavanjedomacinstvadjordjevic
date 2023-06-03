const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navigation_items');
  
    burger.addEventListener('click',()=>{
      nav.classList.toggle('nav-active');
      //burger animation
      burger.classList.toggle('toggle');
    });
  
  }
  navSlide();