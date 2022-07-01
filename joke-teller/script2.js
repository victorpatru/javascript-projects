/*

 VoiceRSS.speech({
        key: '037d13cd51704ec781e4b41bb72c54a0',
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });

*/

// 1. Make a request to the API    
// const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
// 2. Run Text-to-Speech when our user clicks the button
// 3. Ensure that the user is not able to make further request while the joke is currently playing

// Get elements
const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// Enable/Disable button element
function toggleButton() {
    button.disabled = !button.disabled;
}

// Passing Joke to the VoiceRSS API

function tellJoke(joke) {
    VoiceRSS.speech({
        key: '037d13cd51704ec781e4b41bb72c54a0',
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

// Fetch joke from the API
async function getJokes() {
    const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const joke = data.joke || data.setup + data.delivery;

        // Text-to-Speech functionality
        tellJoke(joke);

        // Disable Button
        toggleButton();
    } catch(error) {
        console.log(error);
    }
}


// Event listeners
button.addEventListener('click', getJokes)
audioElement.addEventListener('ended', toggleButton)