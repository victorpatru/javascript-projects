// Get HTML elements
const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// Enable/disable button element
function toggleButton() {
    button.disabled = !button.disabled;
}

// Passing Joke to VoiceRSS API
function jokeRSS(joke) {
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
// Fetch joke from the JokeAPI
async function getJokes() {
    const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit'; 
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const jokes = data.joke || data.setup + data.delivery;
        jokeRSS(jokes);
        toggleButton();

    } catch(error) {
        console.log(error);
    }
}

// Event listeners for the button and the audioElement
// Hint: Audio element should have an effect on our disable/enable button
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);