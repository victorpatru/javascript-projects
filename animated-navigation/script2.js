// Select elements
const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

// Place in an array for easier navigation
const navElements = [nav1, nav2, nav3, nav4, nav5]

// Create a function that iterates over our nav items and replaces the direction of the slide (out/in)
function navAnimation(direction1, direction2) {
    navElements.forEach((nav, i) => nav.classList.replace(`slide-${direction1}-${i+1}`, `slide-${direction2}-${i+1}`))
}


// It should change our menuBars ("change" value), and overlay (using the navAnimation). Use the overlay active trick to track whether the button has been clicked or not
function toggleNav() {
  menuBars.classList.toggle('change');
  overlay.classList.toggle('overlay-active');

  if (overlay.classList.contains('overlay-active')) {
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
    navAnimation('out', 'in');
  } else {
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
    navAnimation('in', 'out');
  }
}

// Add event listeners
menuBars.addEventListener('click', toggleNav);
navElements.forEach(nav => nav.addEventListener('click', toggleNav));