// Getting elements
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'

// Adjusting styles
function toggleLightDarkMode(type) {
    nav.style.backgroundColor = type === 'light' ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = type === 'light' ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = `${type.charAt(0).toUpperCase() + type.slice(1)} Mode`;
    type === 'light' ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    image1.src = `./img/undraw_proud_coder_${type}.svg`;
    image2.src = `./img/undraw_feeling_proud_${type}.svg`;
    image3.src = `./img/undraw_conceptual_idea_${type}.svg`;
}

// // Dark Mode Styles
// function darkMode() {
//     nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//     textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//     toggleIcon.children[0].textContent = 'Dark Mode';
//     toggleIcon.children[1].classList.remove('fa-sun');
//     toggleIcon.children[1].classList.add('fa-moon');
//     image1.src = './img/undraw_proud_coder_dark.svg';
//     image2.src = './img/undraw_feeling_proud_dark.svg';
//     image3.src = './img/undraw_conceptual_idea_dark.svg';
// }

// // Light Mode Styles
// function lightMode() {
//     nav.style.backgroundColor = 'rgb(255 255 255/ 50%)';
//     textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//     toggleIcon.children[0].textContent = 'Light Mode';
//     toggleIcon.children[1].classList.remove('fa-moon');
//     toggleIcon.children[1].classList.add('fa-sun');
//     image1.src = './img/undraw_proud_coder_light.svg';
//     image2.src = './img/undraw_feeling_proud_light.svg';
//     image3.src = './img/undraw_conceptual_idea_light.svg';
// }


// Switch Theme Dynamically
function switchTheme() {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleLightDarkMode(DARK_THEME);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleLightDarkMode(LIGHT_THEME);
    }    
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme)


// Check localStorage for theme

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleLightDarkMode(DARK_THEME);
    }
}