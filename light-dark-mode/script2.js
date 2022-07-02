// Get elements
// toggleSwitch, nav, toggleIcon, images, textbox
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Function that adjusts the styling based on dark/light mode
function toggleLightDarkMode(type) {
   
    nav.style.backgroundColor = type === 'light' ? `rgb(255 255 255 / 50%)` : `rgb(0 0 0 / 50%)`
    textBox.style.backgroundColor = type === 'light' ? `rgb(0 0 0 / 50%)` : `rgb(255 255 255 / 50%)`;

    // Icon moon/sun
    type === 'light' ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    // Light mode/Dark mode button text
    toggleIcon.children[0].textContent = type === 'light' ? 'Light Mode' : 'Dark Mode';
    image1.src = `./img/undraw_proud_coder_${type}.svg`;
    image2.src = `./img/undraw_feeling_proud_${type}.svg`;
    image3.src = `./img/undraw_conceptual_idea_${type}.svg`;
    
}

// A function that adds to the html element the 'data-theme' with the proper value, puts that info in localStorage and triggers the function from above
// Use checked event to set the right theme
function switchTheme() {
   if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggleLightDarkMode('dark');
   } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    toggleLightDarkMode('light');
   }
}

// Event listener on the toggle switch
toggleSwitch.addEventListener('change', switchTheme);
// Ensure that our theme is kept across browser sessions (use local storage)

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleLightDarkMode('dark');
    }
}