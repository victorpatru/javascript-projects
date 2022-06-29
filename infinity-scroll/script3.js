// 1. Set global variables
// 2. imageLoaded() functionality
// 3. Helper function for setting multiple attributes at once
// 3. Create elements (links/photos) and put them in the DOM (displayPhotos() function)
// 4. Fetch data from the Unsplash API (getPhotos() function)
// 5. Track whether we are close to running out of images while scrolling. If yes fetch more data from the Unsplash API
// 6. Fetch images on load

const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

const count = 30
const apiKey = ''

let ready = false
let imagesLoaded = 0
let totalImages = 0
let imagesArray = []

function imageLoaded() {
    imagesLoaded++

    if (imagesLoaded === totalImages) {
        ready = true
        loader.hidden = true
    }
}

function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}

function displayPhotos() {
    imagesLoaded = 0
    totalImages = imagesArray.length

    imagesArray.forEach(photo => {
        const item = document.createElement('a')
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        })

        const img = document.createElement('img')
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        })

        img.addEventListener('load', imageLoaded)

        item.appendChild(img)
        imageContainer.appendChild(item)
    })
}

async function getPhotos() {
    try {
        const response = await fetch('')
        imagesArray = await response.json()
    } catch(error) {
        // Throw error
    }
}

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false
        getPhotos()
    }
})

getPhotos()