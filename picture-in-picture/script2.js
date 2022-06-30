// 1. Get HTML elements
// 2. Get media stream, pass to video, and play
// 3. When you click the button trigger the Picture-in-Picture functionality

const video = document.getElementById('video');
const button = document.getElementById('button');

async function getStream() {
    try {
        video.srcObject = await navigator.mediaDevices.getDisplayMedia();
        video.onloadedmetadata = () => video.play();
        
    } catch(error) {
        console.log(error);
    }
}



button.addEventListener('click', async () => {
   button.disabled = true;

   await video.requestPictureInPicture();

   button.disabled = false;
});

getStream()
