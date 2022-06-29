const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

let photosArray = []
let ready = false
let imagesLoaded = 0
let totalImages = 0


// Unsplash API
const count = 30
const apiKey = 'PoycyyVsN7pqx4pMyZJc6K1qIuYNH77Koc82bFpPWLI'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl)
        photosArray = await response.json()
        displayPhotos()
    } catch(err) {
        console.log(err)
    }
}
getPhotos()


// Check if all images were loaded

function imageLoaded() {
    imagesLoaded++

    if (imagesLoaded === totalImages) {
        ready = true
        loader.hidden = true
    }
}

// Function that sets our element's attributes
// REVISIT THIS // BREAK IT APART

function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}

// Get data from the API, create elements with that data, and place it in the DOM
function displayPhotos() {
    imagesLoaded = 0
    totalImages = photosArray.length
    // Loop through each item in our photosArray (array of objects -- each with our desired info)
    const images = photosArray.forEach(photo => {

        // Create anchor element
        const item = document.createElement('a')
        setAttributes(item, { 
            href: photo.links.html, 
            target: '_blank'
        })
        // Create image element
        const img = document.createElement('img')

        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        })
        // Event Listener, check when each is finished loading
        img.addEventListener('load', imageLoaded)
        // Put <img> inside <a>, put <a> inside the image container
        item.appendChild(img)
        imageContainer.appendChild(item)
    })
}

// Check to see if scrolling near bottom of page, Load more photos
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        getPhotos()
    }
})