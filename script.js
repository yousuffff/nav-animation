const menuBar = document.querySelector('#menu-bars');
const overlay = document.querySelector('#overlay');
const nav1 = document.querySelector('#nav-1');
const nav2 = document.querySelector('#nav-2');
const nav3 = document.querySelector('#nav-3');
const nav4 = document.querySelector('#nav-4');
const nav5 = document.querySelector('#nav-5');

function toggleMenu(){
  menuBar.classList.toggle('change')
  
  overlay.classList.toggle('overlay-active')
  if(overlay.classList.contains('overlay-active')){
  overlay.classList.remove('overlay-slide-out');
  overlay.classList.add('overlay-slide-in');
  nav1.classList.remove('slide-out-1');
  nav1.classList.add('slide-in-1');
  nav2.classList.remove('slide-out-2');
  nav2.classList.add('slide-in-2');
  nav3.classList.remove('slide-out-3');
  nav3.classList.add('slide-in-3');
  nav4.classList.remove('slide-out-4');
  nav4.classList.add('slide-in-4');
  nav5.classList.remove('slide-out-5');
  nav5.classList.add('slide-in-5');
}else{
  overlay.classList.replace('overlay-slide-in' ,'overlay-slide-out');
  nav1.classList.remove('slide-in-1');
  nav1.classList.add('slide-out-1');
  nav2.classList.remove('slide-in-2');
  nav2.classList.add('slide-out-2');
  nav3.classList.remove('slide-in-3');
  nav3.classList.add('slide-out-3');
  nav4.classList.remove('slide-in-4');
  nav4.classList.add('slide-out-4');
  nav5.classList.remove('slide-in-5');
  nav5.classList.add('slide-out-5');
}
}



menuBar.addEventListener('click', toggleMenu)
nav1.addEventListener('click',toggleMenu);
nav2.addEventListener('click',toggleMenu);
nav3.addEventListener('click',toggleMenu);
nav4.addEventListener('click',toggleMenu);
nav5.addEventListener('click',toggleMenu);