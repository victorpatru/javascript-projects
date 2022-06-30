const button = document.getElementById('button');
const audioElement = document.getElementById('audio');


// Disable/Enable Button
function toggleButton() {
    button.disabled = !button.disabled;
}

// Passing Joke to the VoiceRSS API
function tellMe(joke) {
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


async function getJokes() {
    const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const joke = data.joke || `${data.setup} ${data.delivery}`;

        console.log(joke)
        // Text-to-Speech functionality
        tellMe(joke);

        // Disable Button
        toggleButton();
    } catch(error) {
        console.log('whoops', error);
    }
}


button.addEventListener('click', getJokes)
audioElement.addEventListener('ended', toggleButton)
