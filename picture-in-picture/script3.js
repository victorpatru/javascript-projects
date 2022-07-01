
// 1. Get HTML elements
const videoElement = document.getElementById('video')
const button = document.getElementById('button')


// 2. Get media stream, pass to video, and play
async function captureVideo() {
    try {
        videoElement.srcObject = await navigator.mediaDevices.getDisplayMedia();
        // Forgot the .onloadedmetadata
        // It is useful because we want to have the stream before playing it for the user
        videoElement.onloadedmetadata = () => videoElement.play();
    } catch(error) {
        console.log(`whooops ${error}`);
    }
}

captureVideo()
// 3. When you click the button trigger the Picture-in-Picture functionality
button.addEventListener('click', () => {
    // Used button.hidden instead of button.disabled
    // Allow our user not to abuse the button to trigger Picture-In-Picture again
    button.disabled = true;
    videoElement.requestPictureInPicture();
    button.disabled = false;
})