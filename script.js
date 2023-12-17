const menuBar = document.querySelector('#menu-bars');
const overlay = document.querySelector('#overlay');
const nav1 = document.querySelector('#nav-1');
const nav2 = document.querySelector('#nav-2');
const nav3 = document.querySelector('#nav-3');
const nav4 = document.querySelector('#nav-4');
const nav5 = document.querySelector('#nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

//MENU ANIMATION
function navAnimation(direction1, direction2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`)
  })
}

function toggleMenu() {
  //HEMBURGER ICON
  menuBar.classList.toggle('change')

  //ADDING FAKE-CLASS
  overlay.classList.toggle('overlay-active')
  //CHECKING FAKE-CLASS
  if (overlay.classList.contains('overlay-active')) {
    // ADDING OVERLAY
    overlay.classList.replace('overlay-slide-out', 'overlay-slide-in');
    //MENU IN
    navAnimation('out', 'in');
  } else {
    //REMOVING OVERLAY
    overlay.classList.replace('overlay-slide-in', 'overlay-slide-out');
    //MENU OUT
    navAnimation('in', 'out');
  }
}

menuBar.addEventListener('click', toggleMenu)
navItems.forEach((nav)=>{
  nav.addEventListener('click', toggleMenu);
})
