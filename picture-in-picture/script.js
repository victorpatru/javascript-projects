const videoElement = document.getElementById('video');
const button = document.getElementById('button');


// Prompt the user to select a media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        // Getting our media stream data (aka the video stream)
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        // Passing that stream to the DOM
        videoElement.srcObject = mediaStream;
        // Video will play once the stream metadata has finished loading
        videoElement.onloadedmetadata = () => videoElement.play();
    } catch(error) {
        // Catch our errors
        console.log(`whoops, error here: ${error}`);
    }
}

button.addEventListener('click', async () => {
    // Disable button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

// On Load
selectMediaStream()