// Get the quote element
// Get the author element
// Get the Twitter button
const quoteContainer = document.querySelector('.quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const loader = document.getElementById('loader')

// Get the new quote button and add the event listener
const quoteBtn = document.getElementById('new-quote')

// Global variable for quotes
let apiQuotes = []


// Show loading
function loading() {
    loader.hidden = false
    quoteContainer.hidden = true
}

// Hide loading
function complete() {
    loader.hidden = true
    quoteContainer.hidden = false
}
// Function that return a random quote from our API and puts that information in the DOM
function newQuote() {
    loading()
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    authorText.textContent = quote.author || "Unknown"

    quote.text.length > 100 ? quoteText.classList.add('long-quote'): quoteText.classList.remove('long-quote')

    quoteText.textContent = quote.text
    complete()
}


// Async function that makes a request to an API for the array of quotes
async function getQuotes() {
    loading()
    const apiUrl = await fetch('https://type.fit/api/quotes')
    try {
        // Fetch data and transform into json()
        apiQuotes = await apiUrl.json()

        // Random element in the DOM
        newQuote()
    } catch(err) {
        console.log(err)
    }
}





// Tweet quote functionality
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`

    // Allows us to open the URL in a new window
    window.open(twitterUrl, '_blank')
}

// Event listeners: on page load, on twitter button click, and on new quote click
twitterBtn.addEventListener('click', tweetQuote)

window.addEventListener('DOMContentLoaded', () => {
    getQuotes()
})

quoteBtn.addEventListener('click', getQuotes)