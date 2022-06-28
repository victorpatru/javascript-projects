// DOM elements
const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

// Initializing global variables
let count = 30
let apiKey = ''

let ready = false
let loadedImages = 0
let totalImages = 0
let photoArray = []

// Tracking if our images have been loaded 
function imageLoaded() {
    loadedImages++

    if (loadedImages === totalImages) {
        ready = true
        loader.hidden = true
    }
}

// Helper function allowing us to set multiple attributes
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}

function displayPhotos() {
    loadedImages = 0
    totalImages = photoArray.length

    photoArray.forEach(photo => {
        // create <a> element
        const item = document.createElement('a')
        // set multiple attributes to the <a> element
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        })

        // create <img> element
        const img = document.createElement('img')
        // set multiple attributes to the <img> element
        setAttributes(img, {
            src: photo.urls.regular,
            title: photo.alt_description,
            alt: photo.alt_description
        })

        // Run the imageLoaded function each time an image was loaded in our program
        img.addEventListener('load', imageLoaded)

        // Putting our images in the DOM
        item.appendChild(img)
        imageContainer.appendChild(item)

    })
}

async function getPhotos() {
    try {
        const response = await fetch()
        photoArray = await response.json()
        displayPhotos()
    } catch(error) {
        // Throw error
    }
}

window.addEventListener('scroll', () => {
    // Conditon that checks whether we are close to the bottom of the page and if the current images have finished loading
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false
        getPhotos()
    }
})

// Initial image load
getPhotos()