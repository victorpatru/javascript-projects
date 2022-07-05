/* Three main views: The Input View, The Countdown View, and the Complete View */

// Input view elements
const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

// Countdown view elements
const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

// Complete (countdown) view elements
const completeEl = document.getElementById('complete');
const completeElInfo = document.getElementById('complete-info');
const completeBtn = document.getElementById('complete-button');

// Global variables
let countdownTitle = '';
let countdownDate = '';
let countdownValue = new Date();
let countdownActive;
let savedCountdown;

// Getting today's date (ISO format) and setting that as the min attribute in our countdown input form


// Helper function returning us the days, hours, minutes, seconds
function timeRemaining(ms) {
    const days = Math.floor(ms / (24*60*60*1000));
    const daysms = ms % (24*60*60*1000);
    const hours = Math.floor(daysms / (60*60*1000));
    const hoursms = ms % (60*60*1000);
    const minutes = Math.floor(hoursms / (60*1000));
    const minutesms = ms % (60*1000);
    const seconds = Math.floor(minutesms / 1000);
    return {days: days, hours: hours, minutes: minutes, seconds: seconds}
  }

// Populate Countdown / Complete UI
function updateDOM() {
    // Hide the input view and show the countdown view
  

    // Populating our countdown view with the chosen time
    countdownActive = setInterval(() => {
        // This allows us to calculate the values of the countdown (d,h,m,s)
       
        
    }, 1000); // setInterval allows us to change the time in our DOM every second
}


// Take values from the form input
function updateCountdown(e) {
    // Stops our form from refreshing the page

    // Get the values out of the form and place them in the title/date countdown global variables


    // Save the countdown title/date to place them in localStorage


    // Put the savedCountdown in localStorage
    localStorage.setItem('countdown', JSON.stringify(savedCountdown));

    // Make sure our user inputs a valid countdown date
  
}

// Reset all values
function reset() {
    // Hide countdowns and show input

    // Stop the countdown

    // Reset the values

    // Reset localStorage

}

function restorePreviousCountdown() {
    // Get countdown from localStorage if available
    // If true hide input view and populate the DOM with the savedCountdown object values

}


// Event listener
countdownForm.addEventListener('submit', updateCountdown);
countdownBtn.addEventListener('click', reset);
completeBtn.addEventListener('click', reset);

// On load - restore our localStorage countdown
restorePreviousCountdown();